"use client";
import Mobilebar from "@/component/layout/Mobilebar";
import { useSession } from "@/lib/context/AuthProvider";

export default function Home() {
  const { data } = useSession();

  console.log(data);
  return (
    <div>
      <Mobilebar />
    </div>
  );
}
