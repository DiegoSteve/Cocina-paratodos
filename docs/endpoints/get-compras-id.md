##  Endpoint: `GET /compras/{id}`

Permite obtener información detallada sobre una compra mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la compra de la que se desea recuperar los detalles.

## Ejemplo de Solicitud
```http
GET /compras/1

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_compra": 1,
  "usuario_id": 2,
  "producto_id": 3,
  "cantidad": 2,
  "total": 21.98,
  "fecha": "2023-11-21T12:34:56Z",
  "usuario": {
    "id": 2,
    "nombre": "Usuario Ejemplo"
  },
  "producto": {
    "id": 3,
    "nombre": "Producto de Ejemplo"
  }
}

```
## Respuestas de Errores Posibles
- Código 404 Not Found:

```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron detalles para la compra {id}."
}
```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegúrate de ingresar un ID válido en la solicitud para obtener información detallada sobre una compra en específico.