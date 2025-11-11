import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Search,
    Palette,
    Truck,
    BarChart3,
    ArrowRight,
    CheckCircle,
    Star,
    Quote,
    Compass,
    PlayCircle
} from 'lucide-react'
import { Header, Footer } from '../components'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'

export default function HowItWorks() {
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    // Navigation scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavExpanded(false)
            } else if (currentScrollY < lastScrollY) {
                setIsNavExpanded(true)
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const processSteps = [
        {
            id: 1,
            icon: <Search className="w-8 h-8 text-[#C2B280]" />,
            title: "Discover",
            subtitle: "Understanding Your Vision",
            description: "We begin by diving into your goals, audience insights, and brand identity. Through collaborative workshops and creative exercises, we uncover the inspiration that will guide the entire event.",
            details: [
                "Collaborative workshops to define objectives",
                "Audience analysis and persona development",
                "Brand identity integration and alignment",
                "Creative discovery exercises and brainstorming"
            ],
            testimonial: {
                text: "The discovery phase was incredible - they understood our vision better than we did ourselves!",
                author: "Sarah Chen",
                role: "Event Director, TechCorp"
            },
            color: "from-purple-600 to-indigo-700",
            accentColor: "text-purple-400",
            image: image1
        },
        {
            id: 2,
            icon: <Palette className="w-8 h-8 text-[#C2B280]" />,
            title: "Design",
            subtitle: "Crafting Your Experience",
            description: "Our creative team develops a bespoke event concept that weaves together narrative, technology, and engagement. From selecting locations to designing challenges, every detail is intentional.",
            details: [
                "Narrative development and storytelling framework",
                "Technology integration and digital experience design",
                "Location scouting and venue customization",
                "Challenge design and engagement mechanics"
            ],
            testimonial: {
                text: "The design phase brought our wildest ideas to life with incredible attention to detail.",
                author: "Marcus Rodriguez",
                role: "HR Manager, InnovateX"
            },
            color: "from-green-600 to-emerald-700",
            accentColor: "text-green-400",
            image: image2
        },
        {
            id: 3,
            icon: <Truck className="w-8 h-8 text-[#C2B280]" />,
            title: "Deliver",
            subtitle: "Bringing It to Life",
            description: "On event day, we bring the plan to life — managing logistics, tech integration, and live facilitation. You focus on the fun; we handle the rest.",
            details: [
                "Complete logistics management and coordination",
                "Real-time tech support and troubleshooting",
                "Professional facilitation and event hosting",
                "Live monitoring and experience optimization"
            ],
            testimonial: {
                text: "Flawless execution! Our team had an amazing time while we relaxed knowing everything was handled.",
                author: "Jennifer Park",
                role: "Campus Activities Director, State University"
            },
            color: "from-blue-600 to-cyan-700",
            accentColor: "text-blue-400",
            image: image3
        },
        {
            id: 4,
            icon: <BarChart3 className="w-8 h-8 text-[#C2B280]" />,
            title: "Debrief",
            subtitle: "Measuring Success",
            description: "After the event, we provide a post-event package that includes highlight reels, performance metrics, and participant feedback to measure impact and inspire the next adventure.",
            details: [
                "Comprehensive performance analytics and insights",
                "Professional highlight reels and photo galleries",
                "Participant feedback analysis and reporting",
                "Recommendations for future events and improvements"
            ],
            testimonial: {
                text: "The debrief package was fantastic - clear metrics that proved the ROI of our investment.",
                author: "David Thompson",
                role: "Conference Organizer, Global Summit"
            },
            color: "from-orange-600 to-red-700",
            accentColor: "text-orange-400",
            image: image4
        }
    ]

    return (
        <div className="w-full min-h-screen" style={{
            background: 'linear-gradient(to bottom, #FAF9F6 0%, #F9E6CF 8%, #F7E4CD 16%, #F5E1CB 24%, #F2DFC8 32%, #C2B280 40%, #B5A876 45%, #A89E6C 50%, #9B9462 55%, #8E8A58 60%, #81804E 65%, #004D43 70%, #004540 75%, #003D3C 80%, #003539 85%, #002D35 88%, #002531 91%, #001D2E 94%, #00152A 97%, #000 100%)'
        }}>
            {/* Header */}
            <Header isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />

            {/* Hero Section - Light Start */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#004D43]/25 to-[#C2B280]/35 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#C2B280]/35 to-[#004D43]/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/50 to-[#C2B280]/30 rounded-full blur-2xl animate-pulse-glow"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-[#004D43] leading-tight"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            From Idea to Applause —<br />
                            <span className="bg-gradient-to-r from-[#004D43] via-[#C2B280] to-[#004D43] bg-clip-text text-transparent font-black text-6xl md:text-8xl drop-shadow-lg">
                                The Sprout Way
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#333533] max-w-4xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            A clear, collaborative, and creative journey that transforms your vision into an unforgettable experience.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="bg-[#004D43] text-[#FAF9F6] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Explore The Process
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/experiences')}
                                className="bg-[#C2B280] text-[#333533] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                See Our Work
                                <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Process Overview Section - Removed for deep dive focus */}
            {/* This section was removed to focus on the detailed process below */}

            {/* Detailed Process Steps Section - Darker */}
            <section id="process" className="relative overflow-hidden w-full py-20 px-4 sm:px-6 lg:px-8">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#C2B280]/25 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Deep Dive Into Our Process
                        </motion.h2>
                        <motion.p
                            className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Each step is carefully designed to build trust, creativity, and exceptional results.
                        </motion.p>
                    </motion.div>

                    {/* Detailed Step Cards */}
                    <div className="space-y-24">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                data-step={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                    {/* Content Side */}
                                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2B280] to-[#004D43] flex items-center justify-center text-white font-bold text-2xl elegant-shadow">
                                                {step.id}
                                            </div>
                                            <div>
                                                <h3 className="text-4xl font-bold text-white drop-shadow-lg group-hover:text-[#C2B280] transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xl text-[#C2B280] font-medium drop-shadow-md">
                                                    {step.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                                            {step.description}
                                        </p>

                                        {/* Key Details */}
                                        <div className="space-y-3">
                                            {step.details.map((detail, detailIndex) => (
                                                <motion.div
                                                    key={detailIndex}
                                                    className="flex items-center gap-3 text-white/90"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#C2B280] flex-shrink-0" />
                                                    <span>{detail}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Testimonial */}
                                        <motion.div
                                            className="p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 border border-[#C2B280]/20 backdrop-blur-sm"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="flex items-start gap-4">
                                                <Quote className="w-8 h-8 text-[#C2B280] flex-shrink-0 mt-1" />
                                                <div>
                                                    <p className="text-white italic leading-relaxed mb-4 drop-shadow-md">
                                                        "{step.testimonial.text}"
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex text-[#C2B280]">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 fill-current" />
                                                            ))}
                                                        </div>
                                                        <div className="text-sm">
                                                            <span className="font-semibold text-white drop-shadow-sm">
                                                                {step.testimonial.author}
                                                            </span>
                                                            <span className="text-white/80 ml-1 drop-shadow-sm">
                                                                — {step.testimonial.role}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <motion.div
                                            className="relative group w-full h-[500px] overflow-hidden"
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        >
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Darkest */}
            <section className="text-[#FAF9F6] relative overflow-hidden w-full py-20">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#C2B280]/30 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#C2B280]/15 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold mb-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <span className="font-black text-6xl md:text-8xl text-[#C2B280] drop-shadow-2xl filter brightness-125">
                                Your Story
                            </span>
                            <br />
                            <span className="text-[#FAF9F6] font-bold">Starts Here</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF] mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Let's take your idea and turn it into an unforgettable event.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                    boxShadow: "0 20px 40px rgba(194, 178, 128, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="bg-gradient-to-r from-[#C2B280] to-[#b8a670] text-[#333533] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 elegant-shadow-hover transition-all duration-500 glass-reflection group min-w-[250px]"
                            >
                                <span>Plan My Experience</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                    backgroundColor: "rgba(194, 178, 128, 0.1)",
                                    borderColor: "#C2B280"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/experiences')}
                                className="bg-transparent border-2 border-[#C2B280]/60 text-[#C2B280] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-[#C2B280]/10 hover:text-[#C2B280] transition-all duration-500 backdrop-blur-sm group min-w-[250px]"
                            >
                                <span>See Our Experience Arenas</span>
                                <Compass className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center gap-4 text-[#F9E6CF] text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C2B280] rounded-full"></div>
                            <span>Proven process. Creative results. Unforgettable experiences.</span>
                            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#C2B280] rounded-full"></div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}