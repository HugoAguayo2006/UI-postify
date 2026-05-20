import { FaHeart, FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";
import { BiRepost } from "react-icons/bi";

function Reels() {
  return (
    <section className="mx-auto h-[calc(100vh-3.5rem)] max-w-md overflow-hidden bg-black">
      <article className="relative h-full">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
          alt="Reel"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent px-5 py-8">
          <h1 className="text-2xl font-bold">Reels</h1>
          <span className="text-lg font-semibold text-white/80">Amigos</span>
        </div>
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-6">
          <button className="text-center">
            <FaHeart className="h-8 w-8" />
            <span className="mt-1 block text-xs font-semibold">48.3 mil</span>
          </button>
          <button className="text-center">
            <FaRegComment className="h-8 w-8" />
            <span className="mt-1 block text-xs font-semibold">41</span>
          </button>
          <button className="text-center">
            <BiRepost className="h-9 w-9" />
            <span className="mt-1 block text-xs font-semibold">3,896</span>
          </button>
          <button className="text-center">
            <FiSend className="h-8 w-8" />
            <span className="mt-1 block text-xs font-semibold">10.9 mil</span>
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-7 pt-24">
          <div className="flex items-center gap-3">
            <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80" alt="elokarun1" />
            <span className="font-semibold">elokarun1</span>
            <button className="rounded-lg border border-white/50 px-3 py-1 text-sm font-bold">Seguir</button>
            <FiMoreHorizontal className="ml-auto h-6 w-6" />
          </div>
          <p className="mt-4 text-lg">Eres mi mundo entero mi negra ...</p>
        </div>
      </article>
    </section>
  );
}

export default Reels;
