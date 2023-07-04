import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      <main className="w-full pt-16 pl-8 bg-slate-200">
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
            <div>1 Post</div>
            <div>0 Comments</div>
          </div>
        </div>
      </main>
    </main>
  );
}
