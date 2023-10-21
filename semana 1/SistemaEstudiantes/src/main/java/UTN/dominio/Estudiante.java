package main.java.UTN.dominio;

public class Estudiante {
    // Atributos para la clase estudiante:
    private int idEstudiante;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;

    // Constructor
    public Estudiante(){} // Constructor vacío

    public Estudiante(int idEstudiante){ //Constructor para la llave primaria, permite eliminar
        this.idEstudiante = idEstudiante;
    }

    //Constructor para insertar un nuevo elemento
    public Estudiante(String nombre, String apellido, String telefono, String email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;

    }

    // Constructor para modificar un elemento

    public Estudiante(int idEstudiante, String nombre, String apellido, String telefono, String email){
        this.idEstudiante = idEstudiante;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
    }

    // Métodos get & set


    public int getIdEstudiante() {
        return idEstudiante;
    }

    public void setIdEstudiante(int idEstudiante) {
        this.idEstudiante = idEstudiante;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // toString


    @Override
    public String toString() {
        return "estudiante{" +
                "idEstudiante=" + idEstudiante +
                ", nombre='" + nombre + '\'' +
                ", apellido='" + apellido + '\'' +
                ", telefono='" + telefono + '\'' +
                ", email='" + email + '\'' +
                '}';
    }


}