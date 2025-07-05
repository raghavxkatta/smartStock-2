import React from 'react';
import { motion } from 'framer-motion';
import { Github, Heart, Twitter, Linkedin } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
            {/* Gradient Top Border */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Logo & Description */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className="text-xl font-bold text-white">StockSight</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Making stock predictions accessible and understandable for everyone.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {['Home', 'Features', 'Get Started', 'FAQ'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/your-username/stock-sight-api"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <motion.div
                        variants={itemVariants}
                        className="text-sm text-gray-400"
                    >
                        © 2025 StockSight. All rights reserved.
                    </motion.div>

                    {/* Team Credit */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center space-x-2 text-sm"
                    >
                        <span>Built with</span>
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                        <span>by</span>
                        <span className="text-blue-400 font-semibold">Team Binary Brains</span>
                    </motion.div>
                </div>

                {/* Disclaimer */}
                <motion.div
                    variants={itemVariants}
                    className="mt-8 text-center text-sm text-gray-500 px-4"
                >
                    Disclaimer: StockSight is an educational tool, not financial advice. 
                    All trading decisions are your own responsibility.
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;
