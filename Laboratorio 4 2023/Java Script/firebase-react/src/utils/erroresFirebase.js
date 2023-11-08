export const erroresFirebase = (code) => {
    switch (code) {
        case 'auth/email-alredy-in-use':
            return {
                code: "email",
                message: "Usuario ya registrado",
            };
        case 'auth/invalid-email':
            return {
                code: "email",
                message: "El correo electronico no es valido.",
            };
        case 'auth/user-not-found':
            return {
                code: "email",
                message: "Usuario no registrado",
            };
        case 'auth/wrong-password':
            return {
                code: "password",
                message: "Contraseña incorrecta",
            };
        default:
            return {
                code: "email",
                message: "Ocurrio un error en el servidor",
            };
    }
};