import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    User,
    Building,
    Calendar,
    MessageSquare,
    Globe,
    Linkedin,
    Twitter,
    Instagram,
    Clock,
    Star,
    Target,
    Lightbulb,
    ChevronDown,
    Users
} from 'lucide-react'
import { Header, Footer } from '../components'
import contactImage from '../assets/contact-us.jpg'

export default function ContactUs() {
    const navigate = useNavigate()
    const [isNavExpanded, setIsNavExpanded] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        eventType: '',
        eventDate: '',
        participants: '',
        budget: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                organization: '',
                eventType: '',
                eventDate: '',
                participants: '',
                budget: '',
                message: ''
            })
        }, 3000)
    }

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    const eventTypes = [
        'Corporate Team Building',
        'Conference & Summit',
        'University Event',
        'Product Launch',
        'Networking Event',
        'Training Workshop',
        'Awards Ceremony',
        'Other'
    ]

    const budgetRanges = [
        'Under $5,000',
        '$5,000 - $15,000',
        '$15,000 - $30,000',
        '$30,000 - $50,000',
        '$50,000+',
        'Let\'s discuss'
    ]

    const faqs = [
        {
            question: "How far in advance should I book The Sprout?",
            answer: "We recommend booking 6-8 weeks in advance for most events. However, we've successfully executed events with as little as 2 weeks notice. The earlier you book, the more time we have to craft the perfect experience for you."
        },
        {
            question: "What's included in your event planning services?",
            answer: "Our full-service approach includes discovery workshops, creative concept development, venue coordination, technology integration, on-site management, professional facilitation, and post-event analytics. We handle every detail so you can focus on your participants."
        },
        {
            question: "Do you work with events outside your main arenas?",
            answer: "Absolutely! While we specialize in our five core arenas (Corporate Adventures, Academic Quests, Tech Innovation Labs, Creative Showcases, and Social Impact Missions), we love creating custom experiences for unique requirements."
        },
        {
            question: "What makes The Sprout different from other event planners?",
            answer: "We don't just plan events—we craft stories. Our unique blend of narrative design, technology integration, and experiential learning creates events that participants remember long after they end. Plus, our seamless delivery means zero stress for you."
        },
        {
            question: "Can you work within our budget?",
            answer: "We work with a variety of budgets and can scale our services accordingly. During our discovery call, we'll discuss your budget openly and design an experience that maximizes impact within your investment range."
        },
        {
            question: "Do you provide virtual or hybrid event options?",
            answer: "Yes! We've successfully adapted our experiential approach to virtual and hybrid formats. Our technology integration expertise ensures engaging experiences regardless of format, with the same storytelling and connection focus."
        }
    ]

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6 text-[#C2B280]" />,
            label: "Email Us",
            value: "hello@thesprout.events",
            link: "mailto:hello@thesprout.events"
        },
        {
            icon: <Phone className="w-6 h-6 text-[#C2B280]" />,
            label: "Call Us",
            value: "+1 (555) 123-GROW",
            link: "tel:+15551234769"
        },
        {
            icon: <MapPin className="w-6 h-6 text-[#C2B280]" />,
            label: "Visit Us",
            value: "New York, NY",
            link: "#"
        },
        {
            icon: <Clock className="w-6 h-6 text-[#C2B280]" />,
            label: "Office Hours",
            value: "Mon-Fri, 9AM-6PM EST",
            link: "#"
        }
    ]

    const socialLinks = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            link: "#",
            color: "hover:text-blue-400"
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            label: "Twitter",
            link: "#",
            color: "hover:text-blue-300"
        },
        {
            icon: <Instagram className="w-5 h-5" />,
            label: "Instagram",
            link: "#",
            color: "hover:text-pink-400"
        },
        {
            icon: <Globe className="w-5 h-5" />,
            label: "Website",
            link: "#",
            color: "hover:text-green-400"
        }
    ]

    return (
        <div className="w-full bg-gradient-to-b from-[#FAF9F6] via-[#F9E6CF] to-[#004D43] min-h-screen">
            {/* Header */}
            <Header isNavExpanded={isNavExpanded} setIsNavExpanded={setIsNavExpanded} />

            {/* Hero Section - Light Start */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-gradient-to-br from-[#FAF9F6]/95 via-[#F9E6CF]/90 to-[#C2B280]/70">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F6]/80 via-[#F9E6CF]/60 to-[#C2B280]/40"></div>
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
                                Let's Create
                            </span>
                            <br />
                            <span className="text-[#004D43] font-bold">Something Amazing</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-[#333533] max-w-4xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        >
                            Ready to transform your next event into an unforgettable experience? Let's start the conversation.
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
                                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="bg-[#004D43] text-[#FAF9F6] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Start Planning Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                                className="bg-[#C2B280] text-[#333533] px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group"
                            >
                                Get In Touch
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form Section - Medium Tone */}
            <section id="contact-form" className="py-32 px-6 bg-gradient-to-b from-[#C2B280]/60 via-[#C2B280]/80 to-[#004D43]/40 relative overflow-hidden w-full">
                {/* Enhanced background decorations */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#F9E6CF]/40 to-transparent rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-[#004D43]/30 to-transparent rounded-full blur-2xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C2B280]/10 to-[#004D43]/20"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-[#004D43] mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Tell Us About Your Vision
                        </motion.h2>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#C2B280] to-[#004D43] mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <motion.p
                            className="text-xl text-[#004D43]/80 max-w-3xl mx-auto mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            The more we know about your goals, the better we can craft your perfect experience.
                        </motion.p>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-gradient-to-br from-[#FAF9F6]/90 to-[#F9E6CF]/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 elegant-shadow-hover border border-[#C2B280]/20"
                    >
                        {!isSubmitted ? (
                            <div className="space-y-8">
                                {/* Personal Information */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <User className="w-4 h-4 text-[#C2B280]" />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300 placeholder-[#333533]/50"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-[#C2B280]" />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300 placeholder-[#333533]/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Organization & Event Type */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Building className="w-4 h-4 text-[#C2B280]" />
                                            Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300 placeholder-[#333533]/50"
                                            placeholder="Your company or organization"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Star className="w-4 h-4 text-[#C2B280]" />
                                            Event Type *
                                        </label>
                                        <select
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300"
                                        >
                                            <option value="">Select event type</option>
                                            {eventTypes.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[#C2B280]" />
                                            Event Date
                                        </label>
                                        <input
                                            type="date"
                                            name="eventDate"
                                            value={formData.eventDate}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Users className="w-4 h-4 text-[#C2B280]" />
                                            Participants
                                        </label>
                                        <input
                                            type="number"
                                            name="participants"
                                            value={formData.participants}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300 placeholder-[#333533]/50"
                                            placeholder="50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                            <Target className="w-4 h-4 text-[#C2B280]" />
                                            Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300"
                                        >
                                            <option value="">Select budget</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>
                                                    {range}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-[#004D43] font-semibold flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-[#C2B280]" />
                                        Tell Us About Your Vision *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-[#C2B280]/30 focus:border-[#C2B280] focus:outline-none bg-[#FAF9F6]/80 text-[#333533] transition-all duration-300 placeholder-[#333533]/50 resize-none"
                                        placeholder="Share your goals, expectations, and any specific ideas you have for your event. The more details, the better we can tailor our proposal to your needs."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-[#004D43] to-[#006356] text-[#FAF9F6] px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 elegant-shadow hover:elegant-shadow-hover transition-all duration-500 glass-reflection group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-[#FAF9F6]/30 border-t-[#FAF9F6] rounded-full animate-spin"></div>
                                            Sending Your Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            Send Your Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-[#C2B280] to-[#004D43] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-[#004D43] mb-4">Message Sent Successfully!</h3>
                                <p className="text-lg text-[#004D43]/80 max-w-md mx-auto">
                                    Thank you for reaching out. We'll get back to you within 24 hours to start planning your amazing experience.
                                </p>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </section>

            {/* Contact Information Section - Darker */}
            <section id="contact-info" className="py-32 px-6 bg-gradient-to-b from-[#004D43]/40 via-[#004D43]/60 to-[#004D43]/80 relative overflow-hidden w-full">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C2B280]/15 to-transparent"></div>
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
                            className="text-4xl md:text-6xl font-bold text-[#F9E6CF] mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.p
                            className="text-xl text-[#F9E6CF]/80 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Multiple ways to connect with our team and start your journey.
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Information Cards */}
                        <div className="space-y-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <motion.a
                                        href={info.link}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm border border-[#C2B280]/20 hover:border-[#C2B280]/40 transition-all duration-300 glass-reflection"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C2B280]/30 to-[#004D43]/20 flex items-center justify-center group-hover:from-[#C2B280]/40 group-hover:to-[#004D43]/30 transition-all duration-300">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#F9E6CF] group-hover:text-[#C2B280] transition-colors duration-300">
                                                {info.label}
                                            </h3>
                                            <p className="text-[#F9E6CF]/80 group-hover:text-[#F9E6CF] transition-colors duration-300">
                                                {info.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            ))}

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm border border-[#C2B280]/20"
                            >
                                <h3 className="text-xl font-bold text-[#F9E6CF] mb-4">Follow Our Journey</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.link}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`w-12 h-12 rounded-xl bg-[#C2B280]/20 hover:bg-[#C2B280]/40 backdrop-blur-sm border border-[#C2B280]/30 flex items-center justify-center text-[#C2B280] ${social.color} transition-all duration-300`}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual Element */}
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
                                        src={contactImage}
                                        alt="Contact Us"
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

            {/* FAQ Section */}
            <section className="py-32 px-6 bg-gradient-to-b from-[#004D43]/80 via-[#001a16] to-[#001a16] relative overflow-hidden w-full">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C2B280]/20 to-transparent"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#C2B280]/30 to-transparent rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#F9E6CF]/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-[#F9E6CF] mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p
                            className="text-xl text-[#F9E6CF]/80 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Quick answers to common questions about working with The Sprout.
                        </motion.p>
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-[#F9E6CF]/10 to-[#C2B280]/5 backdrop-blur-sm rounded-2xl border border-[#C2B280]/20 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#C2B280]/10 transition-all duration-300"
                                >
                                    <h3 className="text-lg font-semibold text-[#F9E6CF] pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0"
                                    >
                                        <ChevronDown className="w-6 h-6 text-[#C2B280]" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFAQ === index ? 'auto' : 0,
                                        opacity: openFAQ === index ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6">
                                        <p className="text-[#F9E6CF]/80 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Darkest */}
            <section className="py-32 px-6 bg-gradient-to-b from-[#001a16] to-[#000] text-[#FAF9F6] relative overflow-hidden w-full">
                {/* Enhanced Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#C2B280]/20 to-transparent"></div>
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
                                Ready to Begin?
                            </span>
                            <br />
                            <span className="text-[#FAF9F6] font-bold">Let's Talk</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl md:text-2xl text-[#F9E6CF] mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Your next unforgettable experience is just a conversation away.
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
                                onClick={() => {
                                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                                }}
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
                                onClick={() => navigate('/experiences')}
                                className="bg-transparent border-2 border-[#C2B280]/60 text-[#C2B280] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-[#C2B280]/10 hover:text-[#C2B280] transition-all duration-500 backdrop-blur-sm group min-w-[250px]"
                            >
                                <span>View Our Work</span>
                                <Lightbulb className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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
                            <span>Expert planning. Creative execution. Unforgettable results.</span>
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