import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { FaHeart, FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FiChevronLeft, FiMoreHorizontal, FiSend } from "react-icons/fi";

const fallbackImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80";
const avatarImage = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=160&q=80";

const getImagesFromPost = (post) => {
  if (!post) return [fallbackImage];

  if (Array.isArray(post.images) && post.images.length > 0) {
    const urls = post.images
      .map((image) => image?.url || image?.image_url || image?.secure_url)
      .filter(Boolean);

    if (urls.length > 0) return urls;
  }

  return [post.image_url || post.image || post.url || fallbackImage];
};

const getLikesCount = (post) => {
  if (typeof post.likes_count === "number") return post.likes_count;
  if (typeof post.like_count === "number") return post.like_count;
  if (typeof post.likesCount === "number") return post.likesCount;
  if (typeof post.likes === "number") return post.likes;
  if (Array.isArray(post.likes)) return post.likes.length;

  return 0;
};

const getCommentsCount = (post) => {
  if (typeof post.comments_count === "number") return post.comments_count;
  if (typeof post.comment_count === "number") return post.comment_count;
  if (typeof post.commentsCount === "number") return post.commentsCount;
  if (typeof post.comments === "number") return post.comments;
  if (Array.isArray(post.comments)) return post.comments.length;

  return 0;
};

function Post() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const passedPosts = Array.isArray(state?.posts) ? state.posts : [];
  const selectedIndex = Number.isInteger(state?.selectedIndex) ? state.selectedIndex : 0;
  const postRefs = useRef([]);

  useEffect(() => {
    postRefs.current[selectedIndex]?.scrollIntoView({ block: "start" });
  }, [selectedIndex]);

  if (passedPosts.length === 0) {
    return (
      <section className="mx-auto flex min-h-screen max-w-md flex-col bg-[#050a0e]">
        <header className="flex h-20 items-center border-b border-white/10 px-4">
          <button className="flex h-11 w-11 items-center justify-center" type="button" onClick={() => navigate(-1)}>
            <FiChevronLeft className="h-9 w-9" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold">Publicaciones</h1>
            <p className="text-sm text-white/70">a_hugo___</p>
          </div>
          <div className="h-11 w-11" />
        </header>
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="text-xl font-bold">No encontre los datos del post.</p>
          <p className="mt-2 text-sm text-white/60">Entra desde el perfil para pasar el JSON completo a esta pantalla.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-md bg-[#050a0e]">
      <header className="sticky top-0 z-20 flex h-20 items-center border-b border-white/10 bg-[#050a0e]/95 px-4">
        <button className="flex h-11 w-11 items-center justify-center" type="button" onClick={() => navigate(-1)}>
          <FiChevronLeft className="h-9 w-9" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-bold">Publicaciones</h1>
          <p className="text-sm text-white/70">a_hugo___</p>
        </div>
        <div className="h-11 w-11" />
      </header>

      <div>
        {passedPosts.map((post, postIndex) => {
          const images = getImagesFromPost(post);
          const likesCount = getLikesCount(post);
          const commentsCount = getCommentsCount(post);
          const description = post.description || "Para alcanzar nuestros suenos, es necesario trabajar un dia si y el otro tambien";

          return (
            <article key={post.id || post.post_id || `post-${postIndex}`} className="border-b border-white/10">
              <div ref={(element) => { postRefs.current[postIndex] = element; }} className="scroll-mt-20" />
              <div className="flex items-center gap-3 px-4 py-4">
                <img className="h-11 w-11 rounded-full object-cover" src={avatarImage} alt="a_hugo___" />
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-bold leading-tight">a_hugo___</p>
                  <p className="text-sm text-white/70">{postIndex === 0 ? "Hace 3 dias" : "7 de febrero"}</p>
                </div>
                <FiMoreHorizontal className="h-7 w-7" />
              </div>

              <div className="relative bg-black">
                <img className="aspect-square w-full object-cover" src={images[0]} alt={description} />
                {images.length > 1 && (
                  <span className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm font-semibold">
                    1/{images.length}
                  </span>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex justify-center gap-1.5 py-3">
                  {images.map((image, index) => (
                    <span key={image} className={`h-2 w-2 rounded-full ${index === 0 ? "bg-blue-500" : "bg-white/25"}`} />
                  ))}
                </div>
              )}

              <div className="px-4 pb-6">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <FaRegHeart className="h-8 w-8" />
                      <span className="font-bold">{likesCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegComment className="h-8 w-8" />
                      <span className="font-bold">{commentsCount}</span>
                    </div>
                    <FiSend className="h-8 w-8" />
                  </div>
                  <FaRegBookmark className="h-8 w-8" />
                </div>

                <p className="text-sm text-white/85">
                  {likesCount > 0 ? (
                    <>Les gusta a <span className="font-bold">paul_gvilchis</span> y otros</>
                  ) : (
                    "Se el primero en indicar que te gusta"
                  )}
                </p>
                <p className="mt-2 text-lg leading-snug">
                  <span className="font-bold">a_hugo___ </span>
                  {description}
                  <span className="text-white/55"> mas</span>
                </p>

                <details className="mt-6 rounded-2xl border border-white/10 bg-white/5">
                  <summary className="cursor-pointer px-4 py-3 font-bold">Ver JSON del post</summary>
                  <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-words px-4 pb-4 text-xs leading-relaxed text-green-200">
                    {JSON.stringify(post, null, 2)}
                  </pre>
                </details>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Post;
