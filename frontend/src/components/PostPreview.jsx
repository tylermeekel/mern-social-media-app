export default function PostPreview({ post, deleteFunction }) {

    const handleDelete = (e) => {
        e.preventDefault();
        deleteFunction(post._id)
    }

    return (
        <div className=" 
             max-h-60 h-30 w-3/5 mt-12 p-5
            bg-slate-900 text-slate-50
            flex flex-col 
            rounded-md 
            shadow-sm shadow-slate-900">
            <div className=" flex justify-between">
                <h1 className=" text-3xl">{post.title}</h1>
                <div className="flex gap-3">
                    {/*<i class="fa-solid fa-pen-clip text-2xl hover:text-blue-500 cursor-pointer"></i>*/}
                    <i className="fa-solid fa-trash-can text-2xl hover:text-red-500 cursor-pointer" onClick={handleDelete}></i>
                </div>
            </div>
            <br />
            <p className="line-clamp-6">{post.content}</p>
            <p>{post._id}</p>
        </div>
        
    )
}