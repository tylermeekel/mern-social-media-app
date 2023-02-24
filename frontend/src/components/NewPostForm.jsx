import { useState } from "react"

export default function NewPostForm({ handleExit, handleSubmit }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [formError, setFormError] = useState('');

    const submitForm = (e) => {
        e.preventDefault()
        setFormError('');
        if(!title || !content) return setFormError('Please ensure all values are filled in!');
        handleSubmit(title, content)
    }

    return (
        <div className=" w-screen h-screen z-40 bg-slate-800 bg-opacity-90 fixed top-0 flex items-center justify-center">
            <i className="fa-solid fa-xmark z-50 text-white text-4xl fixed top-0 right-0 m-7 cursor-pointer hover:text-red-500" onClick={handleExit}></i>
            <div className=" xs:w-screen xs:h-screen lg:w-3/4 lg:h-4/6 xl:w-2/3 xl:h-3/5 bg-white rounded-md flex flex-col items-center justify-center">
                <h1 className="text-4xl font-medium">Create New Post</h1>
                <form className=" flex items-center flex-col p-4 gap-2 w-5/6 h-5/6">
                    <div className=" flex flex-col w-3/4">
                        <label className=" text-xl">Title</label>
                        <input type="text" className="focus:bg-slate-900 focus:text-white border-2 border-black text-3xl w-full self-center rounded-md p-3" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className=" flex flex-col w-3/4 h-full">
                        <label className=" text-xl">Content</label>
                        <textarea className="focus:bg-slate-900 focus:text-white  border-2 border-black w-full p-3 h-5/6 resize-none rounded-md" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    {formError && 
                        <div className=" bg-red-300 rounded-md p-3 fixed bottom-12">
                            <p className=" text-red-900 text-lg">{formError}</p>
                        </div>}
                    <button type="submit" className=" text-3xl bg-slate-900 text-white rounded-md p-3 hover:bg-slate-700" onClick={submitForm}>Submit</button>
                </form>
            </div>
        </div>
    )
}