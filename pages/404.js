
import Head from "next/head";
import { useEffect } from "react"
import { useRouter } from "next/router";
import TopNav from "../components/nav/TopNav";

const NotFound = () => {

    const router = useRouter();

    useEffect (()=>{
        setTimeout(() => {
            router.back()
        }, 3000)
    }, [router])
    return (
        <div>
        <TopNav />
        <Head>
        <title>404 - Kunal Sharda</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
        Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
        to try a free class and experience Kunal's therapeutic and individual approach to Yoga."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <div className="w-full h-screen mx-auto my-auto flex flex-col justify-center items-center">
            <h1 className="text-black text-2xl">Page not found! Were you looking for Kunal Sharda?</h1>
            <h2 className="text-lg">Redirecting to kunalsharda.com</h2>
        </div>
    </div>
    )
}

export default NotFound;