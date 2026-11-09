/**
 * Korva - Simuladores Interactivos Locales para cada Producto
 * Proporciona demostraciones funcionales e interactivas en tiempo real.
 */

document.addEventListener("DOMContentLoaded", () => {
  initCitasSim();
  initMarketingSim();
  initCrmSim();
  initMultiSim();
  initRecordatoriosSim();
  initResenasSim();
  initCotizacionesSim();
  initEmbudoSim();
  initCalendarSim();
  initBusinessSim();
  initReportesSim();
});

// -------------------------------------------------------------
// 1. CITAS & RESERVAS SIMULATOR (citas.html) - Split View Live Sync
// -------------------------------------------------------------
function initCitasSim() {
  const root = document.getElementById("sim-citas");
  if (!root) return;

  let service = "Consulta Médica General";
  let price = "35";
  let duration = "30 min";
  let day = "Martes 11 de Noviembre";
  let dayShort = "Mar 11";
  let slot = "10:30 AM";

  const eventTitle = document.getElementById("citas-event-title");
  const eventDateTime = document.getElementById("citas-event-datetime");
  const eventPatient = document.getElementById("citas-event-patient");
  const eventPhone = document.getElementById("citas-event-phone");
  const eventPrice = document.getElementById("citas-event-price");
  const eventCode = document.getElementById("citas-event-code");
  const eventStatus = document.getElementById("citas-event-status");
  const confirmedBanner = document.getElementById("citas-confirmed-banner");

  const nameInput = root.querySelector(".citas-input-name");
  const phoneInput = root.querySelector(".citas-input-phone");

  function syncRightCard() {
    if (eventTitle) eventTitle.textContent = service;
    if (eventDateTime) {
      eventDateTime.innerHTML = `
        <svg class="size-3.5 text-muted-foreground shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        ${day} · ${slot} (${duration})
      `;
    }
    if (eventPrice) eventPrice.textContent = `$${price} USD`;
    if (eventPatient && nameInput) eventPatient.textContent = nameInput.value.trim() || "Carlos Mendoza";
    if (eventPhone && phoneInput) eventPhone.textContent = phoneInput.value.trim() || "+503 7890-1234";

    // Sync active day in mini calendar
    root.querySelectorAll(".korva-cal-cell").forEach(cell => {
      if (cell.dataset.day === dayShort) {
        cell.classList.add("active");
      } else {
        cell.classList.remove("active");
      }
    });
  }

  // Service selection
  root.querySelectorAll(".citas-service-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".citas-service-btn").forEach(b => {
        b.classList.remove("border-foreground", "bg-accent/40");
        b.classList.add("border-border");
      });
      btn.classList.add("border-foreground", "bg-accent/40");
      btn.classList.remove("border-border");

      service = btn.dataset.service;
      price = btn.dataset.price;
      duration = btn.dataset.duration || "30 min";
      syncRightCard();
    });
  });

  // Day selection
  root.querySelectorAll(".citas-day-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".citas-day-btn").forEach(b => {
        b.classList.remove("bg-foreground", "text-background", "font-semibold");
        b.classList.add("border-border");
      });
      btn.classList.add("bg-foreground", "text-background", "font-semibold");
      btn.classList.remove("border-border");

      day = btn.dataset.full;
      dayShort = btn.dataset.day;
      syncRightCard();
    });
  });

  // Mini calendar cells click
  root.querySelectorAll(".korva-cal-cell").forEach(cell => {
    cell.addEventListener("click", () => {
      const matchBtn = Array.from(root.querySelectorAll(".citas-day-btn")).find(b => b.dataset.day === cell.dataset.day);
      if (matchBtn) matchBtn.click();
    });
  });

  // Slot selection
  root.querySelectorAll(".citas-slot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".citas-slot-btn").forEach(b => {
        b.classList.remove("bg-foreground", "text-background", "font-semibold");
        b.classList.add("border-border");
      });
      btn.classList.add("bg-foreground", "text-background", "font-semibold");
      btn.classList.remove("border-border");

      slot = btn.dataset.slot;
      syncRightCard();
    });
  });

  // Patient live typing
  if (nameInput) nameInput.addEventListener("input", syncRightCard);
  if (phoneInput) phoneInput.addEventListener("input", syncRightCard);

  // Confirm button
  const confirmBtn = root.querySelector(".citas-confirm-btn");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      const code = "#KV-" + Math.floor(1000 + Math.random() * 9000);
      if (eventCode) eventCode.textContent = code;

      if (eventStatus) {
        eventStatus.innerHTML = `<span class="size-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Turno Confirmado ✓`;
        eventStatus.className = "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-11 font-bold bg-emerald-50 text-emerald-800 border border-emerald-300";
      }

      const eventCard = document.getElementById("citas-event-card");
      if (eventCard) {
        eventCard.classList.remove("border-l-foreground");
        eventCard.style.borderLeftColor = "#10b981";
      }

      if (confirmedBanner) confirmedBanner.classList.remove("hidden");
    });
  }

  // Reset button
  const resetBtn = document.getElementById("citas-reset-view-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirmedBanner) confirmedBanner.classList.add("hidden");
      if (eventStatus) {
        eventStatus.innerHTML = `<span class="size-1.5 rounded-full bg-neutral-600"></span> Previsualización en vivo`;
        eventStatus.className = "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-11 font-bold bg-neutral-100 text-neutral-800 border border-neutral-300";
      }
      const eventCard = document.getElementById("citas-event-card");
      if (eventCard) eventCard.style.borderLeftColor = "#111111";
    });
  }

  syncRightCard();
}

