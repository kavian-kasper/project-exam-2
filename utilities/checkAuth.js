import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";


export function checkAuth () {
    const [auth, setAuth] = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        if (!auth) {
        router.push("/")
        }
    })
}
