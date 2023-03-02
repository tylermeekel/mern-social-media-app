import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostView(){
    const { id } = useParams('');
    const [post, setPost] = useState('');
    const [postUsername, setPostUsername] = useState('');
    
    useEffect(() => {
        const getData = async () => {
            await axios.get(`/api/posts/${id}`)
                .then(async (res) => {
                    setPost(res.data)
                    console.log(res)
                    await axios.get(`/api/users/${res.data.user_id}`)
                        .then((userresponse) => setPostUsername(userresponse.data.username))
                })

        }
        getData()
        
    }, [id])

    return (
        <div className=" flex h-full w-full flex-col items-center">
            {postUsername ? <div className=" 
                h-30 w-3/5 mt-12 p-5
                bg-slate-900 text-slate-50
                flex flex-col 
                rounded-md 
                shadow-sm shadow-slate-900">
                <div className=" flex justify-between">
                    <div className="">
                        <h1 className=" text-3xl">{post.title}</h1>
                        <h2 className=" text-slate-500">@{postUsername}</h2>
                    </div>
                    <div className="flex gap-3">
                        
                    </div>
                </div>
                <br />
                <p>{post.content}</p>
            </div> : 
        <p>loading</p>}
        </div>
        
    )

}