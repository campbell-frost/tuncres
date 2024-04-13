import Content from "./ui/content";
import Navbar from "./ui/navbar"

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-400 to-green-500">
      <Navbar />
      <Content />
    </main>
  );
}