// -------------------------------------------------------------
// 2. MARKETING GOOGLE LOCAL SIMULATOR (marketing-local.html)
// -------------------------------------------------------------
function initMarketingSim() {
  const root = document.getElementById("sim-marketing-root");
  if (!root) return;

  const queries = {
    dental: { query: "clínica dental cerca de mí", title: "Clínica Dental Escalón", address: "Av. Las Rosas #42, San Salvador" },
    legal: { query: "abogados de empresas", title: "Estudio Jurídico Central", address: "Torre Futura, Nivel 8, San Salvador" },
    taller: { query: "taller mecánico automotriz", title: "AutoExpert Service Center", address: "Paseo Gral. Escalón, San Salvador" }
  };

  let currentCategory = "dental";
  let isOptimized = true;

  const queryButtons = root.querySelectorAll(".mkt-query-btn");
  const toggleBtnSin = root.querySelector(".mkt-toggle-sin");
  const toggleBtnCon = root.querySelector(".mkt-toggle-con");

  function renderMarketingView() {
    const data = queries[currentCategory];
    const searchBar = root.querySelector(".mkt-search-bar");
    if (searchBar) searchBar.textContent = data.query;

    const rankBadge = root.querySelector(".mkt-rank-badge");
    const starsEl = root.querySelector(".mkt-stars-text");
    const reviewsEl = root.querySelector(".mkt-reviews-text");
    const titleEl = root.querySelector(".mkt-biz-title");
    const addrEl = root.querySelector(".mkt-biz-addr");
    const callsEl = root.querySelector(".mkt-metric-calls");
    const viewsEl = root.querySelector(".mkt-metric-views");
    const leadsEl = root.querySelector(".mkt-metric-leads");
    const statusText = root.querySelector(".mkt-status-text");

    if (titleEl) titleEl.textContent = data.title;
    if (addrEl) addrEl.textContent = data.address;

    if (isOptimized) {
      if (rankBadge) {
        rankBadge.textContent = "POSICIÓN #1 EN MAPS";
        rankBadge.className = "mkt-rank-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-11 font-bold bg-emerald-100 text-emerald-950 border border-emerald-300";
      }
      if (starsEl) starsEl.textContent = "4.9 ★★★★★";
      if (reviewsEl) reviewsEl.textContent = "(148 reseñas verificadas)";
      if (callsEl) callsEl.textContent = "68";
      if (viewsEl) viewsEl.textContent = "1,240";
      if (leadsEl) leadsEl.textContent = "42";
      if (statusText) statusText.textContent = "Ficha 100% verificada, fotos 4K, respuesta en 5 min y botón de reserva online activo.";
    } else {
      if (rankBadge) {
        rankBadge.textContent = "POSICIÓN #14 (PÁGINA 2)";
        rankBadge.className = "mkt-rank-badge inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-11 font-bold bg-amber-100 text-amber-950 border border-amber-300";
      }
      if (starsEl) starsEl.textContent = "3.8 ★★★☆☆";
      if (reviewsEl) reviewsEl.textContent = "(9 reseñas antiguas)";
      if (callsEl) callsEl.textContent = "3";
      if (viewsEl) viewsEl.textContent = "45";
      if (leadsEl) leadsEl.textContent = "1";
      if (statusText) statusText.textContent = "Sin fotos optimizadas, sin horario confirmado, perdiendo el 92% de clientes locales.";
    }
  }

  queryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      queryButtons.forEach((b) => {
        b.className = "mkt-query-btn px-2.5 py-1 rounded-md text-12 font-medium text-foreground border border-border hover:bg-black/5 transition-colors";
      });
      btn.className = "mkt-query-btn px-2.5 py-1 rounded-md text-12 font-semibold bg-foreground text-background shadow-xs transition-colors";
      currentCategory = btn.dataset.cat;
      renderMarketingView();
    });
  });

  if (toggleBtnSin && toggleBtnCon) {
    toggleBtnSin.addEventListener("click", () => {
      isOptimized = false;
      toggleBtnSin.className = "mkt-toggle-sin px-3 py-1 rounded-md text-12 font-semibold bg-foreground text-background shadow-xs transition-colors";
      toggleBtnCon.className = "mkt-toggle-con px-3 py-1 rounded-md text-12 font-medium text-foreground hover:bg-black/5 transition-colors";
      renderMarketingView();
    });

    toggleBtnCon.addEventListener("click", () => {
      isOptimized = true;
      toggleBtnCon.className = "mkt-toggle-con px-3 py-1 rounded-md text-12 font-semibold bg-foreground text-background shadow-xs transition-colors";
      toggleBtnSin.className = "mkt-toggle-sin px-3 py-1 rounded-md text-12 font-medium text-foreground hover:bg-black/5 transition-colors";
      renderMarketingView();
    });
  }

  renderMarketingView();
}

