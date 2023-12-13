## Endpoint: `PATCH /usuario/1`

Recibe una petición para actualizar un recurso usaurio.

## Ejemplo de Solicitud

```json
{
  "Nombre": "Nuevo nombre del usuario"
}
```

## Respuesta Exitosa (Código 201 Created)
```json
{
 "message": "Successfull partial update"
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