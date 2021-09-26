import Social from "./common/Social";


function Footer() {
    return (
        <footer className="bg-[#badad1] flex flex-col justify-evenly sm:flex-row py-6">

                <div className="flex items-center mx-auto py-2">
                    <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><defs/><path d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z"fill="currentColor"/><circle id="_Inner-Path_" cx="16" cy="13" r="4" fill="none"/></svg>
                    <p>Waldemar Thranes gate 5 <span className="block">0171 Oslo</span> </p>
                </div>


            <div className="flex items-center mx-auto py-2">
                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg"width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2"d="M1 2h21v16h-8l-8 4v-4H1V2zm5 8h1v1H6v-1zm5 0h1v1h-1v-1zm5 0h1v1h-1v-1z"/></svg>
                <div className="flex-col">
                    <p> 941 05 899</p>
                    <p>kunalsharda@gmail.com</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer
