export default function Header({ addNewPost }) {


    return (
        <div className=" h-1/5 p-6 flex justify-between text-slate-900 border-b-2 border-slate-900">
            <h1 className=" text-5xl">soshul</h1>
            <nav className=" flex">
                <ul className=" flex gap-3 items-center text-lg">
                <i class="fa-solid fa-circle-plus text-4xl cursor-pointer hover:text-green-500" onClick={addNewPost}></i>
                </ul>
            </nav>
        </div>
    )
}