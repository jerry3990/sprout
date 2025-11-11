import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoBlank from '../assets/logoblank.png'

interface HeaderProps {
    isNavExpanded: boolean
    setIsNavExpanded: (expanded: boolean) => void
}

export default function Header({ isNavExpanded }: HeaderProps) {
    const navigate = useNavigate()
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogoHovered, setIsLogoHovered] = useState(false)
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            if (width < 768) {
                setScreenSize('mobile')
            } else if (width < 1024) {
                setScreenSize('tablet')
            } else {
                setScreenSize('desktop')
            }
        }

        const handleScroll = () => {
            const scrolled = window.scrollY > 50
            setIsScrolled(scrolled)

            // Close mobile menu when scrolling
            if (scrolled && isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }

        // Initial check
        handleResize()

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [isMobileMenuOpen])

    // Responsive logo sizes
    const getLogoSize = () => {
        const baseSize = screenSize === 'desktop' ? 100 : screenSize === 'tablet' ? 80 : 60
        const hoverSize = screenSize === 'desktop' ? 80 : screenSize === 'tablet' ? 64 : 48
        return {
            normal: baseSize,
            hover: hoverSize,
            containerWidth: screenSize === 'desktop' ? 120 : screenSize === 'tablet' ? 100 : 80,
            containerHeight: baseSize,
            shift: screenSize === 'desktop' ? -15 : screenSize === 'tablet' ? -12 : -8
        }
    }

    const logoSizes = getLogoSize()

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-40 mx-4 mt-4 transition-all duration-300 rounded-2xl border border-white/30 shadow-xl
                ${isScrolled ? 'h-20' : (isNavExpanded ? 'h-18' : 'h-18')}
                
            `}

            transition={{ duration: 0.3 }}
            style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',

            }}
        >
            <div className="h-full flex items-center px-2 sm:px-4 lg:px-6">
                {/* Logo Container - Responsive sizing */}
                <motion.div
                    className="flex items-center justify-center cursor-pointer relative"
                    style={{
                        width: `${logoSizes.containerWidth}px`,
                        height: `${logoSizes.containerHeight}px`
                    }}
                    onHoverStart={() => setIsLogoHovered(true)}
                    onHoverEnd={() => setIsLogoHovered(false)}
                    onClick={() => navigate('/')}
                >
                    <motion.img
                        src={logoBlank}
                        className="object-contain"
                        alt="The Sprout Logo"
                        style={{
                            height: `${isLogoHovered ? logoSizes.hover : logoSizes.normal}px`,
                            width: `${isLogoHovered ? logoSizes.hover : logoSizes.normal}px`
                        }}
                        animate={{
                            x: isLogoHovered ? logoSizes.shift : 0
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                    <AnimatePresence>
                        {isLogoHovered && (
                            <motion.span
                                className={`font-bold text-gold-600 whitespace-nowrap absolute left-16 ml-2 top-1/2 transform -translate-y-1/2 z-50 text-shadow-light uppercase ${screenSize === 'desktop' ? 'text-2xl' : screenSize === 'tablet' ? 'text-xl' : 'text-lg'
                                    }`}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                The Sprout
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Spacer to push navigation to center */}
                <div className="flex-1"></div>

                {/* Desktop Navigation */}
                <motion.div
                    className="hidden lg:flex items-center space-x-6"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        scale: isScrolled ? 0.9 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={() => navigate('/')} className={`flex items-center space-x-2 px-3 py-2 rounded-xl border-2 border-transparent font-medium transition-all duration-300 ease-in-out hover:border-neutral-300/20 hover:shadow-lg cursor-pointer ${location.pathname === '/' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>Home</button>
                    <button onClick={() => navigate('/experiences')} className={`flex items-center space-x-2 px-3 py-2 rounded-xl border-2 border-transparent font-medium transition-all duration-300 ease-in-out hover:border-neutral-300/20 hover:shadow-lg cursor-pointer ${location.pathname === '/experiences' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>Experiences</button>
                    <button onClick={() => navigate('/how-it-works')} className={`flex items-center space-x-2 px-3 py-2 rounded-xl border-2 border-transparent font-medium transition-all duration-300 ease-in-out hover:border-neutral-300/20 hover:shadow-lg cursor-pointer ${location.pathname === '/how-it-works' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>How It Works</button>
                    <button onClick={() => navigate('/about')} className={`flex items-center space-x-2 px-3 py-2 rounded-xl border-2 border-transparent font-medium transition-all duration-300 ease-in-out hover:border-neutral-300/20 hover:shadow-lg cursor-pointer ${location.pathname === '/about' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>About Us</button>
                </motion.div>

                {/* Tablet Navigation - Compact version */}
                <motion.div
                    className="hidden md:flex lg:hidden items-center space-x-3"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        scale: isScrolled ? 0.95 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={() => navigate('/')} className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm ${location.pathname === '/' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>Home</button>
                    <button onClick={() => navigate('/experiences')} className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm ${location.pathname === '/experiences' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>Experiences</button>
                    <button onClick={() => navigate('/how-it-works')} className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm ${location.pathname === '/how-it-works' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>How It Works</button>
                    <button onClick={() => navigate('/about')} className={`px-2 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm ${location.pathname === '/about' ? 'font-semibold bg-gradient-to-l from-emerald-700 to-gold-600 text-transparent bg-clip-text' : 'text-charcoal-800 hover:text-emerald-700'} text-shadow-light`}>About</button>
                </motion.div>

                {/* Spacer to push CTA button to right */}
                <div className="flex-1"></div>

                {/* CTA Button */}
                <motion.div
                    className="hidden lg:block"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        scale: isScrolled ? 0.9 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={() => navigate('/contact')} className="flex bg-[#004D43]/90 rounded-xl p-4 text-[#C2B280] font-base hover:bg-[#004D43] hover:text-white hover:text-lg
                    transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl cursor-pointer">
                        Plan With Us
                    </button>
                </motion.div>

                {/* Tablet CTA Button - Smaller */}
                <motion.div
                    className="hidden md:block lg:hidden"
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        scale: isScrolled ? 0.95 : 1
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <button onClick={() => navigate('/contact')} className="flex bg-[#004D43]/90 rounded-lg px-3 py-2 text-[#C2B280] font-base hover:bg-[#004D43] hover:text-white text-sm
                    transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl cursor-pointer">
                        Plan
                    </button>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden text-charcoal-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 1,
                        scale: isScrolled ? 0.9 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 rounded-2xl"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.65) 100%)',
                            backdropFilter: 'blur(12px) saturate(160%)',
                            WebkitBackdropFilter: 'blur(12px) saturate(160%)',
                            boxShadow: `
                                0 8px 32px rgba(0, 0, 0, 0.08),
                                inset 0 1px 0 rgba(255, 255, 255, 0.6),
                                inset 0 -1px 0 rgba(255, 255, 255, 0.3),
                                0 1px 3px rgba(0, 0, 0, 0.05)
                            `,
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        <div className="space-y-4">
                            <button onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className={`block text-base font-medium transition-colors w-full text-left text-shadow-light ${location.pathname === '/' ? 'text-emerald-700 font-semibold' : 'text-charcoal-800 hover:text-emerald-700'}`}>Home</button>
                            <button onClick={() => { navigate('/experiences'); setIsMobileMenuOpen(false); }} className={`block text-base font-medium transition-colors w-full text-left text-shadow-light ${location.pathname === '/experiences' ? 'text-emerald-700 font-semibold' : 'text-charcoal-800 hover:text-emerald-700'}`}>Experiences</button>
                            <button onClick={() => { navigate('/how-it-works'); setIsMobileMenuOpen(false); }} className={`block text-base font-medium transition-colors w-full text-left text-shadow-light ${location.pathname === '/how-it-works' ? 'text-emerald-700 font-semibold' : 'text-charcoal-800 hover:text-emerald-700'}`}>How It Works</button>
                            <button onClick={() => { navigate('/about'); setIsMobileMenuOpen(false); }} className={`block text-base font-medium transition-colors w-full text-left text-shadow-light ${location.pathname === '/about' ? 'text-emerald-700 font-semibold' : 'text-charcoal-800 hover:text-emerald-700'}`}>About Us</button>
                            <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }} className="btn-primary w-full mt-4">
                                Plan With Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
} 