"use client"

import Heading from "../components/Heading";
import { useState } from "react";
import Input from "../components/inputs/Input";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    // loading state
    const [isLoading, setIsLoading] = useState(false);
    // Call use form hook
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password: ""
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => 
    {
        setIsLoading(true)
        console.log(data)
    }


    return ( 
        <>
            <Heading title="Sign-in" />
            <Button
                outline
                label="Continue with Google"
                icon={AiOutlineGoogle}
                onClick={() => {}}
            />
            <hr className="bg-slate-300 w-full h-px"/>
             <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
             <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button label= {isLoading ? "Loading" : 'Login'} onClick={handleSubmit(onSubmit)}></Button>
            <p className="text-sm">
                Don't have an account?{" "}
                <Link className="underline"  href="/register">
                    Sign up
                </Link>
            </p>

        </>
     );
}
 
export default LoginForm;