// -------------------------------------------------------------
// 3. CRM COMERCIAL SIMULATOR (crm.html)
// -------------------------------------------------------------
function initCrmSim() {
  const root = document.getElementById("sim-crm-root");
  if (!root) return;

  const totalEl = root.querySelector(".crm-total-pipeline");
  let pipelineAmount = 2840;

  root.querySelectorAll(".crm-advance-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest(".korva-kanban-card");
      if (!card) return;

      const currentStage = card.dataset.stage;
      const val = parseInt(card.dataset.val || "0", 10);

      if (currentStage === "nuevos") {
        card.dataset.stage = "seguimiento";
        root.querySelector(".crm-col-seguimiento").appendChild(card);
        btn.textContent = "Enviar cotización →";
      } else if (currentStage === "seguimiento") {
        card.dataset.stage = "cotizacion";
        root.querySelector(".crm-col-cotizacion").appendChild(card);
        btn.textContent = "Marcar ganado ✓";
      } else if (currentStage === "cotizacion") {
        card.dataset.stage = "ganados";
        root.querySelector(".crm-col-ganados").appendChild(card);
        card.classList.add("border-emerald-300", "bg-emerald-50/40");
        btn.remove();
        pipelineAmount += val;
        if (totalEl) totalEl.textContent = `$${pipelineAmount.toLocaleString()} USD`;
      }
    });
  });
}

// -------------------------------------------------------------
// 4. MULTIESPECIALISTA SIMULATOR (multiespecialista.html)
// -------------------------------------------------------------
function initMultiSim() {
  const root = document.getElementById("sim-multi-root");
  if (!root) return;

  const specialists = {
    sofia: { name: "Dra. Sofía Morales", spec: "Ortodoncia y Brackets", room: "Consultorio 3", patients: 9, hours: "08:00 AM - 01:00 PM" },
    carlos: { name: "Dr. Carlos Ramos", spec: "Implantología y Cirugía", room: "Consultorio 1", patients: 6, hours: "02:00 PM - 07:00 PM" },
    elena: { name: "Dra. Elena Vega", spec: "Odontopediatría", room: "Consultorio 2", patients: 12, hours: "09:00 AM - 05:00 PM" }
  };

  root.querySelectorAll(".multi-spec-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      root.querySelectorAll(".multi-spec-btn").forEach((b) => b.classList.remove("border-foreground", "bg-accent/50"));
      btn.classList.add("border-foreground", "bg-accent/50");

      const spec = specialists[btn.dataset.spec];
      if (!spec) return;

      root.querySelector(".multi-spec-name").textContent = spec.name;
      root.querySelector(".multi-spec-desc").textContent = `${spec.spec} · ${spec.room}`;
      root.querySelector(".multi-spec-patients").textContent = `${spec.patients} pacientes hoy`;
      root.querySelector(".multi-spec-hours").textContent = spec.hours;
    });
  });

  root.querySelectorAll(".multi-slot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("multi-slot-occupied")) return;
      btn.classList.remove("bg-white", "text-foreground");
      btn.classList.add("bg-foreground", "text-background", "font-semibold");
      btn.textContent = "Turno Asignado ✓";
    });
  });
}

