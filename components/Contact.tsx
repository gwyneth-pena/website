"use client";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingIndicator } from "./LoadingIndicator";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const messageSchema = Yup.object().shape({
  email: Yup.string()
    .email("This should be a valid email.")
    .required("This is required."),
  message: Yup.string().required("This is required."),
  name: Yup.string().required("This is required."),
});

type FormData = Yup.InferType<typeof messageSchema>;

export default function Contact() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = async (data: FormData) => {
    const regex = /(<([^>]+)>)/gi;

    const cleanedData = {
      email: data.email.replace(regex, ""),
      message: data.message.replace(regex, ""),
      name: data.name.replace(regex, ""),
    };

    const response = await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(cleanedData),
    });

    if (response.status == 200) {
      toast.success("Inquiry sent!");
      reset();
    }
  };

  return (
    <>
      <div id="contact" className="pt-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-normal text-center font-medium text-2xl py-0 my-0 md:text-3xl">
            Send Your Inquiries
          </h2>
          <div className="flex align-middle justify-center content-center pb-10 px-10 md:flex-center">
            <div className="w-full flex flex-col align-middle content-center md:w-3/4 md:px-10 md:py-10">
              {!isSubmitting && (
                <form
                  action=""
                  className="p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 mb-5 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.name ? "border-red-500" : "border-none"
                      }`}
                      {...register("name")}
                      id="name"
                      type="text"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 mb-5 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.email ? "border-red-500" : "border-none"
                      }`}
                      {...register("email")}
                      id="email"
                      type="email"
                      placeholder="Email"
                    ></input>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className={`shadow appearance-none border rounded w-full py-2 px-3 mb-5 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.message ? "border-red-500" : "border-none"
                      }`}
                      {...register("message")}
                      id="message"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="primary-blue-bg w-full py-5 px-8 primary-blue-bg-hover"
                  >
                    Send
                  </button>
                </form>
              )}
              {isSubmitting && <LoadingIndicator></LoadingIndicator>}
            </div>
          </div>
        </motion.div>

        <Toaster position="top-center" />
      </div>
    </>
  );
}
