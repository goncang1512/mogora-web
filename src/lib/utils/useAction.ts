"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from "react";
import { ResponseType } from "./types";
import { useRouter } from "next/navigation";

interface UseRequestResult {
  execute: (...args: any[]) => Promise<ResponseType>; // Mengubah return agar sesuai
  loading: boolean;
  error: ResponseType | null;
  setError: Dispatch<SetStateAction<ResponseType | null>>;
  response: ResponseType | null; // Memastikan response bisa null sebelum request selesai
}

type RequestAction = (...args: any[]) => Promise<ResponseType>;

const useAction = (action: RequestAction): UseRequestResult => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ResponseType | null>(null);
  const [response, setResponse] = useState<ResponseType | null>(null);
  const router = useRouter();

  const execute = async (...args: any[]): Promise<ResponseType> => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const result = await action(...args);
    if (result.status) {
      setResponse(result);

      // 🔹 Jika ada `redirect`, lakukan navigasi
      if (result.results?.redirect) {
        router.push(result.results.redirect);
      }
    } else {
      setError(result);
    }
    setLoading(false);
    return result;
  };

  return { execute, loading, error, setError, response };
};

export default useAction;
