## Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario del que se desea recuperar los detalles.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```

Aquí está la documentación actualizada para el endpoint GET /usuarios/{id}:

markdown
Copy code
# Endpoint: `GET /usuarios/{id}`

Permite obtener información detallada sobre un usuario mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario del que se desea recuperar los detalles.

## Ejemplo de Solicitud
```http
GET /usuarios/1
```
## Respuesta Exitosa (Código 200 OK)

```json
{
  "id": 1,
  "nombre": "Usuario de Ejemplo",
  "email": "usuario@example.com",
  "tipoUsuario": "Común",
  "ubicacion": "Ubicación de Ejemplo",
  "compras": [
    {
      "id_compra": 1,
      "producto_id": 2,
      "cantidad": 1,
      "total": 15.99,
      "fecha": "2023-11-21T10:23:45Z",
      "producto": {
        "id": 2,
        "nombre": "Producto de Ejemplo"
      }
    }
  ]
}
```

## Respuestas de Errores Posibles
- 404 Not found 
```json
{
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontraron detalles para el usuario {id}."
}

```
- Codigo 500 Interval Server Error
```json
{
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
}

```

## Notas sugeridas
Asegúrate de ingresar un ID válido en la solicitud para obtener información detallada sobre un usuario en específico.

