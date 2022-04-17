import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div className="bg-black h-screen overflow-hidden">
      <h1 className="text-center bg-lime-500">Welcome, {session?.user.name}</h1>
      <main className="flex">
        <Sidebar />
        <Center />
        {/* Center*/}
      </main>

      <div>{/*Player*/}</div>
    </div>
  );
}
