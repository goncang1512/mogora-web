"use client";
import Link from "next/link";
import React from "react";
import MobileSideBar from "./SideLayout/MobileSideBar";
import { useSession } from "@/lib/context/AuthProvider";
import { Button } from "mogora-ui";
import { logout } from "@/lib/actions/auth.action";

export default function Mobilebar() {
  const { data } = useSession();
  return (
    <div className="bg-white border-b border-gray-300 h-14 z-50 w-full fixed top-0">
      <div className="flex items-center md:justify-start justify-between gap-5 h-full px-5">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="font-bold text-xl whitespace-nowrap">
            Mogora UI
          </Link>
          <span className="bg-gray-300  px-1 rounded-sm text-xs font-mono">
            v0.6
          </span>
        </div>
        <div className="md:flex hidden w-full justify-between">
          <div className="gap-2 items-center flex">
            <Link href={"/docs"}>Docs</Link>
            <Link href="/components">Components</Link>
            <Link href={"/"}>Template</Link>
          </div>

          {data ? (
            <div className="flex items-center gap-4">
              <Link href={"/dashboard/create"}>{data.username}</Link>
              <Button variant={"danger"} onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href={"/login"}
                className="bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-500 hover:bg-slate-700 text-white rounded-md px-4 py-2 text-base"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md px-4 py-2 text-base"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
        <MobileSideBar />
      </div>
    </div>
  );
}
