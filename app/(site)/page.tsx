"use client";
import CustomCarousel from '@/components/Carousel';
import ImageLink from '@/components/ImageLink';
import Typography from '@/components/Typography';
import VideoCard from '@/components/VideoCard';
import { YoutubeData } from '@/components/YoutubePlayer';
import { Col, Image, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import React from 'react';
import { API_URL } from '../../libs/constant';

const getData = async () => {
  const response = await fetch(`${API_URL}/home/banners`, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

const getHighlightData = async () => {

  const response = await fetch(`${API_URL}/products/highlight`, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

const getYoutubeData = async () => {
  const response = await fetch(`${API_URL}/youtube/videos/top`, { cache: "no-cache" });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const bannerData = await getData();
  const highlightData = await getHighlightData();
  const youtubeData = await getYoutubeData();

  const imageLinks: Array<{
    imgSrc: string;
    product: {
      id: string;
      title: string;
      subTitle: string;
      action1Label: string;
      action2Label: string;
      action1OnClick: React.ReactNode;
      action2OnClick: React.ReactNode;
    };
  }> = [];

  highlightData.forEach((highlight: any) => {
    imageLinks.push({
      imgSrc: highlight.prod_main_img,
      product: {
        id: highlight.prod_id,
        title: highlight.prod_name,
        subTitle: `Rp. ${highlight.prod_price.toLocaleString('id-ID')}`,
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: <Link href={`/product/${highlight.prod_id}`} style={{ color: 'white' }}>Shop Now</Link>,
        action2OnClick: <Link href={`/product/${highlight.prod_id}`} style={{ color: 'black' }}>Shop Detail</Link>,
      }
    });
  });

  const renderImageLinks = () => {
    const rows: JSX.Element[] = [];
    const maxItems = imageLinks.length;

    if (maxItems === 3) {
      rows.push(
        <Row gutter={24} key={0}>
          <Col className='gutter-row' span={12}>
            <ImageLink imgSrc={imageLinks[0].imgSrc} product={imageLinks[0].product} />
          </Col>
          <Col className='gutter-row' span={12}>
            <Row style={{ marginBottom: '20px' }} gutter={24}>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[1].imgSrc} product={imageLinks[1].product} />
              </Col>
              <Col className='gutter-row' span={12}>
                {/* <ImageLink imgSrc={imageLinks[2].imgSrc} product={imageLinks[2].product} /> */}
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }} gutter={24}>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[2].imgSrc} product={imageLinks[2].product} />
              </Col>
              <Col className='gutter-row' span={12}>
                {/* <ImageLink imgSrc={imageLinks[4].imgSrc} product={imageLinks[4].product} /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      );
    } else if (maxItems === 5) {
      rows.push(
        <Row gutter={24} key={0}>
          <Col className='gutter-row' span={12}>
            <ImageLink imgSrc={imageLinks[0].imgSrc} product={imageLinks[0].product} />
          </Col>
          <Col className='gutter-row' span={12}>
            <Row style={{ marginBottom: '20px' }} gutter={24}>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[1].imgSrc} product={imageLinks[1].product} />
              </Col>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[2].imgSrc} product={imageLinks[2].product} />
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }} gutter={24}>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[3].imgSrc} product={imageLinks[3].product} />
              </Col>
              <Col className='gutter-row' span={12}>
                <ImageLink imgSrc={imageLinks[4].imgSrc} product={imageLinks[4].product} />
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }

    return rows;
  };

  const renderYoutubeData = () => {
    if (Array.isArray(youtubeData)) {
      return youtubeData.map((video: YoutubeData, index: number) => (
        <VideoCard key={index} video={video} />
      ));
    }
    return null;
  };

  return (
    <main className='flex min-h-screen flex-col gap-5 p-24'>
      <Row gutter={24}>
        <Col span={24}>
          <CustomCarousel enableArrow={true}>
            {Array.isArray(bannerData) &&
              bannerData.map((banner: any, index: number) => (
                <div key={index}>
                  <Image src={banner.banner_image_url} alt={banner.campaign_name} width={'100%'} height={'200px'} />
                </div>
              ))}
          </CustomCarousel>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Typography.Title level={2}>Hightlight For You</Typography.Title>
        </Col>
      </Row>
      {renderImageLinks()}
      <Row gutter={24}>
        <Col span={24}>
          <Typography.Title level={2}>Our Stories</Typography.Title>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={4} />
        <Col span={16}>
          <CustomCarousel enableArrow={true}>{renderYoutubeData()}</CustomCarousel>
        </Col>
        <Col span={4} />
      </Row>
    </main>
  );
}
