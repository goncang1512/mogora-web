"use client";
import Form from "@/component/client/Auth/Form";
import React from "react";

function Register() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white max-w-md w-full border border-gray-200 shadow-md p-4 rounded-md">
        <h1 className="font-semibold text-center pb-3">Register</h1>
        <Form />
      </div>
    </div>
  );
}

export default Register;
