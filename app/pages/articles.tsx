import dotenv from "dotenv";
import BlogItem from "../components/BlogItem";

dotenv.config();

async function getData() {
  const res = await fetch(process.env.APIpath + `/api/v1/blogs`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function Article() {
  const data = await getData();

  return (
    <main className="w-full pt-16 pl-8 pr-8 bg-slate-200">
      <div>
        <h1 className="text-4xl">Blog Management</h1>
      </div>

      <div className="mt-16 text-lg text-gray-500">
        <span>{"YOU ARE HERE > "}</span>
        <span>{"Admin > "}</span>
        <span>Articles</span>
      </div>

      <BlogItem blogTitle={"Test Blog"} blogDate={"04/07/2023"} />
      <BlogItem blogTitle={"Lorem ipsum"} blogDate={"03/07/2023"} />
      <BlogItem blogTitle={"Cool little article!"} blogDate={"02/07/2023"} />
    </main>
  );
}
