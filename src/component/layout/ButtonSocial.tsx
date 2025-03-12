"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "mogora-ui";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonSocial() {
  const router = useRouter();
  const handleDiscord = async () => {
    await authClient.signIn.social({
      provider: "discord",
    });
    router.push("/dashboard/create");
  };

  const handleGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
    router.push("/dashboard/create");
  };
  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        onClick={handleDiscord}
        className="bg-[#5865F2] hover:bg-[#6758f2] w-full flex items-center justify-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 100 100"
          viewBox="0 0 100 100"
          id="discord"
          width={25}
          height={25}
          fill="white"
        >
          <path
            id="Layer_2"
            d="M85.778,24.561c-11.641-8.71-22.793-8.466-22.793-8.466s-1.14,1.302-1.14,1.302c13.839,4.152,20.27,10.257,20.27,10.257
      c-19.799-10.901-45.019-10.823-65.613,0c0,0,6.675-6.431,21.328-10.583c0,0-0.814-0.977-0.814-0.977s-11.071-0.244-22.793,8.466
      c0,0-11.722,21.084-11.722,47.052c0,0,6.838,11.722,24.829,12.292c0,0,3.012-3.582,5.454-6.675
      c-10.339-3.093-14.246-9.524-14.246-9.524c6.495,4.064,13.063,6.608,21.247,8.222c13.316,2.741,29.879-0.077,42.249-8.222
      c0,0-4.07,6.594-14.734,9.606c2.442,3.012,5.373,6.512,5.373,6.512C90.662,83.254,97.5,71.532,97.5,71.613
      C97.5,45.645,85.778,24.561,85.778,24.561z M34.818,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.333-11.892,16.357-11.855,16.607,0
      C43.121,60.054,39.458,64.043,34.818,64.043z M64.531,64.043c-4.559,0-8.303-3.989-8.303-8.955c0.366-11.869,16.19-11.874,16.607,0
      C72.834,60.054,69.171,64.043,64.531,64.043z"
          ></path>
        </svg>
        Discord
      </Button>
      <Button
        type="button"
        onClick={handleGithub}
        className="w-full flex items-center justify-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          id="github"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"
          ></path>
        </svg>
        GitHub
      </Button>
    </div>
  );
}

export default ButtonSocial;
