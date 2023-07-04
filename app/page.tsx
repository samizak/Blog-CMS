import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/dashboard";

export default async function Home() {
  return (
    <main className="flex flex-row text-black">
      <Sidebar />

      <Dashboard />
    </main>
  );
}
