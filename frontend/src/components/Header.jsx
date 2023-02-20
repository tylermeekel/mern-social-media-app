export default function Header() {
    return (
        <div className=" h-1/5 p-6 flex justify-between text-slate-900 border-b-2 border-slate-900">
            <h1 className=" text-5xl">soshul</h1>
            <nav className=" flex">
                <ul className=" flex gap-3 items-center text-lg">
                <a href="https://www.google.com"><span className="material-symbols-outlined text-4xl">note_add</span></a>
                </ul>
            </nav>
        </div>
    )
}