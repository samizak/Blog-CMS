import dotenv from "dotenv";
import BlogItem from "../components/BlogItem";
import { IBlogArticle } from "../components/IArticleBlog";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

dotenv.config();

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Article() {
  let data = await getData();

  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      <div className="w-full pt-16 pl-8 pr-8 bg-slate-200">
        <div>
          <h1 className="text-4xl">Blog Management</h1>
        </div>

        <div className="mt-16 text-lg text-gray-500">
          <span>{"YOU ARE HERE > "}</span>
          <span>{"Admin > "}</span>
          <span>Articles</span>
        </div>

        <Link
          className="flex px-3 py-2 mt-4 text-sm text-white align-middle transition-colors bg-green-600 rounded cursor-pointer hover:bg-green-800 w-fit"
          href={"/edit-article"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>

          <div className="my-auto">New article</div>
        </Link>

        {data.blogPosts.map((item: IBlogArticle) => (
          <BlogItem {...item} />
        ))}
      </div>
    </main>
  );
}
