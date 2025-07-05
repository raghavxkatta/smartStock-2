import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, UserPlus } from 'lucide-react';

const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
};

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.header
            className="sticky top-0 w-full bg-white/90 backdrop-blur-md z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
        >
            {/* Gradient Border Bottom */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            StockSight
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {['Home', 'Features', 'Get Started', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-gray-600 hover:text-blue-600 transition-colors relative group py-2"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </a>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            href="/login"
                            className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <LogIn className="w-4 h-4 mr-2" />
                            Login
                        </motion.a>
                        <motion.a
                            href="/signup"
                            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <UserPlus className="w-4 h-4 mr-2" />
                            Sign Up
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden rounded-lg p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden border-t border-gray-100 bg-white"
                >
                    <div className="px-4 pt-2 pb-3 space-y-1">
                        {['Home', 'Features', 'Get Started', 'FAQ'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="grid grid-cols-2 gap-4 pt-4 pb-2">
                            <a
                                href="/login"
                                className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <LogIn className="w-4 h-4 mr-2" />
                                Login
                            </a>
                            <a
                                href="/signup"
                                className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <UserPlus className="w-4 h-4 mr-2" />
                                Sign Up
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}

export default Header;
