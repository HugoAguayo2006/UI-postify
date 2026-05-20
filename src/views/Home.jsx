import { FaHeart, FaPlus, FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiMoreHorizontal, FiSend } from "react-icons/fi";

const stories = [
  { name: "Tu historia", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=240&q=80", mine: true },
  { name: "chivas", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=240&q=80" },
  { name: "piojo.13", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80" },
  { name: "ligabbvamx", image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=240&q=80" },
];

const feedPosts = [
  {
    user: "Chivas",
    time: "Hace 3 horas",
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=160&q=80",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    caption: "Feliz dia de la unica profesion donde el cliente no tiene la razon.",
    likes: "12,804",
  },
  {
    user: "a_hugo___",
    time: "Hace 8 horas",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    caption: "Un sabado con buen clima y cero pendientes.",
    likes: "719",
  },
];

const Home = () => {
  return (
    <section className="mx-auto max-w-md bg-[#050a0e]">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-[#050a0e]/95 px-5">
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-white">
          <FaPlus className="h-7 w-7" />
        </button>
        <h1 className="font-serif text-3xl font-bold tracking-normal">Instagram</h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-full text-white">
          <FaHeart className="h-7 w-7" />
        </button>
      </header>

      <div className="flex gap-4 overflow-x-auto px-5 pb-5">
        {stories.map((story) => (
          <div key={story.name} className="w-20 shrink-0 text-center">
            <div className="relative mx-auto h-20 w-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1">
              <img className="h-full w-full rounded-full border-4 border-[#050a0e] object-cover" src={story.image} alt={story.name} />
              {story.mine && (
                <span className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#050a0e] bg-white text-[#050a0e]">
                  <FaPlus className="h-4 w-4" />
                </span>
              )}
            </div>
            <p className="mt-2 truncate text-sm text-white/90">{story.name}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        {feedPosts.map((post) => (
          <article key={post.user + post.time} className="border-t border-white/10">
            <div className="flex items-center gap-3 px-4 py-3">
              <img className="h-11 w-11 rounded-full object-cover" src={post.avatar} alt={post.user} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold leading-tight">{post.user}</p>
                <p className="text-sm text-white/60">{post.time}</p>
              </div>
              <FiMoreHorizontal className="h-6 w-6" />
            </div>
            <img className="aspect-square w-full object-cover" src={post.image} alt={post.caption} />
            <div className="px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <FaRegHeart className="h-7 w-7" />
                  <FaRegComment className="h-7 w-7" />
                  <FiSend className="h-7 w-7" />
                </div>
                <FaRegBookmark className="h-7 w-7" />
              </div>
              <p className="mt-3 font-semibold">{post.likes} Me gusta</p>
              <p className="mt-1 text-sm"><span className="font-semibold">{post.user}</span> {post.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
