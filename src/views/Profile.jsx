import { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const Profile = () => {

    let { userId } = useParams();
    console.log(userId);
    const [files, setFiles] = useState([]);

    const url = `http://localhost:8000/users/${userId}/posts`;
    const {data, loading, error} = useFetch(url);

    console.log(data)

    const hangleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
    }

    const submitPost = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('description', 'Nuevo post!!')
        formData.append('user_id', userId)

        files.forEach((file) => {
            formData.append('files', file)
        })

        try{
            const res = await fetch("http://127.0.0.1:8000/posts/",{
                method: 'POST',
                body: formData,
            });
            const post = await res.json()
            console.log(post)
            setFiles([])
            e.target.reset()
        } catch(error){
            console.log(error);
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
                    data
                    <div className="h-[150px] w-[120px] bg-orange-800">

                    </div>
                    <form name="uploadForm" onSubmit={submitPost}
                    >
                            <input
                                type="file" 
                                multiple
                                accept="image/*"
                                onChange={hangleFileChange}
                                />
                            <div>
                                <input type="submit" value="Send File" />
                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile;
