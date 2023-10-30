import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navegate = useNavigate();

    const { registerUser } = useContext(UserContext);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Procesando...", email, password);

        try {
            await registerUser(email, password);
            
            console.log("Usuario creado");
            navegate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Ingrese email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Ingrese Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Registro</button>
            </form>
        </>
    );
}

export default Register;