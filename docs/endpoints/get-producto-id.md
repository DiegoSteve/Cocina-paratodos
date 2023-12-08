## Endpoint: `GET /productos/{id}`

Permite obtener información detallada sobre un producto mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del producto que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /productos/1
```
## Respuesta Exitosa (Código 200 OK)

```json
{
  "id": 1,
  "nombre": "Producto de Ejemplo",
  "descripcion": "Descripción detallada del producto.",
  "precio": 19.99,
  "vendedor": {
    "id": 3,
    "nombre": "Vendedor de Ejemplo",
    "email": "vendedor@example.com"
  }
}

```

## Respuestas de Errores Posibles
- 404 Not found 
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró un producto con el ID {id}."
}

```
- Codigo 500 Interval Server Error
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud."
}
```

## Notas sugeridas
Asegúrate de ingresar un ID válido para obtener información detallada sobre un producto específico.

