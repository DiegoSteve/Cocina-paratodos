## Endpoint: `POST/compras`

Recibe una petición para crear un recurso compras.

## Ejemplo de Solicitud

```json
{
  "UsuarioID": 1,
  "ProductoID": 3,
  "Cantidad": 2,
  "Total": 19.99
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