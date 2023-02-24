import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext";

export default function Header() {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="flex items-center justify-between text-slate-900 border-b-2 border-slate-900">
            <Link to="/">
                <h1 className=" m-4 sm:text-2xl md:text-5xl">soshul{user ? `@${user.username}` : "" }</h1>
            </Link>
            <nav className=" flex">
                {user ? 
                <div>
                    <button className="text-sm text-white bg-slate-900 p-2 rounded-md hover:bg-slate-800 m-4" onClick={handleLogout}>Logout</button>
                </div> :
                <div className="flex items-center gap-4">
                    <Link className="text-sm text-white bg-slate-900 p-2 rounded-md hover:bg-slate-800" to="/login">Login</Link>
                    <Link className="text-sm text-white bg-slate-900 p-2 rounded-md hover:bg-slate-800" to="/signup">Sign Up</Link>
                </div>
                }
            </nav>
        </div>
    )
}