import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../../context/AuthContext";

const AdminNav = () => {

    const [auth, setAuth] = useContext(AuthContext);

    const router = useRouter();


    function logout() {
        setAuth(null);
        router.push("/");
    }

    return (

         <nav className="bg-gray-100">

         {/* nav container styles */}
         <div className="max-w-7xl mx-auto px-3 text-gray-700">

             {/* flex container: logo, primary, secondary */}
             <div className="flex items-center justify-between py-5">

                 {/* logo */}
                 <div className="logo">
                 <Link href="/admin"><a className="text-xl link-text">Dashboard</a></Link>
                 </div>
                     {/* primary */}
                <div className="flex items-center space-x-4">
                    <Link href="/admin/createBlog"><a className="btn-primary">Create Blog</a></Link>
                    <a onClick={logout} className="link-text">Logout</a>
                </div>
             </div>
        </div>

{/* mobile */}

     </nav>
    )
}

export default AdminNav
