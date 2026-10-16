# Sistema de Gestión para Pastelería Miskila (Sis257PasteleriaMiskila)

Aplicación de escritorio desarrollada para la gestión comercial, control de inventario, registro de usuarios, control de clientes y procesamiento de ventas de la **Pastelería Miskila**.

## 👥 Integrantes del Grupo
* **Camila Padilla Garrado**
* **Cristian Mauricio Garcia**

---

## 📋 Descripción del Negocio
**Pastelería Misk'ila** es un negocio dedicado a la elaboración y comercialización de productos de repostería fina, pasteles personalizados, postres y bebidas. El sistema busca automatizar los procesos internos del local, permitiendo un control eficiente del stock de productos, gestión segura de usuarios mediante roles, control de clientes e interfaces optimizadas para agilizar el proceso de ventas directas en mostrador.

---

## 🗄️ Modelo de Base de Datos y Entidades

La base de datos `LabPasteleriaMiskila` está conformada por las siguientes entidades principales:

### 1. `Clientes`
Almacena la información de los clientes registrados para realizar pedidos.
* `id_cliente` (INT, PK)
* `nombre` (VARCHAR)
* `celular` (VARCHAR, Único)
* `contrasena_hash` (VARCHAR)

### 2. `Productos`
Catálogo de productos elaborados y comercializados por la pastelería.
* `id_producto` (INT, PK)
* `nombre` (VARCHAR)
* `descripcion` (VARCHAR)
* `precio` (DECIMAL)
* `imagen` (VARCHAR)
* `disponible` (BIT)

### 3. `Inventario`
Control de existencias e inventario de productos.
* `id_producto` (INT, PK / FK)
* `cantidad_disponible` (INT)
* `stock_minimo` (INT)
* `fecha_actualizacion` (DATETIME)

### 4. `Administradores`
Usuarios administrativos y personal encargados del sistema (Módulo de Autenticación / Login).
* `id_administrador` (INT, PK)
* `nombre` (VARCHAR)
* `nombre_usuario` (VARCHAR, Único)
* `contrasena_hash` (VARCHAR)
* `rol` (VARCHAR)

### 5. `Pedidos`
Cabecera de las órdenes de venta y pedidos registrados.
* `id_pedido` (INT, PK)
* `id_cliente` (INT, FK, Nulo)
* `fecha_pedido` (DATETIME)
* `fecha_entrega` (DATETIME)
* `tipo_pedido` (VARCHAR) - *En línea / Presencial*
* `total` (DECIMAL)
* `estado` (INT)
* `observaciones` (TEXT)

### 6. `DetallePedido`
Desglose de los productos incluidos en cada pedido.
* `id_detalle` (INT, PK)
* `id_pedido` (INT, FK)
* `id_producto` (INT, FK)
* `cantidad` (INT)
* `precio_unitario` (DECIMAL)
* `subtotal` (DECIMAL)

### 7. `Personalizacion`
Especificaciones técnicas de personalización para pasteles y pedidos especiales.
* `id_personalizacion` (INT, PK)
* `id_detalle` (INT, FK, Único)
* `tamaño` (VARCHAR)
* `sabor` (VARCHAR)
* `decoracion` (VARCHAR)
* `instrucciones` (TEXT)
* `costo_adicional` (DECIMAL)

### 8. `Pagos`
Registro de transacciones financieras y métodos de pago.
* `id_pago` (INT, PK)
* `id_pedido` (INT, FK)
* `metodo_pago` (VARCHAR) - *QR / Efectivo*
* `monto` (DECIMAL)
* `fecha_pago` (DATETIME)
* `estado_pago` (VARCHAR)

### 9. `Entregas`
Gestión de logística y direcciones de envío para pedidos a domicilio.
* `id_entrega` (INT, PK)
* `id_pedido` (INT, FK, Único)
* `direccion` (VARCHAR)
* `referencia` (VARCHAR)
* `costo_entrega` (DECIMAL)
* `estado_entrega` (VARCHAR)

### UI en FIGMA
enlace: https://www.figma.com/design/tiyOU4AqXHd7IHTjz6e0fH/Miskila?node-id=0-1&t=BkCSD8xbF0FxbL12-1
