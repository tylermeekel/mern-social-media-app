export default function PostPreview({ title, content, id }) {
    return (
        <div className=" 
            max-h-40 w-3/5 mt-12 p-5
            bg-slate-900 text-slate-50
            flex flex-col 
            rounded-md 
            shadow-sm shadow-slate-900">
            <h1 className=" text-3xl">{title}</h1>
            <p className=" line-clamp-3">{content}</p>
            <h2>{id}</h2>
        </div>
        
    )
}