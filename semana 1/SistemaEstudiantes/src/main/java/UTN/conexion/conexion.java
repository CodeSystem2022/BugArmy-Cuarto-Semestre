package main.java.UTN.conexion;

import java.sql.Connection; //importamos una interface
import java.sql.DriverManager;
import java.sql.SQLException;

public class conexion {
    public static Connection getConnection(){
        Connection conexion = null; // creamos una variable de conexion
        // Variablees para conectarse a la base de datos
        var baseDatos = "Estudiantes";
        var url = "jdbc:mysql://localhost:3306/"+baseDatos;
        var usuario = "root";
        var password = "admin";

        //Cargamos la clase del driver de mysql en la memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrió un error en la conexión: "+e.getMessage());
        }// Fin catch
        return conexion;
    } // Fin método Connection

}