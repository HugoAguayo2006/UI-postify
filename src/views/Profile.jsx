import { useState } from "react";
import { useParams } from "react-router";
import { FaChevronDown, FaPlus, FaRegUser, FaTh } from "react-icons/fa";
import { FiMenu, FiPlus, FiUpload, FiX } from "react-icons/fi";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import useFetch from "../hooks/useFetch";

const API_URL = "http://127.0.0.1:8000";
const DEFAULT_USER_ID = "185ebaf9-2785-4b8d-8f90-004b16e54d7f";

const highlightItems = [
  { label: "Nueva", image: null },
  { label: "Viajes", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=220&q=80" },
  { label: "Amigos", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=220&q=80" },
  { label: "Mexico", image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=220&q=80" },
  { label: "Europa", image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=220&q=80" },
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=500&q=80",
];

const getImageFromPost = (post, index) => {
  const firstImage = Array.isArray(post.images) ? post.images[0] : null;
  return (
    post.image_url ||
    post.image ||
    post.url ||
    firstImage?.url ||
    firstImage?.image_url ||
    firstImage?.secure_url ||
    fallbackImages[index % fallbackImages.length]
  );
};

const getPostId = (post, index) => post.id || post.post_id || `post-${index}`;

const Profile = () => {
  const { userId } = useParams();
  const [files, setFiles] = useState([]);
  const [uploadError, setUploadError] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{12}$/i;
  const isValidUserId = uuidRegex.test(userId);
  const activeUserId = isValidUserId ? userId : DEFAULT_USER_ID;
  const url = `${API_URL}/users/${activeUserId}/posts`;
  const { data, loading, error } = useFetch(url);
  const posts = Array.isArray(data) ? data : [];

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setUploadError(null);
  };

  const submitPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", "Nuevo post!!");
    formData.append("user_id", activeUserId);

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setUploading(true);
      setUploadError(null);

      const res = await fetch(`${API_URL}/posts/`, {
        method: "POST",
        body: formData,
      });

      const post = await res.json();

      if (!res.ok) {
        throw new Error(post.detail?.[0]?.msg || post.detail || "No se pudo crear el post.");
      }

      setFiles([]);
      e.target.reset();
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section className="mx-auto min-h-screen max-w-md bg-[#050a0e]">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between bg-[#050a0e]/95 px-5">
        <FiPlus className="h-8 w-8" />
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-white/80">a_hugo___</span>
          <FaChevronDown className="h-4 w-4" />
        </div>
        <FiMenu className="h-8 w-8" />
      </header>

      <div className="px-5 pb-4">
        <div className="grid grid-cols-[116px_1fr] gap-4">
          <div>
            <div className="relative h-24 w-24">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=260&q=80"
                alt="Hugo"
              />
              <span className="absolute -right-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#050a0e] bg-white text-[#050a0e]">
                <FaPlus className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-4 text-lg">gdl</p>
          </div>

          <div>
            <h1 className="mt-8 text-lg font-bold">Hugo</h1>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xl font-bold">{posts.length}</p>
                <p className="text-xs leading-tight text-white/80">publicaciones</p>
              </div>
              <div>
                <p className="text-xl font-bold">719</p>
                <p className="text-xs leading-tight text-white/80">seguidores</p>
              </div>
              <div>
                <p className="text-xl font-bold">658</p>
                <p className="text-xs leading-tight text-white/80">seguidos</p>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-4" name="uploadForm" onSubmit={submitPost}>
          <div className="grid grid-cols-[1fr_1fr_48px] gap-2">
            <label className="flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#2a3038] px-4 font-bold">
              <FiUpload className="h-5 w-5" />
              <span>{files.length ? `${files.length} archivo(s)` : "Subir"}</span>
              <input className="hidden" type="file" multiple accept="image/*" onChange={handleFileChange} />
            </label>
            <button className="h-12 rounded-lg bg-[#2a3038] font-bold disabled:opacity-60" type="submit" disabled={uploading}>
              {uploading ? "Subiendo..." : "Publicar"}
            </button>
            <button className="flex h-12 items-center justify-center rounded-lg bg-[#2a3038]" type="button">
              <FaRegUser className="h-5 w-5" />
            </button>
          </div>

          {error && <p className="mt-3 text-sm text-red-400">Error al cargar posts: {error}</p>}
          {uploadError && <p className="mt-3 text-sm text-red-400">Error al subir foto: {uploadError}</p>}
        </form>
      </div>

      <div className="flex gap-5 overflow-x-auto px-5 py-4">
        {highlightItems.map((item) => (
          <div key={item.label} className="w-20 shrink-0 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#28303a] p-1">
              {item.image ? (
                <img className="h-full w-full rounded-full object-cover" src={item.image} alt={item.label} />
              ) : (
                <FaPlus className="h-9 w-9" />
              )}
            </div>
            <p className="mt-2 truncate text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 border-b border-white/15 text-white/60">
        <button className="flex h-12 items-center justify-center border-b-2 border-white text-white">
          <FaTh className="h-6 w-6" />
        </button>
        <button className="flex h-12 items-center justify-center">
          <MdOutlineSlowMotionVideo className="h-7 w-7" />
        </button>
        <button className="flex h-12 items-center justify-center">
          <TbRepeat className="h-7 w-7" />
        </button>
        <button className="flex h-12 items-center justify-center">
          <FaRegUser className="h-6 w-6" />
        </button>
      </div>

      {loading ? (
        <div className="grid grid-cols-3 gap-0.5">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="aspect-square animate-pulse bg-white/10" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="px-5 py-12 text-center">
          <p className="text-lg font-semibold">Este usuario todavia no tiene posts.</p>
          <p className="mt-2 text-sm text-white/60">Cuando la API mande publicaciones, apareceran aqui.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-0.5">
          {posts.map((post, index) => (
            <button
              key={getPostId(post, index)}
              className="relative aspect-square bg-white/10 text-left"
              type="button"
              onClick={() => setSelectedPost(post)}
            >
              <img className="h-full w-full object-cover" src={getImageFromPost(post, index)} alt={post.description || "Post"} />
              {post.description && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <p className="line-clamp-2 text-xs font-semibold">{post.description}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-end bg-black/70 sm:items-center sm:justify-center">
          <div className="max-h-[82vh] w-full max-w-md overflow-hidden rounded-t-3xl border border-white/10 bg-[#111820] sm:rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-lg font-bold">JSON del post</p>
                <p className="text-xs text-white/50">ID: {getPostId(selectedPost, 0)}</p>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                type="button"
                aria-label="Cerrar"
                onClick={() => setSelectedPost(null)}
              >
                <FiX className="h-6 w-6" />
              </button>
            </div>
            <pre className="max-h-[68vh] overflow-auto whitespace-pre-wrap break-words p-5 text-xs leading-relaxed text-green-200">
              {JSON.stringify(selectedPost, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
