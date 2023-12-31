"use client";

import Link from "next/link";
import { IBlogArticle } from "./IBlogArticle";
import dotenv from "dotenv";

dotenv.config();

export default function BlogItem(blogArticle: IBlogArticle) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex flex-row justify-between p-4 bg-white rounded-md">
        <span className="my-auto">{blogArticle.title}</span>

        <div className="flex flex-row justify-center gap-2 text-xs">
          <div>
            <div className="px-4 py-2 mr-4 font-bold text-black transition-colors bg-gray-200 rounded cursor-pointer hover:bg-gray-400 hover:text-gray-100">
              View
            </div>
          </div>
          <div className="m-auto mr-4">{new Date(blogArticle.createdAt).toLocaleDateString("en-US")}</div>

          <Link
            className="flex flex-row gap-1 m-auto cursor-pointer"
            href={{
              pathname: "/edit-article",
              query: { id: blogArticle._id },
            }}
          >
            <span className="m-auto">Edit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </Link>

          <div
            className="flex flex-row m-auto cursor-pointer"
            onClick={async (e) => {
              const res = await DeleteArticle(blogArticle);

              if (res.hasOwnProperty("success") && res["success"] === 1) {
                window.location.reload();
              }
            }}
          >
            <span className="m-auto">Delete</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

async function DeleteArticle(blogArticle: IBlogArticle) {
  const token = localStorage.getItem("token");
  const bearer = `Bearer ${token}`;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs/${blogArticle._id}`, {
    method: "DELETE",
    headers: {
      Authorization: bearer,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return { success: 1 };
}
