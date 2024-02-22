import React from 'react';
import Card from 'antd/es/card';
import Meta from 'antd/es/card/Meta';
import YouTubePlayer, {YoutubeData} from './YoutubePlayer';

interface CardProps extends React.ComponentProps<typeof Card>,
  Omit<React.ComponentProps<typeof Meta>, 'title' | 'description' | 'image'> {
  // Add any additional props you need for your component
  video: YoutubeData;
}

const VideoCard: React.FC<CardProps> & {
    Meta: typeof Meta;
} = (props) => {
    const { video, ...restProps } = props;

    return (
        <Card
            {...restProps}
            cover={
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{marginTop: '30px'}}>
                        <YouTubePlayer videoId={video.youtubelink.split('v=')[1]} />
                    </div>
                </div>
            }
            style={{ backgroundColor: '#F4F4F4', borderColor: '#F9994C' }}
        >
            <VideoCard.Meta title={video.title} description={video.description} />
        </Card>
    );
}
VideoCard.Meta = Meta;

export default VideoCard;