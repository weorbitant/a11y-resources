import Content from "./components/Content";
import Filters from "./components/Filters";

export default function Blog() {
  return (
    <div className="bg-slate-800 text-white pb-12 md:h-dvh">
      <header className="bg-slate-500 p-4">
        <h1 className="text-2xl">My blog</h1>
      </header>
      <div className="md:flex max-w-5xl mx-auto gap-4 mt-4">
        <Filters />
        <Content />
      </div>
    </div>
  );
}
