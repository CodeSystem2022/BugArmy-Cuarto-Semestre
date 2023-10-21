package main.java.UTN.datos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import main.java.UTN.dominio.Estudiante;


public class EstudianteDAO {
    //Método listar
    public List<Estudiante> listarEstudiantes(){

        //Creamos una lista de la clase Estudiante
        List<Estudiante> estudiantes = new ArrayList<>();

        //Creamos algunos objetos que son necesarios para comunicarnos con la bd
        PreparedStatement ps; //renombramos, sirve para preparar la sentencia sql
        ResultSet rs; //renombramos, permite almacenar el resultado obtenido de la bd

        //Creamos un objeto de tipo conexión
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 ORDER BY idestudiantes2022";
        try{ //Enviamos la consulta hacia la base de datos
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery(); // recibimos la ejecucion del querry que estamos enviando
            while(rs.next()){ //mientras tengamos registros para iterar va a serguir operando
                var estudiante = new Estudiante();
                estudiante.setIdEstudiante(rs.getInt("idestudiantes2022"));
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                //Falta agregarlo a la lista
                estudiantes.add(estudiante);

            }
        } catch (Exception e){
            System.out.println("Ocurrió un error al seleccionar datos: "+e.getMessage());

        }
        finally{
            try{
                con.close();  //Cierra la coexión
            }catch (Exception e){
                System.out.println("Ocurrió un error al cerrar la conexión: "+e.getMessage());
            }
        } //Fin Finally
        return estudiantes;  //retornamos la lista

    } //Fin método Listar

    private Connection getConnection() {
        return null;
    }

    //Método por id -> find by id
    public boolean buscarEstudiantePorId(Estudiante estudiante){
        PreparedStatement ps;
        ResultSet rs;
        Connection con = getConnection();
        String sql = "SELECT * FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            rs = ps.executeQuery();
            if(rs.next()){
                estudiante.setNombre(rs.getString("nombre"));
                estudiante.setApellido(rs.getString("apellido"));
                estudiante.setTelefono(rs.getString("telefono"));
                estudiante.setEmail(rs.getString("email"));
                return true; //Se encontro un registro
            } //Fin if
        } catch (Exception e){
            System.out.println("Ocurrió un error al buscar estudiante: "+e.getMessage());

        } //Fin catch
        finally {
            try {
                con.close();  //cerramos
            } catch (Exception e){
                System.out.println("Ocurió un error al cerrar la conexión: "+e.getMessage());
            } //Fin catch
        } //Fin finally
        return false;
    }

    //Método para agregar un nuevo estudiante
    public boolean agregarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.execute();
            return true;

        } catch(Exception e){
            System.out.println("Ocurrio un error al agregar el estudiante: "+e.getMessage());

        }//Fin catch
        finally{
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            } //Fin catch
        } //Fin finaly
        return false;
    } //Fin método agregarEstudiante

    //Método para modificar estudiante
    public boolean modificarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "UPDATE estudiantes2022 SET nombre=?, apellido=?, telefono=?, email=? WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setString(1, estudiante.getNombre());
            ps.setString(2, estudiante.getApellido());
            ps.setString(3, estudiante.getTelefono());
            ps.setString(4, estudiante.getEmail());
            ps.setInt(5, estudiante.getIdEstudiante());
            ps.execute(); //modifica, no querry
            return true;
        } catch (Exception e){
            System.out.println("Error al modificar estudiante: "+e.getMessage());
        } //Fin catch
        finally {
            try{
                con.close();
            } catch (Exception e){
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            } //Fin catch
        } // FIn finally
        return false;
    } //Fin método modifarEstudiante

    public boolean eliminarEstudiante(Estudiante estudiante){
        PreparedStatement ps;
        Connection con = getConnection();
        String sql = "DELETE FROM estudiantes2022 WHERE idestudiantes2022=?";
        try{
            ps = con.prepareStatement(sql);
            ps.setInt(1, estudiante.getIdEstudiante());
            ps.execute();
            return true;
        } catch (Exception e) {
            System.out.println("Error al eliminar estudiante: "+e.getMessage());
        }
        finally {
            try{
                con.close();

            } catch (Exception e) {
                System.out.println("Error al cerrar la conexión: "+e.getMessage());
            }
        }
        return false;
    }


    //Ejecutamos
    public static void main(String[] args) {
        var estudianteDao = new EstudianteDAO();
        //MOdificar estudiante
        //var estudianteModificado = new Estudiante(1, "Juan Carlos", "Juarez", "554667723", "juan@mail.com");
        //var modificado = estudianteDao.modificarEstudiante(estudianteModificado);
        //if(modificado)
        //    System.out.println("Estudiante modificado: "+estudianteModificado);
        //else
        //    System.out.println("No se modifico el estudiante: "+estudianteModificado);


        //Agregar estudiante
        //var nuevoEstudiante = new Estudiante("Carlos", "Lara", "5493352353", "carlosl@mail.com");
        //var agregado = estudianteDao.agregarEstudiante(nuevoEstudiante);
        //if(agregado)
        //    System.out.println("Estudiante agregado: "+nuevoEstudiante);
        //else
        //    System.out.println("No se a podido agregar el estudiante: "+nuevoEstudiante);


        //Eliminar estudiante con id 3
        var estudianteEliminar = new Estudiante(4);
        var eliminado = estudianteDao.eliminarEstudiante(estudianteEliminar);
        if(eliminado)
            System.out.println("Estudiante eliminado: "+estudianteEliminar);
        else
            System.out.println("No se elimino estudiante: "+estudianteEliminar);


        //Listar los estudiantes
        System.out.println("Listado de estudiantes: ");
        List<Estudiante> estudiantes = estudianteDao.listarEstudiantes();
        estudiantes.forEach(System.out::println);//Función lambda para imprimir elementos



        //Buscar por id
        //var estudiante1 = new Estudiante(1);
        //System.out.println("Estudiantes antes de la busqueda: "+ estudiante1);
        //var encontrado = estudianteDao.buscarEstudiantePorId(estudiante1);
        //if(encontrado)
        //    System.out.println("Estudiante encontrado: "+estudiante1);
        //else
        //    System.out.println("No se encontro el estudiante: "+estudiante1.getIdEstudiante());



    }
}