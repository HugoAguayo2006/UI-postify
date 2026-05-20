import { FaChevronDown, FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const notes = [
  { name: "Tu nota", text: "¿Como te sientes?", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=220&q=80" },
  { name: "TAPETE", text: "Mirenme hice una nota", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=220&q=80" },
  { name: "Carlos", text: "Bandito twenty one...", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=220&q=80" },
  { name: "Diego", text: "Ya quedo", image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=220&q=80" },
];

const chats = [
  { name: "Triki Trakes", message: "2 mensajes nuevos", time: "3 h", unread: true, image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=180&q=80" },
  { name: "Uyuyuy", message: "3 mensajes nuevos", time: "5 h", unread: true, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=180&q=80" },
  { name: "David Delgado", message: "Literal JAJAJAJA", time: "15 h", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=180&q=80" },
  { name: "Paul GVilchis", message: "Enviado hace 15 h", time: "", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=180&q=80" },
  { name: "Hermanos", message: "Alicia Aguayo envio un reel de fif...", time: "", unread: true, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=80" },
];

function Mensajes() {
  return (
    <section className="mx-auto min-h-screen max-w-md bg-[#050a0e] px-4">
      <header className="sticky top-0 z-20 bg-[#050a0e] pt-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-3xl font-bold">
            <span>a_hugo___</span>
            <FaChevronDown className="h-4 w-4" />
            <span className="h-2 w-2 rounded-full bg-red-500" />
          </div>
          <FiEdit className="h-7 w-7" />
        </div>
        <label className="flex h-12 items-center gap-3 rounded-full bg-[#22282e] px-4 text-white/60">
          <FaSearch className="h-5 w-5" />
          <input className="w-full bg-transparent text-lg outline-none placeholder:text-white/60" placeholder="Buscar o preguntar a Meta AI" />
        </label>
      </header>

      <div className="mt-6 flex gap-5 overflow-x-auto">
        {notes.map((note) => (
          <div key={note.name} className="w-20 shrink-0 text-center">
            <div className="relative">
              <img className="h-20 w-20 rounded-full object-cover" src={note.image} alt={note.name} />
              <span className="absolute -top-3 left-1/2 max-w-24 -translate-x-1/2 rounded-2xl bg-[#252b31] px-3 py-2 text-xs leading-tight text-white/80">
                {note.text}
              </span>
            </div>
            <p className="mt-2 truncate text-sm text-white/85">{note.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mensajes</h2>
        <p className="font-semibold text-white/60">Solicitudes</p>
      </div>

      <div className="mt-5 space-y-5">
        {chats.map((chat) => (
          <article key={chat.name} className="flex items-center gap-4">
            <img className="h-16 w-16 rounded-full object-cover" src={chat.image} alt={chat.name} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-semibold">{chat.name}</p>
              <p className="truncate text-lg text-white/60">
                <span className={chat.unread ? "font-semibold text-white" : ""}>{chat.message}</span>
                {chat.time && <span> · {chat.time}</span>}
              </p>
            </div>
            {chat.unread && <span className="h-3 w-3 rounded-full bg-blue-500" />}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Mensajes;
