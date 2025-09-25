import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold text-[#C01920]">
          Welcome to NextGen Constructions & Developers
        </h1>
      </section>
    </main>
  );
}
