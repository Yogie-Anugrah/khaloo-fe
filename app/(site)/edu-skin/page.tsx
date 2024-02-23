import Typography from '@/components/Typography';
import Link from 'next/link';
import { Col, Row, Button, Carousel } from 'antd';
import React from 'react';
import CustomCarousel from '@/components/Carousel';
import { AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import { API_URL } from '../../../libs/constant'; // Add the missing import statement
interface Video {
    id: string;
    title: string;
    viewCount: number;
    imageUrl: string;
}


interface VideoProps {
    thumbnailurl: string;
    title: string;
    viewscount: string | number;
    timeposted: string;
    youtubelink: string;
}

interface YoutubeAvatarProps {
    imageUrl: string;
    subscriberCount: number;
  }


const getArticleTop = async () => {
    const response = await fetch(`${API_URL}/articles/top`, { cache: "no-cache" });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

const getYoutubeVideos = async () => {
    const response = await fetch(`${API_URL}/youtube/videos`, { cache: "no-cache" });
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

const YoutubeAvatar: React.FC<YoutubeAvatarProps> = ({ imageUrl, subscriberCount }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
            <img src={imageUrl} alt="Avatar" style={{ borderRadius: '50%', margin: '0 auto', marginBottom: '10px', maxWidth: '200px', maxHeight: '200px' }} />
            <div style={{ fontSize: '22px', display: 'flex', alignItems: 'center' }}>
                <AiFillYoutube style={{ marginRight: '5px' }} />
                <span style={{ fontWeight: 'bold' }}>Khaloo Beauty</span>
            </div>
            <div style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                <span>{subscriberCount} subscribers</span>
            </div>
        </div>
    );
};

export default async function Articles() {

    const articlesList = await getArticleTop();
    const youtubeVideos = await getYoutubeVideos();
    
    return (
        <main className='flex min-h-screen flex-col gap-5 p-24'>
            <Row gutter={24} style={{ marginTop: '10px', marginBottom: '30px' }}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={1} style={{ textAlign: 'center', marginTop: '10px', marginBottom: '30px' }}>Explore Dunia Screencare Disini!</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={3} style={{ textAlign: 'left' }}>Fresh Video To Watch</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={4}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100%' }}>
                        <YoutubeAvatar imageUrl='https://yt3.googleusercontent.com/ytc/AIf8zZTUmfcTJBkhBS4gYnvaDAvSI-QYpyWyNSgBsfZcb_WNFrSuuR4oeNv6xVevC1jc=s176-c-k-c0x00ffffff-no-rj' subscriberCount={100} />
                    </div>
                </Col>
                <Col className='gutter-row'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100%' }}>
                    <RevealCarousel videos={youtubeVideos} />
                    </div>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={3} style={{ textAlign: 'left' }}>Nice Thing to read</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={24}>
                {articlesList.map((article: ArticleCardProps, index: number) => (
                    <Row gutter={24} style={{ marginBottom: '20px' }} key={index}>
                        <Col className='gutter-row' span={24}>
                            <ArticleCard
                                title={article.title}
                                main_image_url={article.main_image_url}
                                author={article.author}
                                content={article.content}
                                created_at={article.created_at}
                                articleid={article.articleid} description={null}                            />
                        </Col>
                    </Row>
                ))}
                </Col>
            </Row>
        </main>
    )
};

const VideoCard: React.FC<VideoProps> = ({ thumbnailurl, title, viewscount, timeposted, youtubelink }) => {
    return (
        <a href={youtubelink} className="w-48 p-2 link-black" style={{ textAlign: 'left', color: 'black' }}>
            <img src={thumbnailurl} alt={title} className="w-full rounded-lg" />
            <div className="text-left">
                <h4 className="text-sm font-bold" style={{ fontSize: '14px' }}>{title}</h4>
                <span className="text-xs" style={{ fontSize: '10px' }}>{viewscount} - {timeposted}</span>
            </div>
        </a>
    );
};

const RevealCarousel: React.FC<{ videos: VideoProps[] }> = ({ videos }) => {
    const currentIndex = 0;

    const renderCarouselItems = () => {
        const carouselItems: JSX.Element[] = [];
        const videosPerRow = 6;

        if (videos.length <= videosPerRow) {
            carouselItems.push(
                <div key={0} className={`carousel-item active`}>
                    <Row gutter={24}>
                        {videos.map((video, index) => (
                            <Col key={index} className='gutter-row' span={24 / videos.length}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <VideoCard {...video} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            );
        } else {
            for (let i = 0; i < videos.length; i += videosPerRow) {
                const videosChunk = videos.slice(i, i + videosPerRow);
                carouselItems.push(
                    <div key={i} className={`carousel-item ${i === currentIndex ? 'active' : ''}`}>
                        <Row gutter={24}>
                            {videosChunk.map((video, index) => (
                                <Col key={index} className='gutter-row' span={24 / videosPerRow}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <VideoCard {...video} />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                );
            }
        }
        return carouselItems;
    };

    return (
        <CustomCarousel infinite={false} enableArrow={true}>
            {renderCarouselItems()}
        </CustomCarousel>
    );
};

// const articleArray = [
//     {
//         articleid: 2,
//         title: '5 Langkah Skincare Malam yang Benar',
//         content: 'Skincare malam yang benar akan membuat kulitmu lebih sehat dan terlindungi dari berbagai masalah kulit. Yuk, simak langkah-langkahnya!',
//         author: 'Khaloo Beauty',
//         main_image_url: 'https://www.shutterstock.com/shutterstock/photos/659319469/display_1500/stock-photo-bottles-and-jars-with-natural-skincare-cosmetics-creams-and-oils-on-dark-background-plant-based-659319469.jpg',
//         related_articles: null,
//         created_at: '2024-02-23T08:39:11.951Z',
//         updated_at: '2024-02-23T08:39:11.951Z',
//         description: null
//       }
// ]

interface ArticleCardProps {
    title: string;
    main_image_url: string;
    author: string;
    description: string | null;
    created_at: Date;
    content: string;
    articleid: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({title, main_image_url, author, content, created_at, articleid}) => {
    return (
        <Row gutter={24}>
            <Col span={6}>
                <div style={{ maxWidth: '300px', maxHeight: '200px', overflow: 'hidden', borderRadius: '10px' }}>
                    <img src={main_image_url} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </Col>
            <Col span={18}>
                <Link href={`/articles/${articleid}`}>
                    <Typography.Title level={4}>{title}</Typography.Title>
                </Link>
                <Typography.Paragraph>{content}</Typography.Paragraph>
                <Typography.Text>{author}</Typography.Text> <br/>
                <Typography.Text>{`${new Date(created_at).getDate()} / ${new Date(created_at).getMonth} / ${new Date(created_at).getFullYear()}`}</Typography.Text>
            </Col>
        </Row>
    );
}
