# Proyecto E-commerce Backend con Websockets

## Descripción
Este proyecto amplía el servidor backend para un e-commerce, integrando Websockets y el motor de plantillas Handlebars para actualizaciones en tiempo real y visualización de productos.

## Requisitos del Entregable
- Websockets para actualizaciones en tiempo real.
- Handlebars como motor de plantillas.
- Servidor en puerto 8080.

## Objetivos
- Actualización en tiempo real de productos.
- Renderizado de vistas con Handlebars.

## Instalación y Ejecución
npm install
npm start

## Estructura de Archivos  
Proyecto/  
│  
├── src/  
│ ├── public/ # Archivos estáticos  
│ ├── routes/ # Rutas para productos y carritos  
│ │ ├── productRoutes.js  
│ │ └── cartRoutes.js  
│ ├── views/ # Plantillas Handlebars  
│ │ ├── layouts/  
│ │ ├── home.handlebars  
│ │ └── realTimeProducts.handlebars  
│ ├── app.js # Servidor Express y Socket.io  
│ ├── ProductManager.js # Gestión de productos  
│ └── CartManager.js # Gestión de carritos  
│  
├── data/  
│ ├── products.json  
│ └── carts.json  
│  
├── .gitignore  
├── package.json  
├── package-lock.json  
└── README.md  

## Contribuciones
Instrucciones para contribuir al proyecto.

## Licencia
Información sobre la licencia.