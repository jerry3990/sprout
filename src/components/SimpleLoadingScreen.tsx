import { useState, useEffect, useRef } from 'react'
import './LoadingScreen.css'

interface LoadingScreenProps {
    onLoadComplete: () => void
}

export default function SimpleLoadingScreen({ onLoadComplete }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [userInteracted, setUserInteracted] = useState(false)
    const [showClickPrompt, setShowClickPrompt] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Handle user interaction for Chrome autoplay policy
    useEffect(() => {
        const handleInteraction = () => {
            setUserInteracted(true);
            if (videoRef.current && videoLoaded) {
                videoRef.current.play().catch(err => {
                    console.log('Play after interaction failed:', err);
                });
            }
        };

        // Only add listener if we haven't interacted yet
        if (!userInteracted) {
            document.addEventListener('click', handleInteraction, { once: true });
            document.addEventListener('touchstart', handleInteraction, { once: true });
        }

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };
    }, [videoLoaded, userInteracted]);

    // Simple video loading - Chrome compatible
    useEffect(() => {
        const video = videoRef.current;
        if (!video) {
            console.log('❌ No video ref found');
            return;
        }

        console.log('🎬 Setting up video loading...');
        let loadTimeout: NodeJS.Timeout;

        const handleCanPlay = () => {
            console.log('✅ Video ready to play');
            setVideoLoaded(true);
            clearTimeout(loadTimeout);

            // Try autoplay (will likely fail in Chrome without interaction)
            video.play().then(() => {
                console.log('🎬 Autoplay successful!');
                setShowClickPrompt(false);
            }).catch(err => {
                console.log('⚠️ Autoplay blocked (normal in Chrome):', err.name);
                setShowClickPrompt(true);
            });
        };

        const handleLoadedData = () => {
            console.log('📁 Video data loaded');
            setVideoLoaded(true);
            clearTimeout(loadTimeout);
        };

        const handleLoadedMetadata = () => {
            console.log('📊 Video metadata loaded');
            setVideoLoaded(true);
            clearTimeout(loadTimeout);
        };

        const handleError = (e: Event) => {
            console.error('❌ Video loading error:', e);
            console.error('Video error details:', video.error);
            clearTimeout(loadTimeout);
        };

        const handleLoadStart = () => {
            console.log('🔄 Video load started');
        };

        // Set a timeout for video loading
        loadTimeout = setTimeout(() => {
            console.log('⏰ Video load timeout - checking video state...');
            console.log(`Video readyState: ${video.readyState}`);
            console.log(`Video networkState: ${video.networkState}`);
            console.log(`Video currentSrc: ${video.currentSrc}`);
            if (video.readyState >= 1) { // Has metadata
                console.log('📊 Video has metadata, marking as loaded');
                setVideoLoaded(true);
            }
        }, 5000);

        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('error', handleError);
        video.addEventListener('loadstart', handleLoadStart);

        // Force load
        console.log('🔄 Calling video.load()...');
        video.load();

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('error', handleError);
            video.removeEventListener('loadstart', handleLoadStart);
            clearTimeout(loadTimeout);
        };
    }, []);

    // Simple progress
    useEffect(() => {
        const timer = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    // Wait a bit then complete
                    setTimeout(() => {
                        setIsLoading(false);
                        setTimeout(onLoadComplete, 500);
                    }, 3000); // Give more time to see video
                    return 100;
                }
                return prev + 8; // Slower progress
            });
        }, 300);

        return () => clearInterval(timer);
    }, [onLoadComplete]);

    const handleVideoClick = () => {
        if (videoRef.current) {
            setUserInteracted(true);
            setShowClickPrompt(false);
            videoRef.current.play().catch(err => console.log('Click play failed:', err));
        }
    };

    return (
        <div className={`loading-screen ${!isLoading ? 'loading-screen--exit' : ''}`}>
            <div className={`loading-content ${!isLoading ? 'loading-content--exit' : ''}`}>
                {/* Video Container */}
                <div className="video-container">
                    <div
                        className="video-wrapper"
                        style={{ opacity: videoLoaded ? 1 : 0.3 }}
                        onClick={handleVideoClick}
                    >
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="loading-video"
                            style={{
                                cursor: videoLoaded ? 'pointer' : 'default',
                                border: videoLoaded ? '2px solid green' : '2px solid red'
                            }}
                            onLoadStart={() => console.log('🎬 Video onLoadStart fired')}
                            onLoadedMetadata={() => console.log('📊 Video onLoadedMetadata fired')}
                            onLoadedData={() => console.log('📁 Video onLoadedData fired')}
                            onCanPlay={() => console.log('▶️ Video onCanPlay fired')}
                            onError={(e) => console.error('💥 Video onError fired:', e)}
                            onPlaying={() => console.log('🎭 Video onPlaying fired')}
                        >
                            <source src="/videos/Coming_Soon_Video_Creation.mp4" type="video/mp4" />
                        </video>

                        {!videoLoaded && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '14px',
                                textAlign: 'center',
                                background: 'rgba(0,0,0,0.7)',
                                padding: '10px',
                                borderRadius: '5px'
                            }}>
                                Loading Video...
                            </div>
                        )}

                        {videoLoaded && showClickPrompt && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                fontSize: '12px',
                                textAlign: 'center',
                                background: 'rgba(0,0,0,0.8)',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid white',
                                cursor: 'pointer'
                            }}>
                                👆 Click to play video
                            </div>
                        )}
                    </div>
                </div>

                {/* Loading Progress */}
                <div className="loading-progress">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${loadingProgress}%` }}
                        ></div>
                    </div>
                    <div className="loading-text">
                        Loading... {loadingProgress}%
                        <br />
                        <small>
                            Video: {videoLoaded ? 'Ready ✅' : 'Loading... ⏳'}
                            {showClickPrompt && ' (Click to play 👆)'}
                        </small>
                        <br />
                        <small style={{ fontSize: '10px', opacity: 0.7 }}>
                            Debug: Loaded={videoLoaded ? 'true' : 'false'}, Prompt={showClickPrompt ? 'true' : 'false'}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}