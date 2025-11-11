# Video Setup for Loading Screen

Place your video file in this directory and update the LoadingScreen component to use it.

## Supported formats:

- MP4 (recommended)
- WebM
- MOV

## Recommended specifications:

- Duration: 3-10 seconds
- Resolution: 1080p or lower for web optimization
- File size: Under 5MB for fast loading

## Usage:

1. Add your video file to this directory (e.g., `loading-video.mp4`)
2. Update the video source in `src/components/LoadingScreen.tsx`
3. Uncomment the source tag and update the path

Example:

```jsx
<source src="/videos/your-video-name.mp4" type="video/mp4" />
```
