export default function Footer() {
    return (
        <footer className="bg-ivory/20 backdrop-blur-md border-t border-gold/30 py-16">
            <div className="max-content">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="src/assets/logo_m.png"
                                alt="The Sprout Logo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl font-bold text-white text-shadow">The Sprout</span>
                        </div>
                        <p className="text-white leading-relaxed text-shadow">
                            Growing unforgettable experiences through innovative event design and personalized service.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-shadow">Navigation</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-white hover:text-gold-300 transition-colors text-shadow">Home</a></li>
                            <li><a href="#experiences" className="text-white hover:text-gold-300 transition-colors text-shadow">Experience Moments</a></li>
                            <li><a href="#how-it-works" className="text-white hover:text-gold-300 transition-colors text-shadow">How It Works</a></li>
                            <li><a href="#about" className="text-white hover:text-gold-300 transition-colors text-shadow">About Us</a></li>
                            <li><a href="#contact" className="text-white hover:text-gold-300 transition-colors text-shadow">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-shadow">Contact</h4>
                        <ul className="space-y-2 text-white text-shadow">
                            <li>hello@thesprout.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>San Francisco, CA</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-shadow">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white hover:text-gold-300 transition-colors text-shadow">Privacy Policy</a></li>
                            <li><a href="#" className="text-white hover:text-gold-300 transition-colors text-shadow">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gold/40 mt-12 pt-8 text-center text-white text-shadow">
                    <p>&copy; 2024 The Sprout. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
} 