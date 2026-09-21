# Prototipo funcional – Kardex Digital SEDEGES

Este paquete es una **maqueta funcional HTML/CSS/JavaScript** para revisar con el responsable de Kardex cómo funcionaría el sistema antes de desarrollar la base de datos y el backend.

## Cómo abrir
1. Descomprima el ZIP.
2. Abra `index.html` con Google Chrome, Microsoft Edge o Firefox.
3. No requiere instalación, internet, servidor ni base de datos.

## Qué permite demostrar
- Pre-registro del interesado.
- Checklist de los **25 requisitos de Kardex 2026**.
- Confirmación simulada del Memorándum de Designación de RR.HH.
- Ficha Personal y datos maestros.
- Hoja de Vida: estudios, cursos, experiencia y referencias.
- Acta de Posesión.
- Acta de Inducción y control de los documentos comunicados.
- Declaración de Doble Percepción.
- Declaración de Incompatibilidades, Conflicto de Interés y Prohibiciones.
- Declaración familiar y alertas de posibles coincidencias de parentesco.
- Alta y Baja de Caja de Salud mediante checklist.
- Vacaciones y cálculo básico de días hábiles (lunes a viernes).
- Certificado de Trabajo generado con información del Kardex e historial.
- Denuncia de Accidente de Trabajo con campos del formulario entregado y categorías del reverso.
- Historial cronológico del funcionario.
- Mapa de tablas, atributos y acciones para validar el futuro modelo de datos.

## Decisión de almacenamiento
El prototipo **no permite cargar fotografías, escaneos, PDFs ni documentos adjuntos**. El enfoque es registrar datos estructurados y estados de checklist, debido a la limitación de almacenamiento indicada para el servidor.

## Datos de demostración
Todos los datos precargados son ficticios. No se incluyó información real de funcionarios de los archivos fuente.

## Persistencia del prototipo
Los cambios se guardan en `localStorage` del navegador. El botón **Reiniciar** elimina los datos de demostración guardados.

## Arquitectura prevista para producción
La interfaz está separada conceptualmente de la persistencia para poder reemplazar `localStorage` por:
- PostgreSQL como base de datos.
- PostgREST como API REST, si esa es la arquitectura definida por Sistemas.
- Autenticación, roles, auditoría y validaciones en servidor.

## Importante antes de programar producción
Este prototipo es para **validación funcional**. Después de la revisión de Kardex se debe cerrar:
- Modelo relacional normalizado.
- Catálogos y reglas definitivas.
- Campos obligatorios y opcionales.
- Roles y permisos.
- Reglas de vacaciones e inamovilidad.
- Flujo exacto de Caja de Salud.
- Formato final de certificados y formularios exportables.
# PILOTO-KARDEX
