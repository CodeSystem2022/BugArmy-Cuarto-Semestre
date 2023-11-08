import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import FormError from "../components/FormError";
import { formValidates } from "../utils/formValidates";
import FormInput from "../components/FormInput";

const Register = () => {
    const navegate = useNavigate();

    const { registerUser } = useContext(UserContext);
    const { required, patternEmail, minLength, validatetrim, validateEquals } = formValidates();
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
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
            await registerUser(email, password);
            navegate("/");
        } catch (error) {
            console.log(error.code);
            setError("firebase", {
                message: erroresFirebase(error.code),
            })
        }
    };

    return (
        <>
            <h1>Registro</h1>
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

                <FormInput
                    type="password"
                    placeholder="Ingrese nuevamente su Contraseña"
                    {...register("repassword", {
                        validate: validateEquals(getValues("password")),
                    })}
                >
                    <FormError error={errors.repassword} />
                </FormInput>
                <button type="submit">Registro</button>
            </form>
        </>
    );
};

export default Register;