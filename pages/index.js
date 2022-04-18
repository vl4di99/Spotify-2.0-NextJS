import Sidebar from "../components/Sidebar";
import Center from "../components/Center";
import { useSession, getSession } from "next-auth/react";
import Player from "../components/Player";

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

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
