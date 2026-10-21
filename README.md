# SEDEGES — prototipo Angular 20

Adaptación inicial de interfaz para el Sistema Integrado de Administración de Personal de SEDEGES, inspirada en la estructura visual de Gentelella y personalizada con la paleta institucional.

## Incluye
- Angular 20 standalone, rutas y formularios reactivos.
- Login institucional adaptable a móvil, con fondo Illimani.
- Panel administrativo responsive con menú SEDEGES completo.
- Submenús interactivos, accesos rápidos y estados de demostración.
- Guard de navegación y servicio de sesión de demostración.
- Colores: dorado `#A78A48`, azul oscuro `#1D2532`, gris `#6F737A`, gris claro `#9B9B9B`, marfil `#F2F0E6`.

## Requisitos
- Node.js compatible con Angular 20 (recomendado Node.js 20.19+ o 22.12+).
- npm.

## Ejecutar
```bash
npm install
npm start
```
Abre la URL local que Angular CLI muestre en consola (normalmente `http://localhost:4200`).

## IMPORTANTE: autenticación de demostración
Este ZIP es una base de frontend y **no está listo para producción**. La pantalla de login comprueba formato y longitud del formulario, pero no verifica credenciales contra un servidor real. La sesión local de demostración solo permite revisar el flujo de navegación; no es seguridad real.

Antes de usar datos institucionales:
1. Crear/configurar una API HTTPS y una base de datos.
2. Validar credenciales exclusivamente en backend.
3. Guardar contraseñas en backend usando Argon2id (o bcrypt con configuración adecuada), nunca texto plano.
4. Usar una sesión segura mediante cookie `HttpOnly`, `Secure`, `SameSite` y la protección CSRF correspondiente.
5. Verificar roles y permisos en cada endpoint de backend. Los guards del frontend solo mejoran la navegación, no protegen la API.
6. Desactivar el modo demo y conectar `AuthService` a la API real.

## Próximos pasos sugeridos
- Definir backend (por ejemplo, Spring Boot o NestJS) y contrato de autenticación.
- Implementar gestión de usuarios, roles y permisos.
- Desarrollar pantallas por feature: Kardex, RR. HH., Control de Personal, Planillas, Portal y Reportes.
- Conectar los formularios y tablas con endpoints reales.

## Gentelella
La adaptación toma como referencia el repositorio Gentelella. Consulta `GENTELELLA-LICENSE.txt` para su licencia y atribución.
