import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Users,
    Zap,
    Star,
    Quote,
    CheckCircle,
    Lightbulb,
    Compass,
    Palette,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'
import { Header, Footer } from '../components'
import storyImage from '../assets/story-connection.jpg'
import value1Image from '../assets/creativity-purpose.jpg'
import value2Image from '../assets/connection-first.jpg'
import value3Image from '../assets/seamless-delivery.jpg'

export default function AboutUs() {
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const values = [
        {
            icon: <Lightbulb className="w-8 h-8 text-[#C2B280]" />,
            title: "Creativity with Purpose",
            subtitle: "Every event tells a story worth remembering",
            description: "We don't just plan events; we craft experiences that resonate long after the last participant goes home. Every detail serves the story.",
            features: [
                "Narrative-driven design approach",
                "Custom storytelling frameworks",
                "Purpose-built engagement mechanics",
                "Memorable brand integration"
            ],
            color: "from-purple-600 to-indigo-700",
            image: value1Image
        },
        {
            icon: <Users className="w-8 h-8 text-[#C2B280]" />,
            title: "Connection First",
            subtitle: "We design for relationships, not just activities",
            description: "The best events create lasting connections. We prioritize human interaction and shared experiences that bring people together.",
            features: [
                "Relationship-building activities",
                "Collaborative challenge design",
                "Community-focused experiences",
                "Social bonding opportunities"
            ],
            color: "from-green-600 to-emerald-700",
            image: value2Image
        },
        {
            icon: <Zap className="w-8 h-8 text-[#C2B280]" />,
            title: "Seamless Delivery",
            subtitle: "Stress-free for you, unforgettable for participants",
            description: "You should enjoy your event as much as your guests. We handle every detail so you can focus on what matters most.",
            features: [
                "Full-service event management",
                "Real-time support and monitoring",
                "Professional facilitation",
                "Complete logistics coordination"
            ],
            color: "from-blue-600 to-cyan-700",
            image: value3Image
        }
    ]

    const testimonials = [
        {
            text: "The Sprout transformed our annual retreat from a routine meeting into an adventure that our team still talks about months later. They didn't just plan an event; they created a story.",
            author: "Sarah Chen",
            role: "Director of People Operations",
            company: "TechFlow Industries",
            rating: 5
        },
        {
            text: "Working with The Sprout was seamless from start to finish. They understood our vision better than we did and delivered an experience that exceeded every expectation.",
            author: "Marcus Rodriguez",
            role: "Campus Activities Director",
            company: "State University",
            rating: 5
        },
        {
            text: "The level of creativity and attention to detail was incredible. Our clients were impressed, and we've already booked them for next year's conference.",
            author: "Jennifer Park",
            role: "Event Marketing Manager",
            company: "Global Summit Corp",
            rating: 5
        }
    ]

    const clientLogos = [
        { name: "TechFlow Industries", width: "120px" },
        { name: "State University", width: "140px" },
        { name: "Global Summit Corp", width: "100px" },
        { name: "InnovateX", width: "110px" },
        { name: "Creative Collective", width: "130px" },
        { name: "Future Works", width: "115px" },
        { name: "Digital Dynamics", width: "125px" },
        { name: "Peak Performance", width: "135px" }
    ]

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="w-full min-h-screen" style={{
            background: 'linear-gradient(to bottom, #FAF9F6 0%, #F9E6CF 8%, #F7E4CD 16%, #F5E1CB 24%, #F2DFC8 32%, #C2B280 40%, #B5A876 45%, #A89E6C 50%, #9B9462 55%, #8E8A58 60%, #81804E 65%, #004D43 70%, #004540 75%, #003D3C 80%, #003539 85%, #002D35 88%, #002531 91%, #001D2E 94%, #00152A 97%, #000 100%)'
        }}>
            {/* Header */}
            <Header isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />

            {/* Hero Section - Light Start */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
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
                            <span className="bg-gradient-to-r from-[#004D43] via-[#C2B280] to-[#004D43] bg-clip-text text-transparent font-black text-6xl md:text-8xl drop-shadow-lg">
                                The Story Behind
                            </span>
                            <br />
                            <span className="text-[#004D43] font-bold">The Sprout</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#333533] max-w-4xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            We believe every event should feel like a shared story, not just a scheduled date.
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
                                    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="bg-[#004D43] text-[#FAF9F6] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Discover Our Story
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/experiences')}
                                className="bg-[#C2B280] text-[#333533] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                See Our Work
                                <Compass className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Story & Mission Section - Medium Tone */}
            <section id="story" className="py-32 px-6 relative overflow-hidden w-full">
                {/* Enhanced background decorations */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F9E6CF]/40 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#004D43]/30 to-transparent rounded-full blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
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
                            Our Story & Mission
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#C2B280] to-[#004D43] mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Story Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                <p className="text-xl text-[#004D43] leading-relaxed">
                                    The Sprout began with a simple belief: every gathering has the potential to become a story worth telling. We transform ordinary events into extraordinary adventures through technology, creativity, and genuine human connection.
                                </p>

                                {/* Mission Statement - Single Line */}
                                <div className="bg-gradient-to-r from-[#C2B280]/20 to-[#004D43]/20 rounded-2xl p-8 border-l-4 border-[#C2B280]">
                                    <h3 className="text-lg font-semibold text-[#004D43] mb-4">Our Mission</h3>
                                    <p className="text-2xl font-bold text-[#004D43] italic leading-relaxed">
                                        "To turn every event into an unforgettable story that connects people and creates lasting memories."
                                    </p>
                                </div>
                            </div>

                            {/* Key Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <motion.div
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-3xl font-bold text-[#C2B280] mb-2">1000+</div>
                                    <div className="text-sm text-[#004D43]/70">People Connected</div>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-3xl font-bold text-[#C2B280] mb-2">50+</div>
                                    <div className="text-sm text-[#004D43]/70">Events Created</div>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="text-3xl font-bold text-[#C2B280] mb-2">100%</div>
                                    <div className="text-sm text-[#004D43]/70">Client Satisfaction</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Visual Elements */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative group">
                                <div className="h-96 rounded-3xl relative overflow-hidden elegant-shadow-hover glass-reflection">
                                    {/* Background Image */}
                                    <img
                                        src={storyImage}
                                        alt="Our Story"
                                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                    />
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#C2B280]/20 to-transparent rounded-3xl blur-xl"></div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F9E6CF]/15 to-transparent rounded-3xl blur-2xl"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Values Section - Darker */}
            <section className="py-32 px-6 relative overflow-hidden w-full">
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
                            className="text-4xl md:text-6xl font-bold text-[#004D43] drop-shadow-lg mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Mission & Values
                        </motion.h2>
                        <motion.p
                            className="text-xl text-[#004D43]/80 max-w-3xl mx-auto drop-shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            The principles that guide everything we do.
                        </motion.p>
                    </motion.div>

                    {/* Values Cards */}
                    <div className="space-y-24">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
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
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2B280] to-[#004D43] flex items-center justify-center elegant-shadow">
                                                {value.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-4xl font-bold text-[#F9E6CF] group-hover:text-[#C2B280] transition-colors duration-300">
                                                    {value.title}
                                                </h3>
                                                <p className="text-xl text-[#C2B280] font-medium">
                                                    {value.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-[#F9E6CF]/90 leading-relaxed">
                                            {value.description}
                                        </p>

                                        {/* Key Features */}
                                        <div className="space-y-3">
                                            {value.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={featureIndex}
                                                    className="flex items-center gap-3 text-[#F9E6CF]/80"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <CheckCircle className="w-5 h-5 text-[#C2B280] flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual Side */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <motion.div
                                            className="relative group"
                                            whileHover={{ scale: 1.02, rotateY: 5 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <div className={`h-96 rounded-3xl relative overflow-hidden elegant-shadow-hover glass-reflection`}>
                                                {/* Background Image */}
                                                <img
                                                    src={value.image}
                                                    alt={value.title}
                                                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                                />
                                            </div>

                                            {/* Decorative elements */}
                                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#C2B280]/20 to-transparent rounded-3xl blur-xl"></div>
                                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#F9E6CF]/15 to-transparent rounded-3xl blur-2xl"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof Section - Client Logos and Testimonials */}
            <section className="py-32 px-6 relative overflow-hidden w-full">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#C2B280]/30 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    {/* Client Logos */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <motion.h2
                            className="text-5xl md:text-7xl font-bold text-[#F9E6CF] mb-6 drop-shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <span className="bg-gradient-to-r from-[#F9E6CF] via-[#C2B280] to-[#F9E6CF] bg-clip-text text-transparent font-black">
                                Trusted By Leaders
                            </span>
                        </motion.h2>
                        <motion.div
                            className="w-32 h-1 bg-gradient-to-r from-transparent via-[#C2B280] to-transparent mx-auto mb-8 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 128 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF]/90 max-w-3xl mx-auto mb-16 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Organizations worldwide trust us to create unforgettable experiences that bring people together.
                        </motion.p>

                        {/* Client Logo Wall - Improved Design */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
                            {clientLogos.map((client, index) => (
                                <motion.div
                                    key={client.name}
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex items-center justify-center"
                                >
                                    <div className="w-full h-28 bg-gradient-to-br from-[#F9E6CF]/15 to-[#C2B280]/5 backdrop-blur-md rounded-2xl p-6 border border-[#C2B280]/30 hover:border-[#C2B280]/60 transition-all duration-500 elegant-shadow hover:elegant-shadow-hover group relative overflow-hidden">
                                        {/* Animated shine effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C2B280]/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

                                        <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                                            <span className="text-[#F9E6CF] font-bold text-base md:text-lg group-hover:text-[#C2B280] transition-colors duration-300 text-center leading-tight">
                                                {client.name}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                        >
                            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm border border-[#C2B280]/20">
                                <div className="text-5xl font-black text-[#C2B280] mb-2">500+</div>
                                <div className="text-[#F9E6CF]/80 text-sm uppercase tracking-wider">Events Delivered</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm border border-[#C2B280]/20">
                                <div className="text-5xl font-black text-[#C2B280] mb-2">50K+</div>
                                <div className="text-[#F9E6CF]/80 text-sm uppercase tracking-wider">Participants Engaged</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm border border-[#C2B280]/20">
                                <div className="text-5xl font-black text-[#C2B280] mb-2">98%</div>
                                <div className="text-[#F9E6CF]/80 text-sm uppercase tracking-wider">Client Satisfaction</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Testimonial Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm rounded-3xl p-12 border border-[#C2B280]/20 elegant-shadow-hover">
                            <div className="text-center mb-8">
                                <Quote className="w-12 h-12 text-[#C2B280] mx-auto mb-4" />
                                <motion.p
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-2xl md:text-3xl text-[#F9E6CF] italic leading-relaxed mb-8 max-w-4xl mx-auto"
                                >
                                    "{testimonials[currentTestimonial].text}"
                                </motion.p>

                                <div className="flex items-center justify-center gap-2 mb-6">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#C2B280] fill-current" />
                                    ))}
                                </div>

                                <motion.div
                                    key={`author-${currentTestimonial}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <div className="font-semibold text-xl text-[#F9E6CF] mb-2">
                                        {testimonials[currentTestimonial].author}
                                    </div>
                                    <div className="text-[#C2B280] font-medium">
                                        {testimonials[currentTestimonial].role}
                                    </div>
                                    <div className="text-[#F9E6CF]/70">
                                        {testimonials[currentTestimonial].company}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={previousTestimonial}
                                    className="w-12 h-12 rounded-full bg-[#C2B280]/20 hover:bg-[#C2B280]/40 backdrop-blur-sm border border-[#C2B280]/30 flex items-center justify-center transition-all duration-300 group"
                                >
                                    <ChevronLeft className="w-6 h-6 text-[#C2B280] group-hover:text-[#F9E6CF]" />
                                </button>

                                <div className="flex gap-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                                ? 'bg-[#C2B280] scale-125'
                                                : 'bg-[#C2B280]/40 hover:bg-[#C2B280]/60'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextTestimonial}
                                    className="w-12 h-12 rounded-full bg-[#C2B280]/20 hover:bg-[#C2B280]/40 backdrop-blur-sm border border-[#C2B280]/30 flex items-center justify-center transition-all duration-300 group"
                                >
                                    <ChevronRight className="w-6 h-6 text-[#C2B280] group-hover:text-[#F9E6CF]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section - Darkest */}
            <section className="py-32 px-6 text-[#FAF9F6] relative overflow-hidden w-full">
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
                                Let's Write the Next
                            </span>
                            <br />
                            <span className="text-[#FAF9F6] font-bold">Chapter Together</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF] mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Ready to transform your next event into an unforgettable story?
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
                                <span>Contact Us</span>
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
                                <span>Plan Your Experience</span>
                                <Palette className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
                            <span>Your story. Our expertise. Unforgettable results.</span>
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