import Footer from "./Footer";
// import dynamic from 'next/dynamic';
// const Nav = dynamic(() => import('./Navbar'), {ssr: false});

function Layout({ children }) {
    return (
        <div className="max-w-7xl mx-auto">
                {children}
            <Footer />
       </div>
    )
}

export default Layout
