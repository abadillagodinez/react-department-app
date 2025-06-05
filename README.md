# 🇺🇸: Department Management - Learning Practice for Portfolio - Frontend

---

This is the frontend of a web application for department management, built with **React** and **Vite**. It allows users to view, add, edit, and delete department information in an intuitive and efficient way, communicating with a backend API (developed with Spring Boot). This serves as part of my Full Stack Development learning process and the creation of a portfolio to support my growth as a Software Engineer, integrating both Development and QA.

* **Backend (API Application):** You can find the code and instructions for the backend part (built with Spring Boot) in the following repository:
    * [**`springboot-department-api`**](<https://github.com/abadillagodinez/springboot-department-api>)

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Setup and Local Execution](#setup-and-local-execution)
* [Contact](#contact)

---

## Features

* **Department List:** Displays all existing departments in a clear, organized table.
* **Add New Department:** Modal form to input new departments with name, code, and address.
* **Edit Existing Department:** Functionality to modify department information through a pre-filled modal form.
* **Delete Department:** Option to remove a specific department from the list.
* **Intuitive User Interface:** Clean and user-friendly design for efficient management.

---

## Technologies Used

This frontend project was developed using the following technologies:

* **React:** A JavaScript library for building user interfaces, known for its efficiency and component-based approach.
* **Vite:** A next-generation frontend build tool that offers an extremely fast and optimized development experience.
* **HTML5:** The standard markup language for creating web pages.
* **CSS3:** Cascading Style Sheets for styling and presentation of the user interface.
* **JavaScript (ES6+):** The fundamental programming language for frontend interactivity.

---

## Project Structure

The frontend project structure follows a modular approach to facilitate code organization and scalability:

```bash
frontend/
├── public/
│   └── index.html                  -> Main HTML file
├── src/
│   ├── api/
│   │   └── departments.js          -> Functions for interacting with the departments API
│   ├── components/
│   │   ├── DepartmentTable.jsx     -> Component for displaying the department table
│   │   ├── DepartmentModal.jsx     -> Component for the add/edit modal
│   │   └── ConfirmationModal.jsx   -> (Optional) Component for confirmation modals
│   ├── hooks/
│   │   └── useDepartments.js       -> (Optional) Custom hook for department logic
│   ├── pages/
│   │   └── DepartmentsPage.jsx     -> Main component for the department management page
│   ├── styles/
│   │   ├── index.css               -> Global styles and resets
│   │   └── variables.css           -> CSS variables (colors, fonts, etc.)
│   ├── App.jsx                     -> Root component of the application
│   └── main.jsx                    -> Entry point of the React application
├── .gitignore                      -> Files and folders to be ignored by Git
├── package.json                    -> Project dependencies and scripts
├── vite.config.js                  -> Vite configuration
└── README.md                       -> This file
```
---

## Setup and Local Execution

To run the frontend on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_FRONTEND_REPOSITORY_URL>
    cd frontend
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Vite development server:**
    ```bash
    npm run dev
    ```
    This will launch the development server and open the application in your browser (usually at`http://localhost:5173`).

**Important Note:** This frontend expects a backend API to be running and available. Make sure your Spring Boot project is up and running at the configured host and port (by default, Spring Boot runs at `http://localhost:8080`).

---

## Contact

If you have any questions or suggestions, feel free to reach out:

* **Name:** Luis Adrián Badilla Godínez
* **Email:** abadillagodinez@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/luis-adrián-badilla-godínez-bb0b95199
* **GitHub:** https://github.com/abadillagodinez

---

# 🇪🇸: Gestión de Departamentos - Práctica de aprendizaje para portafolio: Frontend

---

Este es el frontend de una aplicación web para la gestión de departamentos, construida con **React** y **Vite**. Permite visualizar, añadir, editar y eliminar información de departamentos de manera intuitiva y eficiente, comunicándose con una API de backend (desarrollada con Spring Boot). Esto como proceso de Aprendizaje de Desarrollo Full Stack. Así como la creación de un portafolio que me ayude a crecer como Software Engineer integrando Desarrollo y QA.

* **Backend (Aplicación API):** Puedes encontrar el código y las instrucciones para el backend (construido con Spring Boot) en el siguiente repositorio:
    * [**`springboot-department-api`**](<https://github.com/abadillagodinez/springboot-department-api>)

## Tabla de Contenidos

* [Características](#características)
* [Tecnologías Utilizadas](#tecnologías-utilizadas)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [Configuración y Ejecución Local](#configuración-y-ejecución-local)
* [Contacto](#contacto)

---

## Características

* **Listado de Departamentos:** Muestra todos los departamentos existentes en una tabla clara y organizada.
* **Añadir Nuevo Departamento:** Formulario modal para ingresar nuevos departamentos con sus datos (nombre, código, dirección).
* **Editar Departamento Existente:** Funcionalidad para modificar la información de un departamento a través de un formulario modal pre-rellenado.
* **Eliminar Departamento:** Opción para borrar un departamento específico de la lista.
* **Interfaz de Usuario Intuitiva:** Diseño limpio y fácil de usar para una gestión eficiente.

---

## Tecnologías Utilizadas

Este proyecto frontend ha sido desarrollado utilizando las siguientes tecnologías:

* **React:** Una biblioteca de JavaScript para construir interfaces de usuario, conocida por su eficiencia y enfoque basado en componentes.
* **Vite:** Un bundler de desarrollo de última generación que ofrece una experiencia de desarrollo frontend extremadamente rápida y optimizada.
* **HTML5:** El lenguaje de marcado estándar para la creación de páginas web.
* **CSS3:** Hoja de estilos en cascada para dar estilo y presentación a la interfaz de usuario.
* **JavaScript (ES6+):** El lenguaje de programación fundamental para la lógica interactiva del frontend.

---

## Estructura del Proyecto

La estructura del proyecto frontend sigue un enfoque modular para facilitar la organización y escalabilidad del código:

```bash
frontend/
├── public/
│   └── index.html                  -> Archivo HTML principal
├── src/
│   ├── api/
│   │   └── departments.js          -> Funciones para interactuar con la API de departamentos
│   ├── components/
│   │   ├── DepartmentTable.jsx     -> Componente para la tabla de departamentos
│   │   ├── DepartmentModal.jsx     Componente para el modal de añadir/editar
│   │   └── ConfirmationModal.jsx   -> (Opcional) Componente para modales de confirmación
│   ├── hooks/
│   │   └── useDepartments.js       -> (Opcional) Hook personalizado para lógica de departamentos
│   ├── pages/
│   │   └── DepartmentsPage.jsx     -> Componente principal de la página de gestión de departamentos
│   ├── styles/
│   │   ├── index.css               -> Estilos globales y reseteo
│   │   └── variables.css           -> Variables CSS (colores, fuentes, etc.)
│   ├── App.jsx                     -> Componente raíz de la aplicación
│   └── main.jsx                    -> Punto de entrada de la aplicación React
├── .gitignore                      -> Archivos y carpetas a ignorar por Git
├── package.json                    -> Dependencias y scripts del proyecto
├── vite.config.js                  -> Configuración de Vite
└── README.md                       -> Este archivo

```
---

## Configuración y Ejecución Local

Para poner en marcha el frontend en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO_FRONTEND>
    cd frontend
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Inicia el servidor de desarrollo de Vite:**
    ```bash
    npm run dev
    ```
    Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador (generalmente en `http://localhost:5173`).

**Nota Importante:** Este frontend espera que una API de backend esté corriendo y disponible. Asegúrate de tener tu proyecto de Spring Boot ejecutándose y accesible en la dirección y puerto configurados para la comunicación (por defecto, Spring Boot suele correr en `http://localhost:8080`).

---

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

* **Nombre:** Luis Adrián Badilla Godínez
* **Correo Electrónico:** abadillagodinez@gmail.com
* **LinkedIn:** https://www.linkedin.com/in/luis-adrián-badilla-godínez-bb0b95199
* **GitHub:** https://github.com/abadillagodinez