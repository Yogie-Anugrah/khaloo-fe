import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export interface YoutubeData {
    videoid: number;
    youtubelink: string;
    title: string;
    description: string;
    thumbnailurl: string;
    isactive: boolean;
}

const YouTubePlayer = ({ videoId }: { videoId: string }) => {
    // Set up event handlers
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  
    const onError: YouTubeProps['onError'] = (error) => {
      console.error('YouTube Player Error:', error);
    };
  
    return (
      <YouTube
        videoId={videoId}
        onReady={onPlayerReady}
        onError={onError}
      />
    );
  };
  
  export default YouTubePlayer;