## Endpoint: `POST/usuario`

Recibe una petición para crear un recurso usuario.

## Ejemplo de Solicitud

```json
{
  "Nombre": "Juan Pérez",
  "Email": "juan@example.com",
  "Contraseña": "secreta123",
  "TipoUsuario": "Común",
  "Ubicacion": "Ciudad"
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
  "status": 201,
  "message": "Created"
}
```

## Respuestas de Errores Posibles

- Código 500 Internal Server Error:

```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
```