// -------------------------------------------------------------
// 5. RECORDATORIOS WHATSAPP SIMULATOR (recordatorios.html)
// -------------------------------------------------------------
function initRecordatoriosSim() {
  const root = document.getElementById("sim-recordatorios-root");
  if (!root) return;

  const chat = root.querySelector(".korva-wa-chat");
  const btnStep2 = document.getElementById("wa-btn-step-2");
  const btnStep3 = document.getElementById("wa-btn-step-3");
  const btnStep4 = document.getElementById("wa-btn-step-4");
  const resetBtn = root.querySelector(".wa-reset-btn");

  const initialChatHtml = `
    <div class="text-center text-11 text-neutral-500 py-1">Hoy</div>
    <div class="korva-wa-msg-in">
      Hola Roberto, te recordamos tu cita médica de mañana a las 10:00 AM con la Dra. Sofía Morales en Sede Escalón.<br><br>
      ¿Nos confirmas tu asistencia?<br>
      Responde <strong>[1]</strong> para Confirmar o <strong>[2]</strong> para Reprogramar.
      <div class="mt-2.5 pt-2 border-t border-black/5 flex gap-1.5">
        <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-10 font-bold border border-emerald-200">1. Confirmar</span>
        <span class="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 text-10 font-semibold border border-neutral-200">2. Reprogramar</span>
      </div>
      <span class="text-9 text-neutral-400 block text-right mt-1">09:00 AM</span>
    </div>
  `;

  if (btnStep2) {
    btnStep2.addEventListener("click", () => {
      if (btnStep2.disabled) return;
      const bubble = document.createElement("div");
      bubble.className = "korva-wa-msg-out";
      bubble.innerHTML = `1, confirmo mi asistencia<span class="text-9 text-neutral-500 block text-right mt-1">09:02 AM ✓✓</span>`;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;

      btnStep2.disabled = true;
      btnStep2.className = "wa-step-btn w-full p-3 rounded-xl border border-emerald-300 bg-emerald-50/60 text-left transition-all cursor-default";
      btnStep2.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-12 font-bold text-emerald-950">Paso 2: Paciente responde "1"</span>
          <span class="inline-flex items-center gap-1 text-emerald-800 text-10 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
            <svg class="size-3 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Confirmado
          </span>
        </div>
        <p class="text-11 text-emerald-900/80 mt-0.5">Respuesta inmediata detectada por el sistema.</p>
      `;

      if (btnStep3) {
        btnStep3.disabled = false;
        btnStep3.className = "wa-step-btn w-full p-3 rounded-xl border-2 border-foreground bg-white text-left hover:bg-black/5 transition-all shadow-xs cursor-pointer";
        btnStep3.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-12 font-bold text-foreground">Paso 3: Respuesta automática con Waze/Maps</span>
            <span class="text-10 font-bold text-foreground bg-black/5 px-2 py-0.5 rounded border border-border">Clic para simular</span>
          </div>
          <p class="text-11 text-muted-foreground mt-0.5">Envía ubicación satelital, piso y consultorio exacto.</p>
        `;
      }
    });
  }

  if (btnStep3) {
    btnStep3.addEventListener("click", () => {
      if (btnStep3.disabled) return;
      const bubble = document.createElement("div");
      bubble.className = "korva-wa-msg-in";
      bubble.innerHTML = `¡Excelente Roberto! Tu cita quedó confirmada en agenda.<br><br>Te esperamos 10 minutos antes en Paseo Gral. Escalón #42.<br>Ubicación Waze / Google Maps: maps.korva.app/escalon<span class="text-9 text-neutral-400 block text-right mt-1">09:02 AM</span>`;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;

      btnStep3.disabled = true;
      btnStep3.className = "wa-step-btn w-full p-3 rounded-xl border border-emerald-300 bg-emerald-50/60 text-left transition-all cursor-default";
      btnStep3.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-12 font-bold text-emerald-950">Paso 3: Respuesta con Waze/Maps</span>
          <span class="inline-flex items-center gap-1 text-emerald-800 text-10 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
            <svg class="size-3 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Enviado
          </span>
        </div>
        <p class="text-11 text-emerald-900/80 mt-0.5">Instrucciones y enlace de mapas entregados.</p>
      `;

      if (btnStep4) {
        btnStep4.disabled = false;
        btnStep4.className = "wa-step-btn w-full p-3 rounded-xl border-2 border-foreground bg-white text-left hover:bg-black/5 transition-all shadow-xs cursor-pointer";
        btnStep4.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-12 font-bold text-foreground">Paso 4: T-2h (Recordatorio Express)</span>
            <span class="text-10 font-bold text-foreground bg-black/5 px-2 py-0.5 rounded border border-border">Clic para simular</span>
          </div>
          <p class="text-11 text-muted-foreground mt-0.5">Alerta previa para asegurar que esté en camino.</p>
        `;
      }
    });
  }

  if (btnStep4) {
    btnStep4.addEventListener("click", () => {
      if (btnStep4.disabled) return;
      const bubble = document.createElement("div");
      bubble.className = "korva-wa-msg-in";
      bubble.innerHTML = `Recordatorio express: Tu cita es en 2 horas (10:00 AM). Consultorio #3. ¡Te esperamos!<span class="text-9 text-neutral-400 block text-right mt-1">08:00 AM</span>`;
      chat.appendChild(bubble);
      chat.scrollTop = chat.scrollHeight;

      btnStep4.disabled = true;
      btnStep4.className = "wa-step-btn w-full p-3 rounded-xl border border-emerald-300 bg-emerald-50/60 text-left transition-all cursor-default";
      btnStep4.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="text-12 font-bold text-emerald-950">Paso 4: T-2h Express</span>
          <span class="inline-flex items-center gap-1 text-emerald-800 text-10 font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">
            <svg class="size-3 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Completado
          </span>
        </div>
        <p class="text-11 text-emerald-900/80 mt-0.5">Asistencia asegurada sin ausencias.</p>
      `;
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      chat.innerHTML = initialChatHtml;

      if (btnStep2) {
        btnStep2.disabled = false;
        btnStep2.className = "wa-step-btn w-full p-3 rounded-xl border-2 border-foreground bg-white text-left hover:bg-black/5 transition-all shadow-xs cursor-pointer";
        btnStep2.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-12 font-bold text-foreground">Paso 2: Paciente responde "1"</span>
            <span class="text-10 font-bold text-foreground bg-black/5 px-2 py-0.5 rounded border border-border">Clic para simular</span>
          </div>
          <p class="text-11 text-muted-foreground mt-0.5">El paciente confirma con un simple toque desde su celular.</p>
        `;
      }

      if (btnStep3) {
        btnStep3.disabled = true;
        btnStep3.className = "wa-step-btn w-full p-3 rounded-xl border border-border bg-white text-left transition-all cursor-not-allowed";
        btnStep3.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-12 font-semibold text-foreground/75">Paso 3: Respuesta automática con Waze/Maps</span>
            <span class="text-10 font-medium text-muted-foreground">Paso siguiente</span>
          </div>
          <p class="text-11 text-muted-foreground mt-0.5">Envía ubicación satelital, piso y consultorio exacto.</p>
        `;
      }

      if (btnStep4) {
        btnStep4.disabled = true;
        btnStep4.className = "wa-step-btn w-full p-3 rounded-xl border border-border bg-white text-left transition-all cursor-not-allowed";
        btnStep4.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-12 font-semibold text-foreground/75">Paso 4: T-2h (Recordatorio Express)</span>
            <span class="text-10 font-medium text-muted-foreground">Alerta final</span>
          </div>
          <p class="text-11 text-muted-foreground mt-0.5">Alerta previa para asegurar que esté en camino.</p>
        `;
      }
    });
  }
}

