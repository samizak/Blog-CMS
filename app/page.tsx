import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Article from "./pages/articles";

export default async function Home() {
  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      {/* <Dashboard /> */}
      <Article />
    </main>
  );
}
