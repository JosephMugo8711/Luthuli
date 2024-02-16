"use client"

import Heading from "../components/Heading";
import { useState } from "react";
import Input from "../components/inputs/Input";
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    // Call use form hook
    const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            name: "",
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
            <Heading title="Sign-up" />
            <Button
                outline
                label="Sign up with Google"
                icon={AiOutlineGoogle}
                onClick={() => {}}
            />
            <hr className="bg-slate-300 w-full h-px"/>
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
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
            <Button label= {isLoading ? "Loading" : 'Sign Up'} onClick={handleSubmit(onSubmit)}></Button>
            <p className="text-sm">
                Already have an account?{" "}
                <Link className="underline"  href="/login">
                    Log in
                </Link>
            </p>

        </>
     );
}
 
export default RegisterForm;