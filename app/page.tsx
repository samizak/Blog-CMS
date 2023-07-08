import Dashboard from "./dashboard/page";
import Login from "./login/page";

export default async function Home() {
  let token = "";

  return (
    <main className="flex flex-row text-black">
      {/* <Dashboard /> */}

      {token === "" ? <Login /> : <Dashboard />}
    </main>
  );
}
