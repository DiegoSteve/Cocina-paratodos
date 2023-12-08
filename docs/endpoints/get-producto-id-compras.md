## `GET /productos/{id}/compras`

Permite obtener información sobre las compras relacionadas a un producto mediante su identificador único.

### Parámetros de URL
- `{id}` (obligatorio): Identificador único del producto del que se desea recuperar las compras.

### Ejemplo de Solicitud
```http
GET /productos/1/compras

Respuesta Exitosa (Código 200 OK)

[
  {
    "id_compra": 1,
    "usuario_id": 2,
    "cantidad": 2,
    "total": 21.98,
    "fecha": "2023-11-21T12:34:56Z"
  },
  {
    "id_compra": 3,
    "usuario_id": 4,
    "cantidad": 1,
    "total": 7.50,
    "fecha": "2023-11-21T13:45:00Z"
  }
]
```
Código 404 Not Found:
```
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron compras asociadas con el producto {id}."
}
```
Código 500 Internal Server Error:
```
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}
```

## Notas sugeridas

Asegurate de ingresar un ID valido
