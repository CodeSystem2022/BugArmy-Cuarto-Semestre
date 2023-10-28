import React from "react";

function AboutPage() {
  return (
    <div>
      <h1 className="text-center font-bold py-4 px-3 text-4xl">Tecnologias Utilizadas</h1>
      <h2 className="text-2xl py-4 px-2">
        Antes de profundizar en el desarrollo, echemos un vistazo a las
        tecnologias clave que usaremos en este proyecto:
      </h2>
      <h3 className="py-4 px-2">
        {" "}
        PostgreSQL: Una potente base de datos relacional que almacenara nuestros
        datos de usuario y tareas.
        Express: Un marco de desarrollo de Node.js
        que proporcionara un servidor para la aplicacion y gestionara las
        solicitudes de API.
        React: La biblioteca de JavaScript que utilizaremos
        para construir la interfaz de usuario de nuestra aplicacion.
        Node.js: Elentorno de tiempo de ejecucion que ejecutara nuestro servidor y la
        logica del lado del servidor.
        JSON Web Tokens (JWT): Utilizaremos JWT
        para la autenticacion de usuarios, permitiendo que los usuarios se
        autentiquen y accedan a sus tareas de manera segura.
      </h3>
      <h2 className="text-2xl py-4 px-2">Configuracion del Proyecto</h2>
      <h3 className="py-4 px-2">
        Antes de comenzar, debemos configurar nuestro proyecto. Asegurate de
        tener PostgreSQL instalado y configurado con una base de datos. Luego,
        sigue estos pasos: Configura el Servidor Express.js: Crea un servidor
        Express para manejar las solicitudes de la API. Implementa las rutas
        para la autenticacion de usuarios y las operaciones CRUD de tareas.
        Configura la Base de Datos: Conecta tu servidor a la base de datos
        PostgreSQL. Crea tablas para usuarios y tareas. Define los modelos
        correspondientes en tu servidor. Desarrolla el Frontend React: Construye
        la interfaz de usuario utilizando React. Crea componentes para mostrar
        la lista de tareas, el formulario de inicio de sesion y el formulario de
        registro. Implementa la Autenticacion de Usuarios: Utiliza JWT para
        manejar la autenticacion de usuarios. Los usuarios pueden registrarse,
        iniciar sesion y cerrar sesion de manera segura. Operaciones CRUD de
        Tareas: Crea las rutas y controladores para realizar operaciones CRUD en
        las tareas. Esto incluye crear una nueva tarea, leer la lista de tareas,
        actualizar una tarea y eliminar una tarea.
      </h3>
      <h2 className="text-2xl py-4 px-2">Ventajas de la Autenticacion de Usuarios y CRUD de Tareas</h2>
      <h3 className="py-4 px-2">
        Este proyecto ofrece varias ventajas: Seguridad La autenticacion de
        usuarios garantiza que solo los usuarios autorizados puedan acceder a la
        aplicacion. Los JWT proporcionan un metodo seguro para gestionar las
        sesiones de usuario. Gestion de Tareas Eficiente El sistema de CRUD de
        tareas permite a los usuarios crear, leer, actualizar y eliminar tareas
        de manera eficiente. Esto es especialmente util en aplicaciones de
        productividad y gestion de proyectos. Personalizacion Los usuarios
        pueden crear sus propias listas de tareas y personalizarlas segun sus
        necesidades individuales. Esto brinda flexibilidad y adaptabilidad a la
        aplicacion. Aprendizaje Este proyecto es una excelente oportunidad para
        aprender y mejorar tus habilidades en el desarrollo web. Puedes
        profundizar en conceptos como la autenticacion de usuarios, la gestion
        de bases de datos y la creacion de aplicaciones de una sola pagina
        (SPA). Conclusion La creacion de una aplicacion PERN con autenticacion
        de usuarios y operaciones CRUD de tareas es un proyecto emocionante que
        combina tecnologias modernas para ofrecer una experiencia rica al
        usuario. Ademas, proporciona una base solida para proyectos mas grandes
        y complejos en el futuro. Animate a comenzar este viaje de desarrollo y
        a explorar las infinitas posibilidades que ofrece el stack PERN!
      </h3>
    </div>
  );
}

export default AboutPage;
