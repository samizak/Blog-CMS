import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";
import Article from "./pages/articles";
import EditArticle from "./pages/editArticle";

export default async function Home() {
  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      {/* <Dashboard /> */}
      <Article />
      {/* <EditArticle /> */}
    </main>
  );
}
