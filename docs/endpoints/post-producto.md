## Endpoint: `POST/producto`

Recibe una petición para crear un recurso producto.

## Ejemplo de Solicitud

```json
{
 "Nombre": "Producto Nuevo",
  "Descripcion": "Descripción del producto nuevo",
  "Precio": 29.99,
  "VendedorID": 2
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