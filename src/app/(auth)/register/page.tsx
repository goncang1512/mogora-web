"use client";
import ButtonSocial from "@/component/layout/ButtonSocial";
import Form from "@/component/layout/Form";
import GlobalProvider from "@/lib/context/GlobalProvider";
import Link from "next/link";
import React, { useState } from "react";

function Register() {
  const [nextField, setNextField] = useState(false);
  return (
    <GlobalProvider>
      <div className="h-screen flex items-center justify-center md:px-0 px-3">
        <div className="bg-white max-w-md w-full border border-gray-200 shadow-md p-4 rounded-md flex flex-col gap-3">
          <h1 className="text-xl font-semibold pb-3">Sign Up Form</h1>
          <ButtonSocial />
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <hr className="w-full bg-gray-400" />
            OR
            <hr className="w-full bg-gray-400" />
          </div>
          <Form nextField={nextField} setNextField={setNextField} />
          <p className="pt-2 text-center text-gray-500">
            Have an account?{" "}
            <Link href={"/login"} className="text-blue-500">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default Register;
