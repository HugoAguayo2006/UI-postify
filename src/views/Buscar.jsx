import { FaSearch } from "react-icons/fa";

const exploreImages = [
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=500&q=80",
];

function Buscar() {
  return (
    <section className="mx-auto min-h-screen max-w-md bg-[#050a0e]">
      <div className="sticky top-0 z-20 bg-[#050a0e] px-4 py-4">
        <label className="flex h-12 items-center gap-3 rounded-xl bg-[#22282e] px-4 text-white/60">
          <FaSearch className="h-5 w-5" />
          <input className="w-full bg-transparent text-lg outline-none placeholder:text-white/60" placeholder="Buscar" />
        </label>
      </div>

      <div className="grid grid-cols-3 gap-0.5">
        {exploreImages.map((image, index) => (
          <img
            key={image}
            className={`w-full object-cover ${index === 2 || index === 8 ? "row-span-2 h-full" : "aspect-square"}`}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}

export default Buscar;
