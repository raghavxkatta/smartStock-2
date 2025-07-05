import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, LineChart, Brain, Signal, Shield, TrendingUp, ArrowRight, Search, HelpCircle } from 'lucide-react';


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
const features = [
    {
        title: 'Real-Time Quotes',
        desc: 'Daily closing prices & volumes pulled straight from public finance APIs.',
        icon: LineChart,
        gradient: 'from-blue-500 to-cyan-400',
        delay: 0.2
    },
    {
        title: 'AI-Driven Predictions',
        desc: 'Our ML model analyzes the last 20 days of data to forecast tomorrows close.',
        icon: Brain,
        gradient: 'from-purple-500 to-pink-400',
        delay: 0.4
    },
    {
        title: 'Simple Signals',
        desc: 'Green = Buy, Gray = Hold, Red = Sell – decision-making made easy.',
        icon: Signal,
        gradient: 'from-green-500 to-emerald-400',
        delay: 0.6
    },
    {
        title: 'Secure Access',
        desc: 'Protected by Firebase Authentication. Your predictions, your account, always secure.',
        icon: Shield,
        gradient: 'from-red-500 to-orange-400', // Changed gradient to match security theme
        delay: 0.8
    }
];
const faqs = [
    {
        q: 'Is StockSight really free?',
        a: 'While we offer a free tier with basic features, we also have premium plans for advanced features. Sign up now to explore our platform and choose what works best for you.',
        category: 'Pricing'
    },
    {
        q: 'Where does the data come from?',
        a: 'We source our data from reliable public APIs (yfinance / Alpha Vantage) to provide you with accurate, real-time market information for informed decision-making.',
        category: 'Data'
    },
    {
        q: 'How does the prediction work?',
        a: 'Our ML model uses Random Forest/Regression techniques trained on 20-day historical data patterns to forecast next-day closing prices. The model is retrained daily for optimal accuracy.',
        category: 'Technology'
    },
    {
        q: 'How often is data updated?',
        a: 'Data is refreshed every 24 hours, and our ML models are retrained daily to ensure you receive the most current and accurate predictions possible.',
        category: 'Data'
    },
    {
        q: 'Is this investment advice?',
        a: 'No, StockSight is an educational and analytical tool. While we provide data-driven insights, all trading decisions should be made based on your own research and risk assessment.',
        category: 'Legal'
    }
];

const steps = [
    {
        num: 1,
        title: 'Add Your Ticker',
        desc: 'Enter your stock symbol and pick a period & interval.',
        icon: Search,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        num: 2,
        title: 'View Predictions',
        desc: 'See todays close price alongside our next-day forecast and trend indicator.',
        icon: TrendingUp,
        color: 'from-purple-500 to-pink-500'
    },
    {
        num: 3,
        title: 'Act Confidently',
        desc: 'Use the Buy/Hold/Sell signal to guide your trading decisions.',
        icon: LineChart,
        color: 'from-green-500 to-emerald-500'
    }
];

export default function Homepage() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="font-sans text-gray-800">
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
                {/* <style jsx>{`
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
      `}</style> */}
            </section>



            {/* Features Section */}
            <section id="features" className="relative py-24 overflow-hidden bg-gray-50">
                {/* Background Decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02),transparent)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.span
                            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            Why Choose Us
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Why StockSight?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Advanced technology made simple. Get everything you need to make informed trading decisions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: feature.delay }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                    {/* Gradient Border on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -m-0.5`} />

                                    <div className="relative bg-white rounded-2xl p-6">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                                <feature.icon className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.desc}
                                        </p>

                                        {/* Additional Firebase Badge for the Security Feature */}
                                        {feature.title === 'Secure Access' && (
                                            <div className="mt-4 flex items-center justify-center">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                                                    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0C8.97 0 6.5 2.47 6.5 5.5V9H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V11a2 2 0 00-2-2h-1.5V5.5C17.5 2.47 15.03 0 12 0zm0 2c1.97 0 3.5 1.53 3.5 3.5V9h-7V5.5C8.5 3.53 10.03 2 12 2z" />
                                                    </svg>
                                                    Powered by Firebase Auth
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Get Started Section */}
            <section id="get-started" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid-gray-100 opacity-40" />

                <div className="relative max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            Start in Three Simple Steps
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Get started with StockSight in minutes and make data-driven trading decisions
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    {/* Gradient Border */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -m-0.5`} />
                                    <div className="relative bg-white rounded-2xl p-6">
                                        {/* Icon & Number */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                                                <step.icon size={24} />
                                            </div>
                                            <span className="text-4xl font-bold text-gray-200">0{step.num}</span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                        <p className="text-gray-600 mb-6">{step.desc}</p>

                                        {/* Progress Line */}
                                        {index < steps.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 left-full w-8 border-t-2 border-dashed border-gray-200 -translate-y-1/2" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="/signup"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Tracking Stocks
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <p className="mt-4 text-gray-500">
                            No credit card required • Free to get started
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="relative py-24 bg-gray-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.02)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.02)_87.5%,rgba(59,130,246,0.02)_0)] bg-[length:20px_20px]" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.span
                            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Got Questions?
                        </motion.span>
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to know about StockSight. Can't find the answer you're looking for? Feel free to contact us.
                        </p>
                    </motion.div>

                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left focus:outline-none"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-lg font-semibold text-gray-800">{faq.q}</span>
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${{
                                                'Pricing': 'bg-green-100 text-green-700',
                                                'Data': 'bg-blue-100 text-blue-700',
                                                'Technology': 'bg-purple-100 text-purple-700',
                                                'Legal': 'bg-red-100 text-red-700'
                                            }[faq.category]
                                                }`}>
                                                {faq.category}
                                            </span>
                                        </div>
                                        <div className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-4 text-gray-600 border-t border-gray-100">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-600">
                            Still have questions?{' '}
                            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                                Contact our support team
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
   
        </div>
    );
}
