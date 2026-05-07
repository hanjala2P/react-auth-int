import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

const Home = () => {
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