// -------------------------------------------------------------
// 6. RESEÑAS GOOGLE 5★ SIMULATOR (resenas.html)
// -------------------------------------------------------------
function initResenasSim() {
  const root = document.getElementById("sim-resenas-root");
  if (!root) return;

  const starBtns = root.querySelectorAll(".resenas-star-btn");
  const googleView = root.querySelector(".resenas-google-view");
  const shieldView = root.querySelector(".resenas-shield-view");
  const promptView = root.querySelector(".resenas-prompt-view");

  starBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const stars = parseInt(btn.dataset.stars, 10);
      promptView.classList.add("hidden");

      if (stars >= 4) {
        googleView.classList.remove("hidden");
        shieldView.classList.add("hidden");
      } else {
        shieldView.classList.remove("hidden");
        googleView.classList.add("hidden");
      }
    });
  });

  root.querySelectorAll(".resenas-restart-btn").forEach((b) => {
    b.addEventListener("click", () => {
      googleView.classList.add("hidden");
      shieldView.classList.add("hidden");
      promptView.classList.remove("hidden");
    });
  });
}

// -------------------------------------------------------------
// 7. COTIZACIONES SIMULATOR (cotizaciones.html)
// -------------------------------------------------------------
function initCotizacionesSim() {
  const root = document.getElementById("sim-cotizaciones-root");
  if (!root) return;

  const checkboxes = root.querySelectorAll(".coti-checkbox");
  const totalEl = root.querySelector(".coti-total-amount");
  const discountEl = root.querySelector(".coti-discount-badge");
  const previewBtn = root.querySelector(".coti-preview-btn");
  const modal = root.querySelector(".coti-modal");
  const closeModal = root.querySelector(".coti-close-modal");

  function calculateTotal() {
    let subtotal = 0;
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        subtotal += parseInt(cb.dataset.price, 10);
      }
    });

    const isCombo = subtotal >= 80;
    const discount = isCombo ? Math.round(subtotal * 0.1) : 0;
    const finalAmount = subtotal - discount;

    if (totalEl) totalEl.textContent = `$${finalAmount} USD/mes`;
    if (discountEl) {
      if (isCombo) {
        discountEl.textContent = "10% OFF en combo aplicado";
        discountEl.classList.remove("hidden");
      } else {
        discountEl.classList.add("hidden");
      }
    }
  }

  checkboxes.forEach((cb) => cb.addEventListener("change", calculateTotal));
  calculateTotal();

  if (previewBtn && modal) {
    previewBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  }
  if (closeModal && modal) {
    closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  }
}

