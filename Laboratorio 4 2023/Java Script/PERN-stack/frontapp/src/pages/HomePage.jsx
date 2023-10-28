import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useContext(AuthContext);
  return (
    <Card>
      <h1 className="font-bold justify-center text-2xl py-4">
        {" "}
        Desarrollando una Aplicacion PERN con Autenticacion de Usuarios y CRUD
        de Tareas
      </h1>
      <h3>
        El stack PERN (PostgreSQL, Express, React y Node.js) se ha convertido en
        una opcion popular para el desarrollo de aplicaciones web de alta
        calidad. En este articulo, exploraremos como crear una aplicacion PERN
        que incluye la autenticacion de usuarios y operaciones CRUD (Crear,
        Leer, Actualizar, Eliminar) de tareas. Este proyecto versatil es ideal
        para una amplia gama de aplicaciones, desde listas de tareas personales
        hasta aplicaciones de gestion de proyectos.
      </h3>
    </Card>
  );
}

export default HomePage;
