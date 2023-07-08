import Sidebar from "../components/Sidebar";
import dotenv from "dotenv";
import ArticleForm from "./ArticleForm";

dotenv.config();

async function getData(id: string) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function EditArticle({ searchParams }: any) {
  let _id = "";
  let title = "";
  let content = "";
  let createdAt = "";

  if (searchParams["id"]) {
    const data = await getData(searchParams["id"]);
    ({ _id, title, content, createdAt } = data.post);
    createdAt = new Date(createdAt).toLocaleDateString("en-US");
  }

  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      <div className="flex flex-col w-full h-screen pt-16 pl-8 pr-8 bg-slate-200">
        <h1 className="text-4xl h-50">Editing Article</h1>

        <ArticleForm _id={_id} title={title} content={content} createdAt={createdAt} />
      </div>
    </main>
  );
}
