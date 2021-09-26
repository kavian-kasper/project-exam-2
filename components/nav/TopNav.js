import Link from "next/link";
import Social from "../common/Social";
import { useEffect } from "react";

const TopNav = () => {

    useEffect(() => {
        const mobileBtn = document.querySelector("button.mobile-menu-button")
        const mobileMenu = document.querySelector("div.mobile-menu")

        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        })
    });

    return (
        <nav className="bg-primary">

            {/* nav container styles */}
            <div className="max-w-7xl mx-auto px-3 text-gray-700">

                {/* flex container: logo, primary, secondary */}
                <div className="flex items-center justify-between py-5">

                    {/* logo */}
                    <div className="logo">
                    <Link href="/"><a className="text-xl link-text">Kunal Sharda</a></Link>
                    </div>

                    {/* group primary & secondary navs*/}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* primary */}
                        <div className="space-x-4">
                            <Link href="/yoga"><a className="link-text">Yoga</a></Link>
                            <Link href="/accupuncture"><a className="link-text">Accupuncture</a></Link>
                            <Link href="/therapy"><a className="link-text">Therapy</a></Link>
                            <Link href="/classes"><a className="link-text">Classes</a></Link>
                            <Link href="/blog"><a className="link-text">Blog</a></Link>
                        </div>

                        {/* secondary */}
                        <div className="hidden md:block">
                            <Social />
                        </div>

                    </div>

                    {/* mobile button */}
                    <button className="mobile-menu-button md:hidden flex-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"viewBox="0 0 20 20">
                                <path d="M20 5V2H0v3h20zm0 6V8H0v3h20zm0 6v-3H0v3h20z" fill="currentColor"/>
                            </svg>
                    </button>
                </div>
            </div>

{/* mobile */}
            <div className="mobile-menu hidden md:hidden">
                <Link href="/yoga"><a className="block py-2 px-4 text-sm bg-white border-b-2 border-gray-400 link-text">Yoga</a></Link>
                <Link href="/accupuncture"><a className="block py-2 px-4 text-sm bg-white border-b-2 border-gray-400 link-text">Accupuncture</a></Link>
                <Link href="/therapy"><a className="block py-2 px-4 text-sm bg-white border-b-2 border-gray-400 link-text">Therapy</a></Link>
                <Link href="/classes"><a className="block py-2 px-4 text-sm bg-white border-b-2 border-gray-400 link-text">Classes</a></Link>
                <Link href="/blog"><a className="block py-2 px-4 text-sm bg-white border-b-2 border-gray-400 link-text">Blog</a></Link>
                <Link href="https://www.facebook.com/pages/category/Yoga-Studio/Kunal-Sharda-1714349462194232/">
                    <a target="_blank">
                        <div className="bg-white">
                        <svg className="link-text fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width="2em"
                            height="2em"
                            viewBox="0 0 100 100">
                            <path d="M82.026 14H17.974A3.974 3.974 0 0 0 14 17.974v64.053A3.974 3.974 0 0 0 17.974 86h34.483V58.118h-9.383V47.252h9.383v-8.014c0-9.3 5.68-14.363 13.976-14.363c3.974 0 7.389.295 8.385.428v9.719l-5.754.003c-4.512 0-5.385 2.144-5.385 5.29v6.938h10.76l-1.401 10.866h-9.359V86h18.348A3.974 3.974 0 0 0 86 82.026V17.974A3.974 3.974 0 0 0 82.026 14z"
                        /></svg>
                        </div>
                    </a>
                </Link>
            </div>

        </nav>
    )
}

export default TopNav
