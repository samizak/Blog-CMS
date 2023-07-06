"use client";

import React, { useState } from "react";

// DO NOT MARK CLIENT COMPONENTS AS ASYNC
// IT WILL CAUSE INFINITE RE-RENDERS!!!
export default function ArticleForm(props: { title: string; content: string; createdAt: string }) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [createdAt, setCreatedAt] = useState(props.createdAt);

  return (
    <form onSubmit={handleSubmit} method="post" className="flex-1 p-4 mt-4 bg-white f">
      <div className="mt-8">
        <div className="flex flex-row gap-1">
          <span className="text-gray-500">Title</span>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          id="title"
          className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-row gap-1">
          <span className="text-gray-500">Creation Date</span>
          <span className="text-red-500">*</span>
        </div>
        <input
          type="text"
          id="createdAt"
          className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
          // required
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-row gap-1">
          <span className="text-gray-500">Content</span>
          <span className="text-red-500">*</span>
        </div>
        <textarea
          id="content"
          className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500 min-h-[100px] max-h-[400px]"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
  );
}

async function handleSubmit(event: any) {
  // Stop the form from submitting and refreshing the page.
  event.preventDefault();

  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs/`, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: event.target.title.value,
      createdAt: event.target.createdAt.value,
      content: event.target.content.value,
    }),
  });
  if (!res.ok) throw new Error("Failed to fetch data");

  window.location.href = "/articles";
  return res.json();
}