// -------------------------------------------------------------
// 8. EMBUDO COMERCIAL SIMULATOR (embudo.html)
// -------------------------------------------------------------
function initEmbudoSim() {
  const root = document.getElementById("sim-embudo-root");
  if (!root) return;

  const slider = root.querySelector(".embudo-slider");
  const visitsVal = root.querySelector(".embudo-visits-val");
  const inquiriesVal = root.querySelector(".embudo-inquiries-val");
  const bookingsVal = root.querySelector(".embudo-bookings-val");
  const salesVal = root.querySelector(".embudo-sales-val");
  const revenueVal = root.querySelector(".embudo-revenue-val");

  function updateFunnel() {
    if (!slider) return;
    const visits = parseInt(slider.value, 10);
    const inquiries = Math.round(visits * 0.18);
    const bookings = Math.round(inquiries * 0.45);
    const sales = Math.round(bookings * 0.32);
    const revenue = sales * 48; // $48 promedio por cliente

    if (visitsVal) visitsVal.textContent = visits.toLocaleString();
    if (inquiriesVal) inquiriesVal.textContent = inquiries.toLocaleString();
    if (bookingsVal) bookingsVal.textContent = bookings.toLocaleString();
    if (salesVal) salesVal.textContent = sales.toLocaleString();
    if (revenueVal) revenueVal.textContent = `$${revenue.toLocaleString()} USD/mes`;
  }

  if (slider) {
    slider.addEventListener("input", updateFunnel);
    updateFunnel();
  }
}

