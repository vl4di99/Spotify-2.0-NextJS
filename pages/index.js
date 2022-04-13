import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">

      <h1>This is a Spotify Clone made in React</h1>
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        {/* Center*/}
      </main>

      <div>{/*Player*/}</div>
    </div>
  )
}
