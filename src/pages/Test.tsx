import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ChevronRight,
    Users,
    Building2,
    Presentation,
    MapPin,
    Target,
    Search,
    Palette,
    Truck,
    BarChart3,
    ArrowRight,
    Play
} from 'lucide-react'
import { Header, Footer } from '../components'

export default function Test() {
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isScrollingPaused, setIsScrollingPaused] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

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

    // Auto-scrolling experiences with improved smoothness
    useEffect(() => {
        if (!isScrollingPaused && scrollRef.current) {
            const scrollContainer = scrollRef.current
            let animationId: number
            let startTime: number | null = null
            const scrollSpeed = 0.5 // Reduced speed for smoother experience

            const smoothScroll = (timestamp: number) => {
                if (startTime === null) startTime = timestamp

                if (!isScrollingPaused && scrollContainer) {
                    const currentScroll = scrollContainer.scrollLeft
                    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth

                    // Calculate new scroll position
                    const newScrollLeft = currentScroll + scrollSpeed

                    // Reset to beginning when reaching the end (seamless loop)
                    if (newScrollLeft >= maxScroll * 0.66) { // Reset at 66% to ensure smooth loop
                        scrollContainer.scrollLeft = 0
                    } else {
                        scrollContainer.scrollLeft = newScrollLeft
                    }
                }

                animationId = requestAnimationFrame(smoothScroll)
            }

            animationId = requestAnimationFrame(smoothScroll)

            return () => {
                if (animationId) {
                    cancelAnimationFrame(animationId)
                }
            }
        }
    }, [isScrollingPaused])

    const experienceArenas = [
        {
            icon: <Users className="w-8 h-8 text-[#004D43]" />,
            title: "EDU Engagement",
            subtitle: "Colleges, Campus Life",
            description: "Engaging, high-energy events that build campus spirit, inspire students, and create lasting connections through memorable activities and experiences.",
            image: "/api/placeholder/400/300"
        },
        {
            icon: <Building2 className="w-8 h-8 text-[#004D43]" />,
            title: "HR & Employee Engagement",
            subtitle: "Workplace Culture",
            description: "Tailored events that strengthen workplace culture, boost morale, and connect employees to your company's mission in meaningful ways.",
            image: "/api/placeholder/400/300"
        },
        {
            icon: <Presentation className="w-8 h-8 text-[#004D43]" />,
            title: "Conferences & Trade Shows",
            subtitle: "Immersive Branding",
            description: "Immersive, branded environments that captivate audiences, encourage networking, and deliver measurable event impact.",
            image: "/api/placeholder/400/300"
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#004D43]" />,
            title: "Metropolitan Adventures",
            subtitle: "City-Based Experiences",
            description: "Curated city-based experiences blending exploration, culture, and fun perfect for teams, clients, and group bonding.",
            image: "/api/placeholder/400/300"
        },
        {
            icon: <Target className="w-8 h-8 text-[#004D43]" />,
            title: "Team Building",
            subtitle: "Dynamic Programs",
            description: "Dynamic, goal-driven programs that enhance collaboration, trust, and communication through shared challenges and successes.",
            image: "/api/placeholder/400/300"
        }
    ]

    const processSteps = [
        {
            icon: <Search className="w-8 h-8 text-[#C2B280]" />,
            number: "1",
            title: "Discover",
            description: "We begin with a deep dive into your objectives, audience insights, and brand identity through thorough consultation and research, setting the stage for a custom event strategy."
        },
        {
            icon: <Palette className="w-8 h-8 text-[#C2B280]" />,
            number: "2",
            title: "Design",
            description: "Our multidisciplinary team collaborates to develop a bespoke event concept that integrates cutting-edge technology, innovative design, and purposeful storytelling, creating a cohesive and engaging experience."
        },
        {
            icon: <Truck className="w-8 h-8 text-[#C2B280]" />,
            number: "3",
            title: "Deliver",
            description: "From meticulous planning to precise execution, we manage all aspects of production, logistics, and on-site coordination to ensure a seamless and stress-free event."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-[#C2B280]" />,
            number: "4",
            title: "Debrief",
            description: "Post-event, we conduct detailed analysis and gather feedback, providing actionable insights and performance metrics to inform and optimize your future initiatives."
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

                <div className="relative z-10 w-full text-center">
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
                            Sprouting Moments,<br />
                            <span className="bg-gradient-to-r from-[#004D43] via-[#C2B280] to-[#004D43] bg-clip-text text-transparent font-black text-6xl md:text-8xl drop-shadow-lg">
                                Harvesting Memories
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#333533] leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            Attentive, personalized service that ensures your event becomes a heartfelt story you'll tell again.
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
                                onClick={() => navigate('/experiences')}
                                className="bg-[#004D43] text-[#FAF9F6] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Explore Our Experiences
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#C2B280] text-[#333533] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Plan With Us
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Arenas Section - Medium Tone */}
            <section className="relative overflow-hidden w-full py-20">
                {/* Floating Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F9E6CF]/40 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#004D43]/30 to-transparent rounded-full blur-2xl"></div>
                </div>

                <div className="w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-[#004D43] mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Signature Experience Arenas
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#C2B280] to-[#004D43] mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.div>

                    {/* Enhanced Scrolling Container */}
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-hidden py-8"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
                            }}
                        >
                            {/* Repeat experiences array multiple times for infinite scroll */}
                            {[...experienceArenas, ...experienceArenas, ...experienceArenas].map((arena, index) => (
                                <motion.div
                                    key={`${arena.title}-${index}`}
                                    className="flex-none w-80 group cursor-pointer"
                                    onMouseEnter={() => {
                                        setIsScrollingPaused(true)
                                    }}
                                    onMouseLeave={() => {
                                        setIsScrollingPaused(false)
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -12,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    onClick={() => navigate('/experiences')}
                                >
                                    <div className="bg-[#FAF9F6] rounded-3xl overflow-hidden elegant-shadow group-hover:elegant-shadow-hover transition-all duration-500 glass-reflection h-full">
                                        <div className="relative h-48 bg-gradient-to-br from-[#F9E6CF] via-[#C2B280]/20 to-[#004D43]/10 flex items-center justify-center group-hover:from-[#C2B280]/30 group-hover:to-[#004D43]/20 transition-all duration-500">
                                            <motion.div
                                                className="text-6xl opacity-30 text-[#004D43] group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
                                                whileHover={{ rotate: 5 }}
                                            >
                                                {arena.icon}
                                            </motion.div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-black/20 transition-all duration-500"></div>

                                            {/* Floating particles effect */}
                                            <div className="absolute top-4 right-4 w-2 h-2 bg-[#C2B280] rounded-full animate-smooth-bounce opacity-60"></div>
                                            <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-[#004D43] rounded-full animate-smooth-bounce opacity-40" style={{ animationDelay: '0.5s' }}></div>
                                        </div>

                                        <div className="p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <motion.div
                                                    className="text-[#004D43] group-hover:text-[#C2B280] transition-colors duration-300"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                >
                                                    {arena.icon}
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#004D43] group-hover:text-[#C2B280] transition-colors duration-300">
                                                        {arena.title}
                                                    </h3>
                                                    <p className="text-sm text-[#C2B280] font-medium group-hover:text-[#004D43] transition-colors duration-300">
                                                        {arena.subtitle}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-[#333533] leading-relaxed mb-6 group-hover:text-[#004D43]/80 transition-colors duration-300">
                                                {arena.description}
                                            </p>

                                            <motion.div
                                                className="flex items-center text-[#004D43] font-semibold group-hover:text-[#C2B280] transition-colors duration-300"
                                                whileHover={{ x: 4 }}
                                            >
                                                Learn more
                                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why The Sprout Section - Darker Tone */}
            <section className="relative overflow-hidden w-full py-20 px-4 sm:px-6 lg:px-8">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#C2B280]/25 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C2B280]/20 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* NOTE: "Why The Sprout?" section has been commented out */}
                    {/* Hero Section - Competitive Advantage */}

                    {/* Process Steps Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.h3
                            className="text-3xl md:text-4xl font-bold text-[#F9E6CF] mb-4 drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Our Four-Step Process in Action
                        </motion.h3>
                        <motion.p
                            className="text-lg text-[#F9E6CF]/90"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            From initial concept to final execution, every step is carefully orchestrated to deliver exceptional results.
                        </motion.p>
                    </motion.div>

                    {/* Enhanced Process Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -8,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                                className="relative group w-full"
                            >
                                <div className="bg-gradient-to-br from-[#FAF9F6]/95 via-white to-[#F9E6CF]/80 rounded-3xl p-8 h-full elegant-shadow group-hover:elegant-shadow-hover transition-all duration-500 border border-[#C2B280]/30 group-hover:border-[#C2B280]/50 glass-reflection relative">
                                    {/* Enhanced Step Number - Properly Positioned */}
                                    <motion.div
                                        className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#C2B280] to-[#004D43] text-white rounded-2xl flex items-center justify-center font-bold text-2xl elegant-shadow group-hover:scale-110 transition-all duration-300 z-10"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        {step.number}
                                    </motion.div>

                                    {/* Centered Icon */}
                                    <motion.div
                                        className="mb-6 pt-8 flex justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2B280]/30 to-[#004D43]/20 flex items-center justify-center group-hover:from-[#C2B280]/40 group-hover:to-[#004D43]/30 transition-all duration-500">
                                            {step.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="space-y-4 text-center">
                                        <h4 className="text-2xl font-bold text-[#004D43] group-hover:text-[#003D33] transition-colors duration-300 drop-shadow-sm">
                                            {step.title}
                                        </h4>
                                        <p className="text-[#004D43]/80 leading-relaxed group-hover:text-[#003D33]/90 transition-colors duration-300 text-sm">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Connection Line */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#C2B280] to-[#004D43] transform -translate-y-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    )}

                                    {/* Decorative corner */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#C2B280]/20 to-transparent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced CTA Section - Darkest */}
            <section className="text-[#FAF9F6] relative overflow-hidden w-full py-20">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#C2B280]/30 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#C2B280]/15 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
                </div>

                <div className="w-full text-center relative z-10">
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
                                Your Next Story
                            </span>
                            <br />
                            <span className="text-[#FAF9F6] font-bold">Starts Here</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF] mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Let's turn your ideas into an adventure your guests will never forget.
                        </motion.p>

                        <motion.p
                            className="text-lg text-[#FAF9F6]/90 leading-relaxed mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            From campus-wide scavenger hunts to tech-infused team challenges and immersive city adventures,
                            we design events that spark connection, laughter, and lasting memories.
                            <span className="font-semibold text-[#C2B280]"> You bring the vision — we'll bring the story.</span>
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    y: -4,
                                    boxShadow: "0 20px 40px rgba(194, 178, 128, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/experiences')}
                                className="bg-gradient-to-r from-[#C2B280] to-[#b8a670] text-[#333533] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 elegant-shadow-hover transition-all duration-500 glass-reflection group min-w-[250px]"
                            >
                                <span>Explore Our Experiences</span>
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
                                className="bg-transparent border-2 border-[#C2B280]/60 text-[#C2B280] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-[#C2B280]/10 hover:text-[#C2B280] transition-all duration-500 backdrop-blur-sm group min-w-[200px]"
                            >
                                <span>Plan With Us</span>
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="flex items-center justify-center gap-4 text-[#F9E6CF] text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#C2B280] rounded-full"></div>
                            <span>Fast responses guaranteed. The first step to an unforgettable event is just one click away.</span>
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