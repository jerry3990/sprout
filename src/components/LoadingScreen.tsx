import { useState, useEffect, useRef } from 'react'
import './LoadingScreen.css'

interface LoadingScreenProps {
    onLoadComplete: () => void
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [videoLoaded, setVideoLoaded] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Handle video loading with improved error handling and efficiency
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let videoLoadTimeout: NodeJS.Timeout;
        let isVideoLoading = true;

        const handleLoadedMetadata = () => {
            console.log('Video metadata loaded - treating as success');
            if (isVideoLoading) {
                setVideoLoaded(true);
                setVideoError(false);
                clearTimeout(videoLoadTimeout);

                // Don't try to play immediately - let the video load more
                console.log('Video metadata ready, waiting for more data...');
            }
        };

        const handleLoadedData = () => {
            console.log('Video data loaded successfully');
            if (isVideoLoading) {
                setVideoLoaded(true);
                setVideoError(false);
                clearTimeout(videoLoadTimeout);

                // Try to play the video with a delay
                setTimeout(() => {
                    if (video && video.paused) {
                        video.play().catch(err => {
                            console.log('Autoplay failed (this is normal):', err);
                        });
                    }
                }, 500);
            }
        };

        const handleCanPlay = () => {
            console.log('Video can play');
            if (isVideoLoading) {
                setVideoLoaded(true);
                setVideoError(false);
                clearTimeout(videoLoadTimeout);

                // Try to play now that it's ready
                setTimeout(() => {
                    if (video && video.paused) {
                        video.play().catch(err => {
                            console.log('Autoplay failed (this is normal):', err);
                        });
                    }
                }, 200);
            }
        };

        const handleCanPlayThrough = () => {
            console.log('Video can play through');
            if (isVideoLoading) {
                setVideoLoaded(true);
                setVideoError(false);
                clearTimeout(videoLoadTimeout);
            }
        };

        const handleError = (e: Event) => {
            console.error('Video loading error:', video.error, e);
            if (isVideoLoading) {
                setVideoError(true);
                setVideoLoaded(false);
                clearTimeout(videoLoadTimeout);
            }
        };

        const handleLoadStart = () => {
            console.log('Video loading started');
            if (isVideoLoading) {
                setVideoError(false);
            }
        };

        // Set a shorter timeout since we're seeing metadata load
        videoLoadTimeout = setTimeout(() => {
            console.warn('Video loading timeout - but since metadata loaded, showing video anyway');
            if (isVideoLoading) {
                // If we've seen any loading activity, consider it successful
                if (video.readyState >= 1) { // HAVE_METADATA
                    setVideoLoaded(true);
                    setVideoError(false);
                } else {
                    setVideoError(true);
                    setVideoLoaded(false);
                }
            }
        }, 3000);

        // Add event listeners
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('canplaythrough', handleCanPlayThrough);
        video.addEventListener('error', handleError);
        video.addEventListener('loadstart', handleLoadStart);

        // Force load the video
        try {
            video.load();
        } catch (e) {
            console.error('Error calling video.load():', e);
        }

        return () => {
            isVideoLoading = false;
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('loadeddata', handleLoadedData);
            video.removeEventListener('canplay', handleCanPlay);
            video.removeEventListener('canplaythrough', handleCanPlayThrough);
            video.removeEventListener('error', handleError);
            video.removeEventListener('loadstart', handleLoadStart);
            clearTimeout(videoLoadTimeout);
        };
    }, []);

    useEffect(() => {
        let isCurrentProcess = true;

        const runProgressBar = async () => {
            console.log('Starting loading process...')

            // Wait for DOM to be ready
            if (document.readyState !== 'complete') {
                await new Promise(resolve => {
                    if (document.readyState === 'complete') {
                        resolve(void 0)
                    } else {
                        window.addEventListener('load', () => resolve(void 0), { once: true })
                    }
                })
            }

            if (!isCurrentProcess) return;

            // Check for fonts loaded
            if ('fonts' in document) {
                await document.fonts.ready
                console.log('Fonts loaded')
            }

            if (!isCurrentProcess) return;

            // Progressive loading with reasonable timing
            const progressSteps = [20, 40, 60, 80];

            for (const step of progressSteps) {
                if (!isCurrentProcess) return;
                setLoadingProgress(step);
                await new Promise(resolve => setTimeout(resolve, 400)); // Slower progression
            }

            // Wait longer for video to properly load and display
            if (!videoLoaded && !videoError) {
                console.log('Waiting for video...');
                await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
            } else if (videoLoaded) {
                console.log('Video loaded, waiting to display...');
                await new Promise(resolve => setTimeout(resolve, 2500)); // Wait 2.5 seconds to show video
            }

            // Complete progress
            setLoadingProgress(100);

            // Final display time - much longer to actually see the video
            await new Promise(resolve => setTimeout(resolve, 4000)); // 4 seconds to see the video

            if (isCurrentProcess) {
                setIsLoading(false);
                setTimeout(onLoadComplete, 800); // Longer transition
            }
        }

        runProgressBar();

        return () => {
            isCurrentProcess = false;
        }
    }, [onLoadComplete, videoLoaded, videoError])

    // Remove the separate handler functions as they're now handled in the useEffect

    return (
        <div className={`loading-screen ${!isLoading ? 'loading-screen--exit' : ''}`}>
            <div className={`loading-content ${!isLoading ? 'loading-content--exit' : ''}`}>
                {/* Video Container */}
                <div className="video-container">
                    <div className="video-wrapper" style={{
                        opacity: videoLoaded && !videoError ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                        cursor: 'pointer'
                    }}
                        onClick={() => {
                            if (videoRef.current && videoLoaded) {
                                videoRef.current.play().catch(err => console.log('Manual play failed:', err));
                            }
                        }}
                    >
                        <video
                            ref={videoRef}
                            playsInline
                            muted
                            loop
                            preload="auto"
                            className="loading-video"
                            src="/videos/Coming_Soon_Video_Creation.mp4"
                            onLoadStart={() => console.log('Video onLoadStart fired')}
                            onLoadedMetadata={() => console.log('Video metadata loaded')}
                            onLoadedData={() => console.log('Video onLoadedData fired')}
                            onCanPlay={() => console.log('Video onCanPlay fired')}
                            onCanPlayThrough={() => console.log('Video onCanPlayThrough fired')}
                            onError={(e) => console.error('Video onError fired:', e)}
                            onPlaying={() => console.log('Video is playing!')}
                            onPause={() => console.log('Video paused')}
                        >
                            <source src="/videos/Coming_Soon_Video_Creation.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Simple loading indicator when video is loading */}
                    <div className={`simple-loading ${videoLoaded && !videoError ? 'hidden' : ''}`}>
                        <div className="loading-spinner"></div>
                        <h2>Welcome to The Sprout</h2>
                        {/* Debug info */}
                        <p style={{ fontSize: '12px', marginTop: '10px', color: 'rgba(255,255,255,0.7)' }}>
                            Video: {videoLoaded ? 'Loaded' : 'Loading'} | Error: {videoError ? 'Yes' : 'No'}
                        </p>
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
                    <div className="loading-text">Loading... {loadingProgress}%</div>
                </div>
            </div>
        </div>
    )
}
