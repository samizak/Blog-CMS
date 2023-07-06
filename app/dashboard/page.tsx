import dotenv from "dotenv";
import Sidebar from "../components/Sidebar";

dotenv.config();

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URI + `/api/v1/blogs`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const json = await res.json();
  return json.blogPosts;
}

export default async function Dashboard() {
  const data = await getData();

  return (
    <div className="flex flex-row w-full text-black">
      <Sidebar />

      <div className="w-full pt-16 pl-8 bg-slate-200">
        <div>
          <h1 className="text-6xl">Welcome, Admin!</h1>
        </div>

        <div className="mt-16 text-lg text-gray-500">
          <span>{"YOU ARE HERE > "}</span>
          <span>{"Admin > "}</span>
          <span>Dashboard</span>
        </div>

        <div className="mt-8 text-3xl">
          <h1>Dashboard</h1>
        </div>

        <div className="flex flex-col w-64 mt-4 bg-white shadow-md">
          <div className="pl-4 mb-4 border-b-2 border-b-gray">
            <h1>Statistics</h1>
          </div>
          <div className="pl-4 ">
            <div>{data.length + " Post"}</div>
            <div>0 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
