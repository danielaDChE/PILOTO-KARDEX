# Preparación para PostgreSQL / PostgREST

El prototipo usa localStorage solo para demostración. En producción se propone mantener el mismo flujo de interfaz y reemplazar la capa de almacenamiento.

Una implementación posterior puede organizarse así:

Navegador → Aplicación Web → PostgREST/API → PostgreSQL

Las entidades a normalizar incluyen Persona, Kardex, Formación, Cursos, Experiencia, Ítem/Vinculación, Requisitos/Checklist, Formularios, Familia, Caja de Salud, Vacaciones, Historial, Certificados y Accidentes.

Los permisos deben configurarse por rol y las operaciones relevantes deben quedar auditadas. El diseño físico se debe cerrar después de la validación funcional con Kardex.
