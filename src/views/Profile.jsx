import { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Profile = () => {

    let { userId } = useParams();
    const [files, setFiles] = useState([]);
    const [uploadError, setUploadError] = useState(null);
    const [uploading, setUploading] = useState(false);

    const API_URL = "http://127.0.0.1:8000";
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    const isValidUserId = uuidRegex.test(userId);
    const url = isValidUserId ? `${API_URL}/users/${userId}/posts` : null;
    const {data, loading, error} = useFetch(url);
    const posts = data ?? [];

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setUploadError(null);
    }

    const submitPost = async (e) => {
        e.preventDefault();

        if (!isValidUserId) {
            setUploadError("El usuario debe ser un UUID válido.");
            return;
        }

        const formData = new FormData();
        formData.append('description', 'Nuevo post!!')
        formData.append('user_id', userId)

        files.forEach((e) => {
            formData.append('files', e)
        })

        try {
            setUploading(true);
            setUploadError(null);

            const res = await fetch(`${API_URL}/posts/`,{
                method: 'POST',
                body: formData,
            });

            const post = await res.json()

            if (!res.ok) {
                throw new Error(post.detail?.[0]?.msg || post.detail || "No se pudo crear el post.");
            }

            setFiles([])
            e.target.reset()
        } catch(error) {
            setUploadError(error.message);
        } finally {
            setUploading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col">

                <div className="h-[80px] bg-amber-500 flex gap-4">
                    <div>Hugo</div>
                    <div>Followers</div>
                    <div>Post</div>
                </div>
                <div className="h-[560px] bg-red-300">
                    {loading && <p className="text-sm">Cargando posts...</p>}
                    {!loading && <p className="text-sm">Posts: {posts.length}</p>}
                    <div className="h-[150px] w-[120px] bg-orange-800">

                    </div>
                    <form name="uploadForm" onSubmit={submitPost}
                    >
                            <input
                                type="file" 
                                multiple
                                accept="image/*"
                                onChange={handleFileChange}
                                />
                            <div>
                                <input type="submit" value={uploading ? "Uploading..." : "Send File"} disabled={uploading} />
                            </div>
                            {!isValidUserId && (
                                <p className="text-sm text-red-700">El ID del usuario en la URL no es válido.</p>
                            )}
                            {error && (
                                <p className="text-sm text-red-700">Error al cargar posts: {error}</p>
                            )}
                            {uploadError && (
                                <p className="text-sm text-red-700">Error al subir foto: {uploadError}</p>
                            )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile;
