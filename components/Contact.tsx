'use client';

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingIndicator } from "./LoadingIndicator";
import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast';



const messageSchema = Yup.object().shape({
    email: Yup.string().email("This should be a valid email.").required("This is required."),
    message: Yup.string().required("This is required."),
    name: Yup.string().required("This is required.")
});

type FormData = Yup.InferType<typeof messageSchema>;

export default function Contact(){

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitting },
      } = useForm<FormData>({
        resolver: yupResolver(messageSchema)
      });

    const onSubmit = async (data:FormData)=>{
        const regex = /(<([^>]+)>)/gi;

        const cleanedData = {
            email: data.email.replace(regex, ""),
            message: data.message.replace(regex, ""),
            name: data.name.replace(regex, "")
        };

        const response = await fetch("/api/mail", {
            method: "POST",
            body: JSON.stringify(cleanedData),
        });

        if(response.status==200){
            toast.success("Inquiry sent!");
            reset();
        }
    };

    return <>
        <div id="contact">
            <h3 className="font-bold text-2xl mb-2 text-center">
                Contact 
            </h3>
            <div className="flex flex-col-reverse justify-between pb-10 px-10 md:flex-row">
                <div className="w-full flex flex-col align-middle justify-start content-center mt-6 md:mt-0 md:w-1/4 md:px-10 md:py-10">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <p className="my-8 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <a className="hover:underline" href="mailto:gwenpena21@gmail.com">gwenpena21@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col align-middle justify-start content-center md:w-3/4 md:px-10 md:py-10">
                    {!isSubmitting && 
                                    <form action="" className="p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name?'border-red-500':'border-none'}`} 
                                                {...register("name")}
                                            id="name" 
                                            type="text" 
                                            placeholder="Name"></input>
                                        {errors.name&&<p className="text-red-500">{errors.name.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email?'border-red-500':'border-none'}`}  
                                            {...register("email")}
                                            id="email" 
                                            type="email" 
                                            placeholder="Email"></input>
                                        {errors.email&&<p className="text-red-500">{errors.email.message}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message?'border-red-500':'border-none'}`} 
                                                {...register("message")}
                                                id="message" 
                                                placeholder="Message"></textarea>
                                        {errors.message&&<p className="text-red-500">{errors.message.message}</p>}
                                    </div>
                                    <button type="submit" onClick={handleSubmit(onSubmit)} className="primary-blue-bg w-full py-5 px-8 primary-blue-bg-hover">Send</button>
                                </form>
                    }
                    {
                        isSubmitting &&  <LoadingIndicator></LoadingIndicator>

                    }
                </div>
            </div>
            <Toaster position="top-center" />
        </div>
    </>
}