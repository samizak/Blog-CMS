"use client";

import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErr, setLoginErr] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <div className="flex flex-col items-center justify-center w-3/4 h-screen">
        <h1 className="text-3xl text-center">Blog CMS</h1>

        <div className="m-auto w-fit">
          <h1 className="mb-6 text-3xl font-semibold text-center">Login</h1>

          {loginErr && (
            <div className="flex flex-row w-full gap-1 p-2 text-red-700 align-middle bg-red-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>

              <span className="my-auto text-lg font-semibold">Invalid credentials</span>
            </div>
          )}

          <form
            method="post"
            onSubmit={(e) => handleSubmit(e, username, password, setLoginErr)}
            className="flex-1 h-auto mt-4 bg-white"
          >
            <div className="">
              <div className="flex flex-row gap-1">
                <span className="text-gray-500">Username</span>
              </div>
              <input
                type="text"
                id="title"
                className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mt-8">
              <div className="flex flex-row gap-1">
                <span className="text-gray-500">Password</span>
              </div>
              <input
                type="password"
                id="createdAt"
                className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-center w-full mt-8">
              <button
                className="w-auto px-4 py-2 mr-4 font-bold text-white transition-colors bg-green-600 rounded cursor-pointer hover:bg-green-800"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

async function handleSubmit(
  event: any,
  username: string,
  password: string,
  setLoginErr: React.Dispatch<React.SetStateAction<boolean>>
  //   setUserAuth:
) {
  try {
    const req = await fetch(process.env.NEXT_PUBLIC_API_URI + `/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const _json = await req.json();

    if (req.status !== 200) {
      setLoginErr(true);
      return;
    }

    localStorage.setItem("token", _json.token);
    localStorage.setItem("userAuth", JSON.stringify(true));

    window.location.href = "/dashboard";

    // setUserAuth(true);
  } catch (err) {
    setLoginErr(true);
  }
}
