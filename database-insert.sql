-- Insertar usuarios
INSERT INTO Usuarios (ID, Nombre, Email, Contraseña, TipoUsuario, Ubicacion)
VALUES 
  (1, 'Juan Pérez', 'juan@example.com', 'contraseña123', 'Común', 'Ciudad A'),
  (2, 'María Gómez', 'maria@example.com', 'clave456', 'Vendedor', 'Ciudad B'),
  (3, 'Carlos López', 'carlos@example.com', 'pass789', 'Común', 'Ciudad C'),
  (4, 'Ana Rodríguez', 'ana@example.com', 'secret0', 'Vendedor', 'Ciudad A'),
  (5, 'José Martínez', 'jose@example.com', '123abc', 'Común', 'Ciudad B');

-- Insertar productos
INSERT INTO Productos (ID, Nombre, Descripcion, Precio, VendedorID)
VALUES 
  (1, 'Producto A', 'Descripción del producto A', 10.99, 1),
  (2, 'Producto B', 'Descripción del producto B', 15.99, 2),
  (3, 'Producto C', 'Descripción del producto C', 7.50, 1),
  (4, 'Producto D', 'Descripción del producto D', 19.99, 3),
  (5, 'Producto E', 'Descripción del producto E', 12.50, 2);

-- Insertar compras
INSERT INTO Compras (ID, UsuarioID, ProductoID, Cantidad, Total, Fecha)
VALUES 
  (1, 1, 2, 3, 47.97, '2023-11-21 12:30:00'),
  (2, 3, 1, 2, 21.98, '2023-11-22 15:45:00'),
  (3, 2, 4, 1, 19.99, '2023-11-23 10:00:00'),
  (4, 4, 3, 4, 30.00, '2023-11-24 09:20:00'),
  (5, 5, 5, 2, 25.00, '2023-11-25 18:00:00');