// -------------------------------------------------------------
// 9. GOOGLE CALENDAR SIMULATOR (google-calendar.html)
// -------------------------------------------------------------
function initCalendarSim() {
  const root = document.getElementById("sim-calendar-root");
  if (!root) return;

  const addBookingBtn = root.querySelector(".cal-add-booking-btn");
  const addPrivateBtn = root.querySelector(".cal-add-private-btn");
  const gcalSlot = root.querySelector(".cal-gcal-slot");
  const korvaSlot = root.querySelector(".cal-korva-slot");
  const statusEl = root.querySelector(".cal-sync-status");

  if (addBookingBtn) {
    addBookingBtn.addEventListener("click", () => {
      addBookingBtn.className = "cal-add-booking-btn px-3.5 py-1.5 rounded-xl bg-foreground text-background font-semibold text-12 shadow-xs transition-all";
      if (addPrivateBtn) addPrivateBtn.className = "cal-add-private-btn px-3.5 py-1.5 rounded-xl border border-border bg-white text-foreground font-semibold text-12 hover:bg-black/5 transition-all shadow-xs";

      gcalSlot.innerHTML = `<span class="font-bold text-emerald-950">[Korva] Cita: Mario Paz</span><br><span class="text-11 font-medium text-emerald-800">10:00 AM - 10:45 AM</span>`;
      gcalSlot.className = "cal-gcal-slot p-2.5 rounded-lg bg-emerald-100 border border-emerald-300 text-12";

      korvaSlot.innerHTML = `<span class="font-bold text-foreground">Reservado (Mario Paz)</span><br><span class="text-11 text-muted-foreground font-medium">Confirmado vía Web</span>`;
      korvaSlot.className = "cal-korva-slot p-2.5 rounded-lg bg-neutral-100 border border-neutral-300 text-12";

      if (statusEl) statusEl.textContent = "Sincronizado vía webhook seguro en 0.4s";
    });
  }

  if (addPrivateBtn) {
    addPrivateBtn.addEventListener("click", () => {
      addPrivateBtn.className = "cal-add-private-btn px-3.5 py-1.5 rounded-xl bg-foreground text-background font-semibold text-12 shadow-xs transition-all";
      if (addBookingBtn) addBookingBtn.className = "cal-add-booking-btn px-3.5 py-1.5 rounded-xl border border-border bg-white text-foreground font-semibold text-12 hover:bg-black/5 transition-all shadow-xs";

      gcalSlot.innerHTML = `<span class="inline-flex items-center gap-1 font-bold text-neutral-900"><svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Reunión personal</span><br><span class="text-11 font-medium text-neutral-700">02:00 PM - 03:00 PM</span>`;
      gcalSlot.className = "cal-gcal-slot p-2.5 rounded-lg bg-neutral-200 border border-neutral-300 text-12";

      korvaSlot.innerHTML = `<span class="font-bold text-amber-950">Horario Bloqueado</span><br><span class="text-11 font-medium text-amber-800">No disponible para clientes</span>`;
      korvaSlot.className = "cal-korva-slot p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-12";

      if (statusEl) statusEl.textContent = "Horario bloqueado automáticamente en la web";
    });
  }
}

// -------------------------------------------------------------
// 10. GOOGLE BUSINESS SIMULATOR (google-business.html)
// -------------------------------------------------------------
function initBusinessSim() {
  const root = document.getElementById("sim-business-root");
  if (!root) return;

  const checkboxes = root.querySelectorAll(".gb-check");
  const scoreEl = root.querySelector(".gb-score-val");
  const barEl = root.querySelector(".gb-score-bar");

  function updateScore() {
    let checkedCount = 0;
    checkboxes.forEach((cb) => {
      if (cb.checked) checkedCount++;
    });
    const percentage = Math.round((checkedCount / checkboxes.length) * 100);
    if (scoreEl) scoreEl.textContent = `${percentage}%`;
    if (barEl) barEl.style.width = `${percentage}%`;
  }

  checkboxes.forEach((cb) => cb.addEventListener("change", updateScore));
}

// -------------------------------------------------------------
// 11. REPORTES MENSUALES SIMULATOR (reportes-mensuales.html)
// -------------------------------------------------------------
function initReportesSim() {
  const root = document.getElementById("sim-reportes-root");
  if (!root) return;

  const periodBtns = root.querySelectorAll(".rep-period-btn");
  const callsEl = root.querySelector(".rep-calls");
  const bookingsEl = root.querySelector(".rep-bookings");
  const assistEl = root.querySelector(".rep-assist");
  const revEl = root.querySelector(".rep-rev");

  const data = {
    nov: { calls: "348", bookings: "192", assist: "96.4%", rev: "$9,216" },
    oct: { calls: "290", bookings: "155", assist: "93.1%", rev: "$7,440" },
    trim: { calls: "982", bookings: "512", assist: "95.2%", rev: "$24,576" }
  };

  periodBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      periodBtns.forEach((b) => b.classList.remove("bg-foreground", "text-background"));
      btn.classList.add("bg-foreground", "text-background");
      const d = data[btn.dataset.period];
      if (!d) return;

      if (callsEl) callsEl.textContent = d.calls;
      if (bookingsEl) bookingsEl.textContent = d.bookings;
      if (assistEl) assistEl.textContent = d.assist;
      if (revEl) revEl.textContent = d.rev;
    });
  });
}
