import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {TrendingUp, ArrowRight} from 'lucide-react';

import Header from '../components/Header'
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 },
    },
};
    
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
};

const faqs = [
    {
        q: 'Is StockSight really free?',
        a: 'Yes—StockSight is 100% free. No sign-up, no hidden fees.'
    },
    {
        q: 'Where does the data come from?',
        a: 'We pull daily prices & volumes from public APIs (yfinance / Alpha Vantage).'
    },
    {
        q: 'How does the prediction work?',
        a: 'A Random Forest / Regression model is trained on the last 20 days of data to forecast tomorrow’s closing price.'
    },
    {
        q: 'How often is data updated?',
        a: 'Data and model retraining happen once every 24 hours to keep signals fresh.'
    },
    {
        q: 'Is this investment advice?',
        a: 'No—this is an educational tool. Always conduct your own research before trading.'
    }
];

export default function Homepage() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <Header />
            {/* Hero Section */}

            
            

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                    <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-1/2 left-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <motion.div
                        className="text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Floating Badge */}
                        <motion.div
                            className="inline-flex items-center px-4 py-2 bg-blue-600/10 rounded-full text-blue-600 text-sm font-medium mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Powered by Advanced ML Models
                        </motion.div>

                        {/* Main Heading with Gradient */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-extrabold mb-6"
                            variants={itemVariants}
                        >
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Predict Tomorrow's
                            </span>
                            <br />
                            <span className="text-gray-900">Stock Moves, Today</span>
                        </motion.h1>

                        {/* Subheading with Enhanced Typography */}
                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
                            variants={itemVariants}
                        >
                            Make data-driven decisions with AI-powered signals.
                            <br className="hidden sm:block" />
                            No complexity, just clear buy/hold/sell guidance.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="/signup"
                                className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center">
                                    Get Started Free
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </motion.a>

                            <motion.a
                                href="#features"
                                className="inline-flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                                <ChevronDown className="w-4 h-4 ml-1" />
                            </motion.a>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div
                            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {[
                                { label: 'Active Users', value: '10K+' },
                                { label: 'Predictions Made', value: '1M+' },
                                { label: 'Accuracy Rate', value: '94%' },
                                { label: 'Daily Analysis', value: '500+' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    variants={itemVariants}
                                >
                                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>

                {/* Add this to your global CSS or Tailwind config */}
                <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
            </section>



            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Why StockSight?
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                title: 'Real-Time Quotes',
                                desc: 'Daily closing prices & volumes pulled straight from public finance APIs.'
                            },
                            {
                                title: 'AI-Driven Predictions',
                                desc: 'Our ML model analyzes the last 20 days of data to forecast tomorrow’s close.'
                            },
                            {
                                title: 'Simple Signals',
                                desc: 'Green = Buy, Gray = Hold, Red = Sell – decision-making made easy.'
                            },
                            {
                                title: 'Zero Setup',
                                desc: 'No signup, no fees. Just add tickers and start tracking instantly.'
                            }
                        ].map((f, i) => (
                            <motion.div
                                key={i}
                                className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition"
                                variants={itemVariants}
                            >
                                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                                <p className="text-gray-600">{f.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Get Started Section */}
            <section id="get-started" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.h2
                        className="text-3xl font-bold mb-8"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        How to Get Started
                    </motion.h2>
                    <motion.div
                        className="flex flex-col md:flex-row justify-center items-start md:items-center gap-8 mb-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                num: 1,
                                title: 'Add Your Ticker',
                                desc: 'Enter your stock symbol and pick a period & interval.'
                            },
                            {
                                num: 2,
                                title: 'View Predictions',
                                desc: 'See today’s close price alongside our next-day forecast and trend indicator.'
                            },
                            {
                                num: 3,
                                title: 'Act Confidently',
                                desc: 'Use the Buy/Hold/Sell signal to guide your trading decisions.'
                            }
                        ].map(step => (
                            <motion.div
                                key={step.num}
                                className="flex items-start md:items-center gap-4"
                                variants={itemVariants}
                            >
                                <div className="h-12 w-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold">
                                    {step.num}
                                </div>
                                <div className="text-left">
                                    <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.button
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Start Tracking Stocks
                    </motion.button>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-8"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.div
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {faqs.map((f, i) => (
                            <motion.div key={i} className="border-b border-gray-200" variants={itemVariants}>
                                <button
                                    className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    {f.q}
                                    {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                                </button>
                                {openFaq === i && (
                                    <div className="px-4 pb-4 text-gray-600">
                                        {f.a}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-12">
                <motion.div
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="text-sm" variants={itemVariants}>
                        © 2025 StockSight. All rights reserved.
                    </motion.div>
                    <motion.div className="flex space-x-4" variants={itemVariants}>
                        <a href="#home" className="hover:text-white">Home</a>
                        <a href="#features" className="hover:text-white">Features</a>
                        <a href="#get-started" className="hover:text-white">Get Started</a>
                        <a href="#faq" className="hover:text-white">FAQ</a>
                        <a
                            href="https://github.com/your-username/stock-sight-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                        >
                            GitHub
                        </a>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        {/* GitHub icon SVG (same as before) */}
                        <a
                            href="https://github.com/your-username/stock-sight-api"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 16 16">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.19.01-.82.01-1.49c2.01.37 2.53-.49 2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-1.13-.83-.34-.3-.6-.63-.84-.99-.2-.36-.44-.76-1.05-.91-.51-.15-.92-.01-1.13.08-.2.09-.47.24-.59.44-.11.2-.29.46-.42.67-.13.21-.29.45-.47.69-.18.23-.38.4-.6.58-.22.17-.46.33-.73.48-.27.15-.55.26-.85.33-.3.07-.6.07-.89 0-.29-.07-.59-.18-.88-.34-.29-.15-.58-.32-.88-.53-.3-.21-.59-.45-.83-.69-.24-.24-.44-.45-.6-.75-.16-.3-.25-.61-.26-.93-.01-.32.06-.63.21-.9-.19-.23-.45-.52-.67-.94-.22-.4-.36-.82-.41-1.27-.05-.45-.04-.9-.03-1.35.01-.45.05-.9.13-1.35.08-.45.2-.89.35-1.32.15-.43.35-.84.57-1.24.22-.4.48-.77.76-1.13.28-.36.59-.68.91-.99.32-.3.67-.57 1.08-.8a6.673 6.673 0 0 1 2.58-.71c.97-.03 1.94.05 2.91.24 1.02.2 2 .5 2.92.94-.02.25-.04.5-.04.75-.01 1.55.18 2.83.54 3.82.36.99.93 1.76 1.73 2.31.8.55 1.82.88 3 1a8.013 8.013 0 0 1 2.59.59A8 8 0 0 0 8 0z" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
                <div className="mt-6 text-center text-sm text-gray-400 px-4">
                    Disclaimer: StockSight is an educational tool, not financial advice. All trading decisions are your own responsibility.
                </div>
            </footer>
        </div>
    );
}
