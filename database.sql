CREATE DATABASE IF NOT EXISTS  cocina;
USE cocina;
-- Tabla: Usuarios
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    TipoUsuario ENUM('Común', 'Vendedor') NOT NULL,
    Ubicacion VARCHAR(255)
);

-- Tabla: Productos
CREATE TABLE Productos (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    VendedorID INT,
    FOREIGN KEY (VendedorID) REFERENCES Usuarios(ID)
);

-- Tabla: Compras
CREATE TABLE Compras (
    ID INT PRIMARY KEY,
    UsuarioID INT,
    ProductoID INT,
    Cantidad INT NOT NULL,
    Total DECIMAL(10, 2) NOT NULL,
    Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ID)
);
