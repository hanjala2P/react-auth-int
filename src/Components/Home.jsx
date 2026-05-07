import React, { use } from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';import { AuthContext } from '../Context/AuthContext/AuthContext';
;

const Home = () => {
    const authInfo = use(AuthContext);
    console.log(authInfo);
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            {/* flex-grow ensures the footer stays at the bottom even on short pages */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Home;