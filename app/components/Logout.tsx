"use client";

import React from "react";

export default function Logout() {
  return (
    <li className="rounded-sm">
      <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        <span className="text-gray-100" onClick={LogoutUser}>
          Logout
        </span>
      </a>
    </li>
  );
}

function LogoutUser(event: any) {
  localStorage.clear();
  window.location.href = "/";
}
