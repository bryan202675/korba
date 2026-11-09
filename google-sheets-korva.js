/**
 * KORVA - SCRIPT PARA GOOGLE SHEETS (Google Apps Script)
 * 
 * INSTRUCCIONES DE INSTALACIÓN EN 3 PASOS:
 * 1. Abrí Google Sheets (https://sheets.new) y creá una hoja en blanco llamada "Leads Korva".
 * 2. En el menú superior de la hoja, ve a: Extensiones -> Apps Script.
 * 3. Borrá cualquier código que aparezca y pegá este archivo completo.
 * 4. Hacé clic en "Implementar" (botón azul arriba a la derecha) -> "Nueva implementación".
 * 5. En el engranaje "Seleccionar tipo", elegí "Aplicación web".
 * 6. En "Quién tiene acceso", seleccioná "Cualquier persona" (Anyone).
 * 7. Clic en "Implementar", autorizá los permisos con tu cuenta de Google y copiá la URL que termina en "/exec".
 * 8. Pegá esa URL en 'korva-forms.js' en la variable 'window.KORVA_GOOGLE_SHEET_URL'.
 * 
 * ¡Listo! Cada lead que se llene en 'sales.html' o 'contact.html' se escribirá al instante en tu hoja.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Leads") || doc.getActiveSheet();

    // Crear encabezados estilizados si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Fecha y Hora (El Salvador)",
        "Origen",
        "Nombre y Apellido",
        "WhatsApp / Teléfono",
        "Email",
        "Empresa / Negocio",
        "Rubro",
        "Solución de Interés",
        "Mensaje / Requerimientos"
      ];
      sheet.appendRow(headers);

      // Dar formato a los encabezados
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#111111");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("Arial");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = { mensaje: e.postData.contents };
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Agregar la nueva fila con los datos recibidos
    sheet.appendRow([
      data.fecha || Utilities.formatDate(new Date(), "America/El_Salvador", "dd/MM/yyyy hh:mm:ss a"),
      data.origen || "Web Korva",
      data.nombre || "",
      data.telefono || "",
      data.email || "",
      data.empresa || "",
      data.rubro || "",
      data.solucion || "",
      data.mensaje || ""
    ]);

    // Auto-ajustar ancho de columnas para lectura cómoda
    try {
      sheet.autoResizeColumns(1, 9);
    } catch (resizeErr) {}

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Lead registrado exitosamente en Google Sheets."
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        error: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "active",
      service: "Korva Google Sheets Webhook Service",
      timestamp: Utilities.formatDate(new Date(), "America/El_Salvador", "yyyy-MM-dd HH:mm:ss")
    })
  ).setMimeType(ContentService.MimeType.JSON);
}
