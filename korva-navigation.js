/**
 * Korva UI Interactions & Navigation Controller
 * Handles desktop dropdowns, mobile menu, accordions, and FAQ.
 */
(function () {
  'use strict';

  if (window.__korva_nav_initialized) return;
  window.__korva_nav_initialized = true;

  function initKorvaNavigation() {
    // ----------------------------------------------------
    // 1. DESKTOP NAVBAR DROPDOWNS (Productos, Recursos, Empresa)
    // ----------------------------------------------------
    const desktopNav = document.querySelector('nav[aria-label="Principal"]');
    if (desktopNav) {
      const dropdownButtons = desktopNav.querySelectorAll('button[aria-controls]');
      let activeMenu = null;
      let closeTimer = null;

      function openMenu(btn, menu) {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        if (activeMenu && activeMenu !== menu) {
          closeMenu(activeMenu);
        }
        menu.removeAttribute('hidden');
        menu.style.display = 'block';
        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('bg-accent');
        const arrow = btn.querySelector('svg');
        if (arrow) arrow.classList.add('rotate-180');
        activeMenu = menu;
      }

      function closeMenu(menu) {
        if (!menu) return;
        menu.setAttribute('hidden', '');
        menu.style.display = '';
        const id = menu.id;
        const btn = desktopNav.querySelector(`button[aria-controls="${id}"]`);
        if (btn) {
          btn.setAttribute('aria-expanded', 'false');
          btn.classList.remove('bg-accent', 'bg-white/[0.06]');
          const arrow = btn.querySelector('svg');
          if (arrow) arrow.classList.remove('rotate-180');
        }
        if (activeMenu === menu) activeMenu = null;
      }

      function scheduleClose(menu) {
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
          closeMenu(menu);
        }, 180);
      }

      dropdownButtons.forEach(btn => {
        const targetId = btn.getAttribute('aria-controls');
        const menu = document.getElementById(targetId);
        if (!menu) return;

        const parent = btn.parentElement;

        // Click toggle
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isExpanded = btn.getAttribute('aria-expanded') === 'true';
          if (isExpanded) {
            closeMenu(menu);
          } else {
            openMenu(btn, menu);
          }
        });

        // Hover support
        if (parent) {
          parent.addEventListener('mouseenter', () => {
            openMenu(btn, menu);
          });
          parent.addEventListener('mouseleave', () => {
            scheduleClose(menu);
          });
        }

        // Keep open while hovering menu
        menu.addEventListener('mouseenter', () => {
          if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
          }
        });
        menu.addEventListener('mouseleave', () => {
          scheduleClose(menu);
        });

        // Close on clicking inside links
        menu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            closeMenu(menu);
          });
        });
      });

      // Global click outside to close
      document.addEventListener('click', (e) => {
        if (activeMenu && !activeMenu.contains(e.target) && !e.target.closest('button[aria-controls]')) {
          closeMenu(activeMenu);
        }
      });

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && activeMenu) {
          closeMenu(activeMenu);
        }
      });
    }

    // ----------------------------------------------------
    // 2. MOBILE MENU & HAMBURGER (Abrir menú)
    // ----------------------------------------------------
    const mobileBtn = document.querySelector('header button[aria-label="Abrir menú"], header button[aria-label="Cerrar menú"]');
    const mobileDrawer = document.querySelector('header .overflow-hidden.border-b.lg\\:hidden, header .korva-mobile-drawer');
    if (mobileBtn && mobileDrawer) {
      mobileDrawer.classList.add('korva-mobile-drawer');

      // Create Backdrop overlay if not already present
      let backdrop = document.getElementById('korva-mobile-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'korva-mobile-backdrop';
        backdrop.className = 'korva-mobile-backdrop lg:hidden';
        document.body.appendChild(backdrop);
      }

      const hamburgerPath = 'M4.5 7h15M4.5 12h15M4.5 17h15';
      const closePath = 'M6 6l12 12M6 18L18 6';
      const iconPath = mobileBtn.querySelector('path');
      let closeTimeout = null;

      function openDrawer() {
        if (closeTimeout) {
          clearTimeout(closeTimeout);
          closeTimeout = null;
        }
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileBtn.setAttribute('aria-label', 'Cerrar menú');
        if (iconPath) iconPath.setAttribute('d', closePath);

        mobileDrawer.classList.remove('is-closing', 'max-h-0', 'border-transparent', 'opacity-0');
        mobileDrawer.classList.add('is-open');
        backdrop.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
        if (!mobileDrawer.classList.contains('is-open') && mobileBtn.getAttribute('aria-expanded') !== 'true') return;
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.setAttribute('aria-label', 'Abrir menú');
        if (iconPath) iconPath.setAttribute('d', hamburgerPath);

        mobileDrawer.classList.remove('is-open');
        mobileDrawer.classList.add('is-closing');
        backdrop.classList.remove('is-visible');
        document.body.style.overflow = '';

        closeTimeout = setTimeout(() => {
          mobileDrawer.classList.remove('is-closing');
          mobileDrawer.classList.add('max-h-0', 'border-transparent', 'opacity-0');
          closeTimeout = null;
        }, 280);
      }

      mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileBtn.getAttribute('aria-expanded') === 'true';
        if (isOpen) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });

      // Click on backdrop closes drawer
      backdrop.addEventListener('click', () => {
        closeDrawer();
      });

      // Escape key closes drawer
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileBtn.getAttribute('aria-expanded') === 'true') {
          closeDrawer();
        }
      });

      // Close on window resize if crossing to desktop breakpoint
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && mobileBtn.getAttribute('aria-expanded') === 'true') {
          closeDrawer();
        }
      });

      // Mobile sub-accordions (Productos, Recursos, Empresa inside mobile drawer)
      const subButtons = mobileDrawer.querySelectorAll('button[aria-controls]');
      subButtons.forEach(btn => {
        const targetId = btn.getAttribute('aria-controls');
        const target = document.getElementById(targetId);
        if (!target) return;

        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isOpen = btn.getAttribute('aria-expanded') === 'true';
          const arrow = btn.querySelector('svg');
          if (isOpen) {
            btn.setAttribute('aria-expanded', 'false');
            if (arrow) arrow.classList.remove('rotate-180');
            target.classList.remove('grid-rows-[1fr]');
            target.classList.add('grid-rows-[0fr]');
          } else {
            // Close other mobile sub-menus
            subButtons.forEach(otherBtn => {
              if (otherBtn !== btn) {
                otherBtn.setAttribute('aria-expanded', 'false');
                const otherArrow = otherBtn.querySelector('svg');
                if (otherArrow) otherArrow.classList.remove('rotate-180');
                const otherTarget = document.getElementById(otherBtn.getAttribute('aria-controls'));
                if (otherTarget) {
                  otherTarget.classList.remove('grid-rows-[1fr]');
                  otherTarget.classList.add('grid-rows-[0fr]');
                }
              }
            });
            btn.setAttribute('aria-expanded', 'true');
            if (arrow) arrow.classList.add('rotate-180');
            target.classList.remove('grid-rows-[0fr]');
            target.classList.add('grid-rows-[1fr]');
          }
        });
      });

      // Close mobile drawer on link click
      mobileDrawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          closeDrawer();
        });
      });
    }

    // ----------------------------------------------------
    // 3. FAQ ACCORDIONS (Preguntas frecuentes)
    // ----------------------------------------------------
    const faqAnswers = {
      // Digital Services & Systems (Korva)
      "¿Qué soluciones y servicios digitales ofrece Korva?": "Implementamos tres soluciones especializadas: 1) Sistema de Citas y Reservas Online (calendario 24/7 y recordatorios WhatsApp), 2) Marketing Google Local (Web + Google Business Profile + SEO local y reseñas), y 3) CRM Comercial con Cotizaciones. Podés contratar uno solo o el ecosistema completo integrado.",
      "¿Cómo funciona el modelo de precios (setup + mensualidad)?": "Cada servicio se estructura con una tarifa de implementación inicial (setup) para el diseño, configuración y puesta en marcha llave en mano, más una mensualidad accesible por alojamiento en servidores de alta velocidad, mantenimiento, soporte técnico y optimizaciones continuas.",
      "¿Puedo empezar con un solo servicio o necesito los tres?": "Totalmente. Podés arrancar con el producto que resuelva tu cuello de botella más urgente (por ejemplo, el Sistema de Citas si perdés tiempo atendiendo llamadas, o Marketing Google Local si necesitás captar nuevos clientes) e incorporar los demás sistemas a medida que tu negocio crezca.",
      "¿Cómo ayuda el servicio de Marketing \"Google Local\"?": "Optimizamos tu perfil en Google Maps, creamos una página web de captación rápida para móviles y activamos la recolección de reseñas 5 estrellas. No prometemos el puesto #1 con trucos mágicos: prometemos un proceso constante y reportes mensuales transparentes con llamadas y consultas reales.",
      "¿Cómo funciona el Sistema de Citas y Reservas Online?": "Tus clientes acceden a un enlace directo donde seleccionan el servicio, profesional y horario disponible. El turno se confirma en el acto, se sincroniza con Google Calendar y envía recordatorios automáticos por WhatsApp o email para evitar inasistencias.",
      "¿Cómo se conecta el CRM con las cotizaciones?": "Cada consulta recibida desde tu web o Google entra automáticamente al CRM como prospecto. Desde allí, tu equipo puede gestionar el embudo, programar llamadas de seguimiento y emitir presupuestos y cotizaciones profesionales en menos de dos minutos.",
      "¿En cuánto tiempo queda funcionando el sistema en mi negocio?": "La implementación estándar toma entre 7 y 15 días hábiles. Nos encargamos de todo: configuración técnica, personalización con tu marca, carga de datos iniciales y una sesión de capacitación para vos y tu equipo.",
      "¿Qué incluye el soporte y mantenimiento mensual?": "Incluye monitoreo constante del sistema, copias de seguridad automáticas, soporte prioritario por WhatsApp y correo, resolución de dudas y actualizaciones técnicas continuas para que tu operación nunca se detenga.",

      // Legacy fallback
      "¿Para qué sirve Korva?": "Korva reúne clientes, contactos, ventas, proyectos y tareas en un solo lugar. Está pensada para agencias y equipos que trabajan con varias cuentas.",
      "¿Puedo empezar gratis?": "Sí. El plan Free no vence y no requiere tarjeta. Incluye hasta 2 personas y 2.500 fichas de clientes, contactos, ventas y proyectos.",
      "¿Qué puede hacer el Agente?": "Podés pedirle que busque información de tus clientes, prepare reuniones, actualice fichas, cree tareas y redacte correos. Antes de enviar un correo, borrar datos o cambiar la configuración, te pide confirmación.",
      "¿Cómo se calcula el precio para un equipo?": "Los planes pagos se cobran por persona. En Precios podés comparar qué incluye cada plan y cuánto cuesta.",
      "¿Puedo enviar seguimientos desde el correo de mi negocio?": "Sí. Podés configurar el envío para que salgan desde una dirección de tu negocio. Para hacerlo, necesitás confirmar tu dominio; está disponible desde Starter.",
      "¿Puedo importar los datos que ya tengo?": "Sí. Podés traer clientes y otros datos desde una planilla. Encontrás los pasos en el Centro de ayuda.",
      "¿Mis datos están separados de los de otras empresas?": "Sí. Los datos de cada equipo están separados y cada persona entra con su propia cuenta. Además, la persona dueña o administradora puede descargar una copia desde Configuración.",
      "¿Qué pasa si cancelo mi plan?": "Podés iniciar la cancelación desde Configuración → Facturación. Antes de confirmar, Korva te indica cuándo termina el plan y qué cambia en tu cuenta."
    };

    const faqButtons = document.querySelectorAll('section button[aria-expanded]');
    faqButtons.forEach(btn => {
      const qText = btn.querySelector('span')?.textContent?.trim();
      if (!qText || !(qText in faqAnswers)) return;

      const parent = btn.parentElement;
      let answerDiv = parent.querySelector('.overflow-hidden');

      if (!answerDiv) {
        answerDiv = document.createElement('div');
        answerDiv.className = 'overflow-hidden transition-all duration-300';
        answerDiv.style.height = '0px';
        answerDiv.style.opacity = '0';
        const p = document.createElement('p');
        p.className = 'max-w-2xl pb-6 text-14-5 leading-relaxed text-muted-foreground';
        p.textContent = faqAnswers[qText];
        answerDiv.appendChild(p);
        parent.appendChild(answerDiv);
      }

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const iconSpan = btn.querySelector('span.flex.rounded-full');
        const iconSvg = iconSpan?.querySelector('svg');

        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          if (iconSpan) {
            iconSpan.classList.remove('border-foreground', 'bg-foreground', 'text-background');
            iconSpan.classList.add('border-border', 'text-muted-foreground');
          }
          if (iconSvg) iconSvg.classList.remove('rotate-45');
          answerDiv.style.height = '0px';
          answerDiv.style.opacity = '0';
        } else {
          btn.setAttribute('aria-expanded', 'true');
          if (iconSpan) {
            iconSpan.classList.remove('border-border', 'text-muted-foreground');
            iconSpan.classList.add('border-foreground', 'bg-foreground', 'text-background');
          }
          if (iconSvg) iconSvg.classList.add('rotate-45');
          answerDiv.style.height = answerDiv.scrollHeight + 'px';
          answerDiv.style.opacity = '1';
        }
      });
    });

    // ----------------------------------------------------
    // 4. FOOTER MOBILE ACCORDIONS
    // ----------------------------------------------------
    const footerButtons = document.querySelectorAll('footer button[aria-controls]');
    footerButtons.forEach(btn => {
      const targetId = btn.getAttribute('aria-controls');
      const target = document.getElementById(targetId);
      if (!target) return;

      btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        const arrow = btn.querySelector('svg');
        if (isExpanded) {
          btn.setAttribute('aria-expanded', 'false');
          if (arrow) arrow.classList.remove('rotate-180');
          target.classList.remove('grid-rows-[1fr]');
          target.classList.add('grid-rows-[0fr]');
        } else {
          btn.setAttribute('aria-expanded', 'true');
          if (arrow) arrow.classList.add('rotate-180');
          target.classList.remove('grid-rows-[0fr]');
          target.classList.add('grid-rows-[1fr]');
        }
      });
    });

    // ----------------------------------------------------
    // 4. MOBILE STEPS ACCORDION WITH FLUID ENTRANCE & EXIT (#puesta-en-marcha)
    // ----------------------------------------------------
    const stepItems = document.querySelectorAll('li[data-step="true"]');
    stepItems.forEach(li => {
      const btn = li.querySelector('button[aria-expanded]');
      const cardWrap = li.querySelector('.korva-step-card-wrapper') || li.querySelector('.mt-3');
      const arrow = btn ? btn.querySelector('svg') : null;
      if (!btn || !cardWrap) return;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          // Smooth exit animation (salida)
          btn.setAttribute('aria-expanded', 'false');
          if (arrow) arrow.classList.remove('rotate-180');
          cardWrap.classList.remove('is-open');
        } else {
          // Smooth exit animation for other open steps
          stepItems.forEach(otherLi => {
            const otherBtn = otherLi.querySelector('button[aria-expanded]');
            const otherWrap = otherLi.querySelector('.korva-step-card-wrapper') || otherLi.querySelector('.mt-3');
            const otherArrow = otherBtn ? otherBtn.querySelector('svg') : null;
            if (otherBtn && otherWrap && otherBtn !== btn) {
              otherBtn.setAttribute('aria-expanded', 'false');
              if (otherArrow) otherArrow.classList.remove('rotate-180');
              otherWrap.classList.remove('is-open');
            }
          });

          // Smooth entrance animation for this step (entrada)
          btn.setAttribute('aria-expanded', 'true');
          if (arrow) arrow.classList.add('rotate-180');
          cardWrap.classList.add('is-open');
        }
      });
    });

    // ----------------------------------------------------
    // 4b. CONTEXTO WIRE FLOW STEP HIGHLIGHT & HIGH CONTRAST (#contexto)
    // ----------------------------------------------------
    const contextoSec = document.getElementById('contexto');
    if (contextoSec) {
      const stepLis = contextoSec.querySelectorAll('ul > li');
      const wireFlowPaths = contextoSec.querySelectorAll('svg .mk-wire-flow');
      let activeIndex = 0;

      function setActiveContextStep(idx) {
        stepLis.forEach((li, i) => {
          if (i === idx) {
            li.classList.add('active-step');
            li.style.opacity = '1';
          } else {
            li.classList.remove('active-step');
            li.style.opacity = '0.88';
          }
        });
        wireFlowPaths.forEach((path, i) => {
          if (i === idx) {
            path.style.stroke = 'var(--primary)';
            path.style.strokeWidth = '2.5px';
            path.style.strokeOpacity = '1';
          } else {
            path.style.stroke = 'var(--primary)';
            path.style.strokeWidth = '1.5px';
            path.style.strokeOpacity = '0.35';
          }
        });
      }

      if (stepLis.length > 0) {
        setActiveContextStep(0);
        stepLis.forEach((li, i) => {
          li.style.cursor = 'pointer';
          li.addEventListener('click', () => {
            activeIndex = i;
            setActiveContextStep(activeIndex);
          });
        });

        setInterval(() => {
          activeIndex = (activeIndex + 1) % stepLis.length;
          setActiveContextStep(activeIndex);
        }, 3000);
      }
    }

    // ----------------------------------------------------
    // 5. ADS / GOOGLE LOCAL STEP ANIMATION (#anuncios)
    // ----------------------------------------------------
    const anunciosSec = document.getElementById('anuncios');
    if (anunciosSec) {
      const desktopCon = anunciosSec.querySelector('.max-lg\\:hidden .grid:nth-child(2)');
      const tabletCon = anunciosSec.querySelector('.sm\\:grid.sm\\:grid-cols-2 > div:nth-child(2)');
      const mobileCon = anunciosSec.querySelector('.py-8.sm\\:hidden');

      let phase = 0;
      const maxPhase = 4; // 0..3: steps, 4: loop/report

      function updatePhase(p) {
        // Desktop
        if (desktopCon) {
          const stepCircles = desktopCon.querySelectorAll('.flex.w-\\[150px\\] > span.size-12');
          const connectors = desktopCon.querySelectorAll('.relative.mt-6.flex-1 > span');
          const loopSvgPath = desktopCon.querySelector('svg path[stroke="var(--foreground)"]');
          const loopPill = desktopCon.querySelector('.absolute.bottom-\\[-14px\\]');

          stepCircles.forEach((circle, i) => {
            circle.classList.remove('border-foreground', 'text-foreground', 'shadow-[0_0_0_6px_var(--accent)]', 'bg-foreground', 'text-background', 'border-border', 'text-muted-foreground');
            if (p === i) {
              circle.classList.add('border-foreground', 'text-foreground', 'shadow-[0_0_0_6px_var(--accent)]');
            } else if (p > i) {
              circle.classList.add('border-foreground', 'bg-foreground', 'text-background');
            } else {
              circle.classList.add('border-border', 'text-muted-foreground');
            }
          });

          connectors.forEach((conn, i) => {
            if (p > i) {
              conn.classList.remove('scale-x-0');
              conn.classList.add('scale-x-100');
            } else {
              conn.classList.remove('scale-x-100');
              conn.classList.add('scale-x-0');
            }
          });

          if (loopSvgPath) {
            if (p >= 4) {
              loopSvgPath.setAttribute('stroke-dasharray', '1 0');
              loopSvgPath.style.transition = 'stroke-dasharray 0.8s ease-in-out';
            } else {
              loopSvgPath.setAttribute('stroke-dasharray', '0 1');
            }
          }

          if (loopPill) {
            if (p >= 4) {
              loopPill.classList.remove('border-border', 'opacity-50');
              loopPill.classList.add('border-foreground', 'opacity-100', 'shadow-sm');
            } else {
              loopPill.classList.remove('border-foreground', 'opacity-100', 'shadow-sm');
              loopPill.classList.add('border-border', 'opacity-50');
            }
          }
        }

        // Tablet & Mobile
        [tabletCon, mobileCon].forEach(container => {
          if (!container) return;
          const stepCircles = container.querySelectorAll('.relative.flex.items-start > span.size-12');
          const connectors = container.querySelectorAll('.relative.flex.items-start > span.w-0\\.5 > span');
          const loopCurve = container.querySelector('span[style*="clip-path"]');
          const loopPill = container.querySelector('span.mt-6.inline-flex');

          stepCircles.forEach((circle, i) => {
            circle.classList.remove('border-foreground', 'text-foreground', 'shadow-[0_0_0_6px_var(--accent)]', 'bg-foreground', 'text-background', 'border-border', 'text-muted-foreground');
            if (p === i) {
              circle.classList.add('border-foreground', 'text-foreground', 'shadow-[0_0_0_6px_var(--accent)]');
            } else if (p > i) {
              circle.classList.add('border-foreground', 'bg-foreground', 'text-background');
            } else {
              circle.classList.add('border-border', 'text-muted-foreground');
            }
          });

          connectors.forEach((conn, i) => {
            if (p > i) {
              conn.classList.remove('scale-y-0');
              conn.classList.add('scale-y-100');
            } else {
              conn.classList.remove('scale-y-100');
              conn.classList.add('scale-y-0');
            }
          });

          if (loopCurve) {
            if (p >= 4) {
              loopCurve.style.clipPath = 'inset(0 0 0 0)';
            } else {
              loopCurve.style.clipPath = 'inset(100% 0 0 0)';
            }
          }

          if (loopPill) {
            if (p >= 4) {
              loopPill.classList.remove('border-border', 'opacity-50');
              loopPill.classList.add('border-foreground', 'opacity-100', 'shadow-sm');
            } else {
              loopPill.classList.remove('border-foreground', 'opacity-100', 'shadow-sm');
              loopPill.classList.add('border-border', 'opacity-50');
            }
          }
        });
      }

      updatePhase(0);
      setInterval(() => {
        phase = (phase + 1) % (maxPhase + 1);
        updatePhase(phase);
      }, 1600);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initKorvaNavigation);
  } else {
    initKorvaNavigation();
  }
})();
