## Endpoint: `PATCH /producto/1`

Recibe una petición para actualizar un recurso producto.

## Ejemplo de Solicitud

```json
{
   "Descripcion": "Nueva descripción del producto"
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