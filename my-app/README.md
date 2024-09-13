# My-Simple-App-angular
Este proyecto sirve como repaso y practica de los principales conceptos que componen  Angular. en este sentido se hacen uso de estos conceptos diviendo la aplicacion en 3 partes en las cuales se enfatiza mas el uso de unos conceptos que enotras pero con elfin de explorar distintos esenarios de uso del framework.

Es tas partes son:

## Basic:
Repaso de conceptos muy basicos de angular realizando un CDRUD basico.

![Basic](/src/assets/basic.PNG)
 los conceptos aplicados son:
- manejo de mocelos desde su creacion, importacion y manupulacion en componentes.
- uso de dorectivas, eventos y doble enlace de datos para manejar el flujo en q se muestra la informacion en un componente

## Api-Client
En esta sección, nos conectamos a la API de la NASA para obtener datos externos y mostrarlos en nuestra interfaz. 
![Api-client](/src/assets/apiclient1.PNG)
Algunos de los conceptos implementados fueron:

- Uso de peticiones HTTP para obtener información externa y mostrarla en la interfaz.
- Manipulación del DOM mediante la adición o eliminación de clases en elementos para lograr estilos dinámicos.
- Comunicación entre componentes utilizando las directivas @Input y @Output para enviar o recibir propiedades entre componentes padre e hijos.

## Auth-login-client
En esta parte del proyecto, establecimos una conexión con una API externa echa con django-rest-framework para realizar un proceso de autenticación mediante JWT (JSON Web Tokens) en el proceso de login. 
![Api-client](/src/assets/api-struct.PNG)
Algunos de los conceptos implementados fueron:

- Implementación de servicios de autenticación para manejar el proceso de login y logout.
- Uso de interceptores HTTP para agregar tokens de autenticación a las solicitudes protegidas.
- Utilización de guards de ruta para proteger rutas en la aplicación y controlar el acceso basado en la autenticación del usuario.

![Auth](/src/assets/login.PNG)
![Auth](/src/assets/home.PNG)

## Generalidades
- se uso enrutado para mostrar cada parte por ejemplo una url para la vista basic ptra para el api client y otra para la vista de login 
- uso de servicio tanto para las peticiones de la NASA como a la api de django 

## observaciones y mejoras
- Implementar la carga de componentes de forma diferida (lazy loading) para mejorar el rendimiento de la aplicación, especialmente en aplicaciones grandes.
- Utilizar la asincronía al hacer peticiones a las APIs para mejorar la experiencia del uskj Mejorar la abstracción de los componentes para una mejor organización del código, utilizando patrones como componentes reutilizables y la separación de responsabilidades.

