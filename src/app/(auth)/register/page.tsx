"use client";
import Form from "@/component/layout/Form";
import Link from "next/link";
import React from "react";

function Register() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full border border-gray-200 shadow-md p-4 rounded-md">
        <h1 className="text-xl font-semibold pb-3">Sign Up Form</h1>
        <Form />
        <p className="pt-2 text-center text-gray-500">
          Have an account?{" "}
          <Link href={"/login"} className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
