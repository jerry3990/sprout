import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    Users,
    Building2,
    Presentation,
    MapPin,
    Target,
    ArrowRight,
    Star,
    Sparkles,
    Zap,
    Camera,
    Compass,
    ChevronRight
} from 'lucide-react'
import { Header, Footer } from '../components'
import arena1 from '../assets/edu-engagement.jpg'
import arena2 from '../assets/hr-engagement.jpg'
import arena3 from '../assets/conference.jpg'
import arena4 from '../assets/city-adventure.jpg'
import arena5 from '../assets/team-building.jpg'

export default function Experiences() {
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

    const experienceArenas = [
        {
            id: 1,
            icon: <Users className="w-12 h-12 text-[#004D43]" />,
            title: "EDU Engagement",
            subtitle: "Colleges & Campus Life",
            description: "Transform campus life into an adventure with interactive experiences that build school spirit and create lasting connections.",
            themes: [
                { name: "Campus Quest", desc: "School colors, mascot clues, dorm-to-library adventures" },
                { name: "Freshman to Legend", desc: "Playful rite-of-passage scavenger hunts into school traditions" },
                { name: "The Big Spirit Rally", desc: "Live leaderboards during campus events with pride competitions" },
                { name: "Society Showdown", desc: "Clubs & societies compete in specialty-themed challenges" }
            ],
            tone: "Energetic, youthful, competitive but inclusive",
            visuals: "Students laughing with maps/phones, campus landmark selfies, group high-fives",
            color: "from-purple-600 to-indigo-700",
            accentColor: "text-purple-400",
            image: arena1
        },
        {
            id: 2,
            icon: <Building2 className="w-12 h-12 text-[#004D43]" />,
            title: "HR & Employee Engagement",
            subtitle: "Workplace Culture",
            description: "Strengthen company culture and boost morale with experiences that connect employees to your mission in meaningful ways.",
            themes: [
                { name: "Mission Possible", desc: "Covert-style missions where employees unlock challenges" },
                { name: "Culture Quest", desc: "Challenges aligned with company values like innovation and teamwork" },
                { name: "The Recognition Run", desc: "Teams uncover peer shout-outs and leader praise" },
                { name: "Hybrid Harmony", desc: "Virtual and in-office challenges for blended teams" }
            ],
            tone: "Professional yet playful, reinforcing company identity",
            visuals: "Collaborative workspaces, branded swag in challenges, smiling mixed-age groups",
            color: "from-blue-600 to-cyan-700",
            accentColor: "text-blue-400",
            image: arena2
        },
        {
            id: 3,
            icon: <Presentation className="w-12 h-12 text-[#004D43]" />,
            title: "Conferences & Trade Shows",
            subtitle: "Immersive Branding",
            description: "Create immersive, branded environments that captivate audiences, encourage networking, and deliver measurable event impact.",
            themes: [
                { name: "The Connector Game", desc: "Points for meaningful conversations and booth visits" },
                { name: "Brand Explorer", desc: "Gamified map of exhibitors for full-floor exploration" },
                { name: "Keynote Clues", desc: "Challenges tied to main speakers or session topics" },
                { name: "The Networking Sprint", desc: "Timed events encouraging speed-meeting connections" }
            ],
            tone: "Sleek, tech-forward, high-energy networking",
            visuals: "Expo floor wide shots, people scanning QR codes, real-time leaderboard screens",
            color: "from-green-600 to-emerald-700",
            accentColor: "text-green-400",
            image: arena3
        },
        {
            id: 4,
            icon: <MapPin className="w-12 h-12 text-[#004D43]" />,
            title: "Metropolitan Adventures",
            subtitle: "City-Based Experiences",
            description: "Curated city-based experiences blending exploration, culture, and fun—perfect for teams, clients, and group bonding.",
            themes: [
                { name: "City Secrets", desc: "Uncover hidden gems and urban legends through challenges" },
                { name: "The Cultural Trail", desc: "Themed challenges around museums, art, food markets" },
                { name: "Rush Hour Race", desc: "Fast-paced, time-sensitive missions across iconic landmarks" },
                { name: "The Seasonal Hunt", desc: "Tied to local festivals or holidays" }
            ],
            tone: "Adventurous, cinematic, travel-meets-teamwork",
            visuals: "City skyline shots, street art clues, public transport hopping",
            color: "from-orange-600 to-red-700",
            accentColor: "text-orange-400",
            image: arena4
        },
        {
            id: 5,
            icon: <Target className="w-12 h-12 text-[#004D43]" />,
            title: "Team Building",
            subtitle: "Dynamic Programs",
            description: "Dynamic, goal-driven programs that enhance collaboration, trust, and communication through shared challenges and successes.",
            themes: [
                { name: "The Great Collaboration", desc: "Problem-solving across disciplines" },
                { name: "Survival Simulation", desc: "Scenario-based challenges requiring resource allocation" },
                { name: "Trust Trials", desc: "Fun-but-stretch challenges requiring interdependence" },
                { name: "Victory Quest", desc: "Final challenge culminating in shared celebratory reveal" }
            ],
            tone: "Encouraging, confidence-building, slightly competitive but highly bonding",
            visuals: "Rope courses, puzzle-solving tables, group cheers",
            color: "from-rose-600 to-pink-700",
            accentColor: "text-rose-400",
            image: arena5
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
                            <span className="bg-gradient-to-r from-[#004D43] via-[#C2B280] to-[#004D43] bg-clip-text text-transparent font-black text-6xl md:text-8xl drop-shadow-lg">
                                Five Arenas.
                            </span>
                            <br />
                            <span className="text-[#004D43] font-bold">Endless Adventures.</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#333533] max-w-5xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            Step into a world of interactive, story-driven experiences — designed to spark connection, inspire creativity, and leave your audience talking long after the final moment.
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
                                onClick={() => navigate('/contact')}
                                className="bg-[#004D43] text-[#FAF9F6] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Start Your Adventure
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document.getElementById('arenas')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="bg-[#C2B280] text-[#333533] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Explore Arenas
                                <Compass className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Arenas Section - Medium Tone */}
            <section id="arenas" className="relative overflow-hidden w-full py-20">
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
                            Experience Arenas
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#C2B280] to-[#004D43] mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                    </motion.div>

                    {/* Arena Cards */}
                    <div className="space-y-16">
                        {experienceArenas.map((arena, index) => (
                            <motion.div
                                key={arena.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className={`bg-gradient-to-r ${arena.color} rounded-3xl overflow-hidden elegant-shadow group-hover:elegant-shadow-hover transition-all duration-500 glass-reflection relative`}>
                                    <div className="grid lg:grid-cols-2 gap-0">
                                        {/* Content Side */}
                                        <div className="p-8 lg:p-12 bg-gradient-to-br from-[#FAF9F6]/95 to-[#F9E6CF]/90 relative">
                                            <div className="space-y-6">
                                                {/* Header */}
                                                <div className="flex items-center gap-4 mb-6">
                                                    <motion.div
                                                        className="p-4 rounded-2xl bg-gradient-to-br from-[#C2B280]/20 to-[#004D43]/10 group-hover:scale-110 transition-all duration-300"
                                                        whileHover={{ rotate: 5 }}
                                                    >
                                                        {arena.icon}
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-[#004D43] group-hover:text-[#C2B280] transition-colors duration-300">
                                                            {arena.title}
                                                        </h3>
                                                        <p className="text-lg text-[#C2B280] font-medium group-hover:text-[#004D43] transition-colors duration-300">
                                                            {arena.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-lg text-[#333533] leading-relaxed mb-8">
                                                    {arena.description}
                                                </p>

                                                {/* Theme Directions */}
                                                <div className="space-y-4">
                                                    <h4 className="text-xl font-bold text-[#004D43] mb-4 flex items-center gap-2">
                                                        <Sparkles className="w-5 h-5 text-[#C2B280]" />
                                                        Theme Directions
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                        {arena.themes.map((theme, themeIndex) => (
                                                            <motion.div
                                                                key={themeIndex}
                                                                className="p-4 rounded-xl bg-gradient-to-br from-white/80 to-[#F9E6CF]/30 border border-[#C2B280]/20 hover:border-[#C2B280]/40 transition-all duration-300"
                                                                whileHover={{ scale: 1.02, y: -2 }}
                                                            >
                                                                <h5 className="font-semibold text-[#004D43] mb-2 flex items-center gap-2">
                                                                    <Star className="w-4 h-4 text-[#C2B280]" />
                                                                    "{theme.name}"
                                                                </h5>
                                                                <p className="text-sm text-[#333533] leading-relaxed">
                                                                    {theme.desc}
                                                                </p>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Tone & Visuals */}
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#C2B280]/10 to-transparent border border-[#C2B280]/20">
                                                        <h5 className="font-semibold text-[#004D43] mb-2 flex items-center gap-2">
                                                            <Zap className="w-4 h-4 text-[#C2B280]" />
                                                            Tone
                                                        </h5>
                                                        <p className="text-sm text-[#333533] leading-relaxed">
                                                            {arena.tone}
                                                        </p>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#C2B280]/10 to-transparent border border-[#C2B280]/20">
                                                        <h5 className="font-semibold text-[#004D43] mb-2 flex items-center gap-2">
                                                            <Camera className="w-4 h-4 text-[#C2B280]" />
                                                            Signature Visuals
                                                        </h5>
                                                        <p className="text-sm text-[#333533] leading-relaxed">
                                                            {arena.visuals}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* CTA */}
                                                <motion.button
                                                    whileHover={{ scale: 1.02, x: 4 }}
                                                    onClick={() => navigate('/contact')}
                                                    className="inline-flex items-center gap-2 text-[#004D43] font-semibold group-hover:text-[#C2B280] transition-colors duration-300 mt-6"
                                                >
                                                    Explore This Arena
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Visual Side */}
                                        <div className="relative h-64 lg:h-auto min-h-[500px]">
                                            {/* Background Image */}
                                            <img
                                                src={arena.image}
                                                alt={arena.title}
                                                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Darker */}
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
                                Ready to Begin
                            </span>
                            <br />
                            <span className="text-[#FAF9F6] font-bold">Your Adventure?</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF] mb-8 max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Choose your arena and let's create an experience that will leave your audience talking, laughing, and connecting long after the final moment.
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
                                <span>Start Planning</span>
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
                                onClick={() => navigate('/')}
                                className="bg-transparent border-2 border-[#C2B280]/60 text-[#C2B280] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-[#C2B280]/10 hover:text-[#C2B280] transition-all duration-500 backdrop-blur-sm group min-w-[200px]"
                            >
                                <span>Back Home</span>
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
                            <span>Five arenas. Endless possibilities. Your adventure awaits.</span>
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