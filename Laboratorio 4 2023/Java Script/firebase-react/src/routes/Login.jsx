import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        //getValues,
        setError,
    } = useForm({
        defaultValues:{
            email: "",
            password: "",
            repassword: "",
        }
    });

    const onSubmit = async((email, password)) => {
        try {
            await loginUser(email, password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
            setError("firebase", {
                message: erroresFirebase(error.code),
            })
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await loginUser(email, password);
    //         console.log("Usuario logeado");
    //         navigate("/");
    //     } catch (error) {
    //         console.log(error.code);
    //     }
    // };

    return (
        <>
            <h1>Login</h1>
            <FormError error={errors.firebase} />
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                    type="email"
                    placeholder="Ingrese email"
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                >
                    <FormError error={errors.email} />
                </FormInput>

                <FormInput
                    type="password"
                    placeholder="Ingrese Contraseña"
                    {...register("password", {
                        minLength,
                        validate: validateTrim,
                    })}
                >
                    <FormError error={errors.password} />
                </FormInput>
                {/* <input
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
                <button type="submit">Iniciar Sesion</button>
            </form>
        </>
    );
};

export default Login;