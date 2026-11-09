/**
 * Korva - Gestión de Formularios y Sincronización con Google Sheets
 * Guarda automáticamente los leads en una Hoja de Cálculo de Google y en localStorage.
 */

// Pegá aquí la URL de tu Web App de Google Apps Script cuando crees tu hoja:
window.KORVA_GOOGLE_SHEET_URL = window.KORVA_GOOGLE_SHEET_URL || "https://script.google.com/macros/s/AKfycbzKORVA_GOOGLE_SHEET_WEBHOOK/exec";

document.addEventListener("DOMContentLoaded", function () {
  initSalesForm();
  initContactForm();
});

function getElSalvadorTimestamp() {
  try {
    return new Intl.DateTimeFormat("es-SV", {
      timeZone: "America/El_Salvador",
      dateStyle: "short",
      timeStyle: "medium",
      hour12: true
    }).format(new Date());
  } catch (e) {
    return new Date().toLocaleString();
  }
}

function saveLeadLocally(lead) {
  try {
    const leads = JSON.parse(localStorage.getItem("korva_leads") || "[]");
    leads.unshift(lead);
    localStorage.setItem("korva_leads", JSON.stringify(leads));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

async function sendToGoogleSheet(lead) {
  saveLeadLocally(lead);

  // Si no está configurada la URL definitiva, mantenemos el registro local y notificamos éxito
  if (!window.KORVA_GOOGLE_SHEET_URL || window.KORVA_GOOGLE_SHEET_URL.includes("AKfycbzKORVA_GOOGLE_SHEET_WEBHOOK")) {
    console.info("Lead almacenado localmente en localStorage (clave: 'korva_leads'). Para sincronizar en vivo con Google Sheets, configurá tu URL en korva-forms.js:", lead);
    return true;
  }

  try {
    // Modo no-cors para evitar bloqueos por redirecciones de Google Apps Script
    await fetch(window.KORVA_GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(lead)
    });
    return true;
  } catch (error) {
    console.warn("Error enviando lead a Google Sheets (guardado en backup local):", error);
    return false;
  }
}

function showSuccessModal(lead, isSales) {
  // Eliminar modal previo si existe
  const existing = document.getElementById("korva-success-modal");
  if (existing) existing.remove();

  const title = isSales ? "¡Propuesta solicitada con éxito!" : "¡Mensaje recibido con éxito!";
  const subtext = isSales
    ? `Gracias <strong>${escapeHtml(lead.nombre)}</strong>. Evaluaremos los requerimientos de <strong>${escapeHtml(lead.empresa || "tu negocio")}</strong> y te enviaremos la cotización detallada en menos de 2 horas hábiles.`
    : `Gracias <strong>${escapeHtml(lead.nombre)}</strong>. Recibimos tu consulta y un asesor del equipo Korva te responderá a la brevedad.`;

  const waText = encodeURIComponent(
    `Hola Bryan, acabo de enviar el formulario en Korva.\nNombre: ${lead.nombre}\nNegocio: ${lead.empresa || "No especificado"}\nSolución: ${lead.solucion || "Asesoría"}`
  );
  const waUrl = `https://wa.me/50373798246?text=${waText}`;

  const modal = document.createElement("div");
  modal.id = "korva-success-modal";
  modal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200";
  modal.innerHTML = `
    <div class="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 text-center shadow-2xl border border-black/10 transform transition-all animate-in fade-in zoom-in-95 duration-200">
      <div class="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
        <svg class="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>

      <h3 class="text-19 font-semibold tracking-tight text-foreground sm:text-20">${title}</h3>
      <p class="mt-2.5 text-14 leading-relaxed text-muted-foreground">${subtext}</p>

      <div class="mt-5 space-y-2.5">
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="flex h-11 w-full items-center justify-center gap-2 rounded-xl text-14 font-semibold text-white shadow-xs transition-opacity hover:opacity-95" style="background-color: #111111; color: #ffffff !important;">
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Chatear ahora por WhatsApp
        </a>

        <button type="button" onclick="document.getElementById('korva-success-modal').remove()" class="flex h-10 w-full items-center justify-center rounded-xl border border-black/10 text-13 font-medium text-muted-foreground hover:bg-black/5 transition-colors">
          Cerrar ventana
        </button>
      </div>

      <div class="mt-4 pt-3 border-t border-black/5 text-11 text-muted-foreground">
        Registrado en El Salvador: ${escapeHtml(lead.fecha)}
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function initSalesForm() {
  const form = document.getElementById("sales-form") || document.querySelector("form.space-y-4");
  if (!form || !document.getElementById("sales-name")) return;

  form.removeAttribute("onsubmit");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : "";

    const name = (document.getElementById("sales-name")?.value || "").trim();
    const phone = (document.getElementById("sales-phone")?.value || "").trim();
    const email = (document.getElementById("sales-email")?.value || "").trim();
    const company = (document.getElementById("sales-company")?.value || "").trim();
    const rubroEl = document.getElementById("sales-rubro");
    const rubro = rubroEl ? rubroEl.options[rubroEl.selectedIndex]?.text || "" : "";
    const solutionEl = document.getElementById("sales-solution");
    const solution = solutionEl ? solutionEl.options[solutionEl.selectedIndex]?.text || "" : "";
    const message = (document.getElementById("sales-message")?.value || "").trim();

    if (!name || !email || !phone) {
      alert("Por favor completa los campos obligatorios (*)");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="size-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Enviando propuesta...</span>
      `;
    }

    const lead = {
      fecha: getElSalvadorTimestamp(),
      origen: "Propuesta Comercial (sales.html)",
      nombre: name,
      telefono: phone,
      email: email,
      empresa: company,
      rubro: rubro,
      solucion: solution,
      mensaje: message
    };

    await sendToGoogleSheet(lead);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnHtml;
    }

    form.reset();
    showSuccessModal(lead, true);
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form") || document.querySelector("form.space-y-5");
  if (!form || !document.getElementById("contact-name")) return;

  form.removeAttribute("onsubmit");
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const origBtnHtml = submitBtn ? submitBtn.innerHTML : "";

    const name = (document.getElementById("contact-name")?.value || "").trim();
    const phone = (document.getElementById("contact-phone")?.value || "").trim();
    const email = (document.getElementById("contact-email")?.value || "").trim();
    const company = (document.getElementById("contact-company")?.value || "").trim();
    const serviceEl = document.getElementById("contact-service");
    const service = serviceEl ? serviceEl.options[serviceEl.selectedIndex]?.text || "" : "";
    const message = (document.getElementById("contact-message")?.value || "").trim();

    if (!name || !email || !phone) {
      alert("Por favor completa los campos obligatorios (*)");
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="size-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        <span>Enviando consulta...</span>
      `;
    }

    const lead = {
      fecha: getElSalvadorTimestamp(),
      origen: "Contacto General (contact.html)",
      nombre: name,
      telefono: phone,
      email: email,
      empresa: company,
      rubro: "General",
      solucion: service,
      mensaje: message
    };

    await sendToGoogleSheet(lead);

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnHtml;
    }

    form.reset();
    showSuccessModal(lead, false);
  });
}
