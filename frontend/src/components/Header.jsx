import React from 'react';
import { motion } from 'framer-motion';

// Bring in your buttonVariants (either define here or import from where you defined it)
const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

function Header() {
    return (
        <motion.header
            className="sticky top-0 w-full bg-white shadow px-8 py-4 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold">StockSight</div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
                    <a href="#get-started" className="text-gray-700 hover:text-blue-600">Get Started</a>
                    <a href="#faq" className="text-gray-700 hover:text-blue-600">FAQ</a>
                </nav>
<div>

                <motion.button
                    className="ml-6 px-4 py-2  text-black font-semibold cursor-pointer rounded-lg hover:text-blue-700 focus:outline-none"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() =>
                        document
                            .getElementById('get-started')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Login
                </motion.button>
                <motion.button
                    className="ml-6 px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-700 focus:outline-none"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() =>
                        document
                            .getElementById('get-started')
                            .scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    Sign Up
                </motion.button>
</div>
            </div>
        </motion.header>
    );
}

export default Header;
