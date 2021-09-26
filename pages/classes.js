import Head from "next/head";
import TopNav from "../components/nav/TopNav";

export const Classes = () => {

    return (
        <div className="h-screen">
            <Head>
                <title>Classes - Kunal Sharda</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="description" content="Kunal Sharda is a mysore Yoga therapist and accupuncturist located in Oslo, Norway.
                Drop by his studio in St. Hanshaugen anytime between 08.00 and 10.00
                to try a free class and experience Kunal's therapeutic and individual approach to Yoga."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TopNav/>
            <div className="flex flex-col justify-center items-center m-10">
           <h1 className="text-black text-sm font-normal mb-10">First-timers are free to come by anytime during the morning class to try out a session.</h1>
           <table>
               <tbody>
               <tr className="border-b-2 border-green-200">
                    <td className="font-bold">Yoga</td>
                    <td>06.30 - 11.00 (drop in)</td>
                </tr>
                <tr className="border-b-2 border-green-200">
                    <td className="font-bold">Accupuncture</td>
                    <td>By appointment</td>
                </tr>
                <tr className="border-b-2 border-green-200">
                    <td className="font-bold">Therapy</td>
                    <td>By appointment</td>
                </tr>
                </tbody>
           </table>
           </div>
        </div>
    )
}

export default Classes
