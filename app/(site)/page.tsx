"use client";
import Typography from '@/components/Typography';
import { Col, Row, Card as AntdCard, Image } from 'antd';
import CustomCarousel from '@/components/Carousel';
import CustomCard from '@/components/Card';
import ImageLink from '@/components/ImageLink';
import React from 'react';
import { API_URL } from '../../libs/constant';
import Link from 'antd/es/typography/Link';
import MarketPlaceCard, { MarketPlaceCardProps } from "@/components/market-place-card";
import { Modal } from "antd";


const getData = async () => {
  const response = await fetch(`${API_URL}/home/banners`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

const getHighlightData = async () => {
  const response = await fetch(`${API_URL}/products/highlight`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

const getArticleData = async () => {
  const response = await fetch(`${API_URL}/articles/top`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export default async function Home() {
  const bannerData = await getData();
  const highlightData = await getHighlightData();
  const articleData = await getArticleData();


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
    const maxItemsPerRow = 3;
    const maxItems = Math.min(imageLinks.length, 6);

    for (let i = 0; i < Math.ceil(maxItems / maxItemsPerRow); i++) {
      const rowItems: JSX.Element[] = [];
      const itemsInRow = Math.min(maxItemsPerRow, maxItems - i * maxItemsPerRow);

      for (let j = i * maxItemsPerRow; j < i * maxItemsPerRow + itemsInRow; j++) {
        const imageLink = imageLinks[j];
        const colSpan = maxItemsPerRow === 3 && itemsInRow === 1 ? 12 : 24 / itemsInRow;
        rowItems.push(
          <Col span={colSpan} key={j}>
            <ImageLink imgSrc={imageLink.imgSrc} product={imageLink.product} />
          </Col>
        );
      }

      rows.push(
        <Row gutter={24} key={i}>
          {rowItems}
        </Row>
      );
    }

    return rows;
  };
  return (
    <main className='flex min-h-screen flex-col gap-5 p-24'>
      <Row gutter={24}>
        <Col span={24}>
          <CustomCarousel enableArrow={true}>
            {
              Array.isArray(bannerData) && bannerData.map((banner: any, index: number) => {
                return (
                  <div key={index}>
                    <Image src={banner.banner_image_url} alt={banner.campaign_name} width={"100%"} height={"200px"} />
                  </div>
                );
              }) // Add closing parenthesis here
            }
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
          <CustomCarousel enableArrow={true}>
            {
              Array.isArray(articleData) && articleData.map((article: any, index: number) => {
                return (
                  <CustomCard
                    key={index}
                    title={article.title}
                    bordered={true}
                    description={article.content}
                    imgSrc={article.main_image_url}
                  />
                );
              }) // Add closing parenthesis here
            }
          </CustomCarousel>
        </Col>
        <Col span={4} />
      </Row>
      
    </main>
  );
}
