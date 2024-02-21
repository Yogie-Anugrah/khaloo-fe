"use client";
// import Typography from '@/components/Typography';
import Typography from '@/components/Typography';
import { Col, Row, Carousel, Card as AntdCard, Image } from 'antd';
import CustomCarousel from '@/components/Carousel';
import CustomCard from '@/components/Card';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ImageLink from '@/components/ImageLink';

export default function Home() {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  const [currentState, setCurrentState] = useState(0);
  const onChange = (currentSlide: number) => {
    setCurrentState(currentSlide)
    console.log(currentSlide)
  }

  const imageLinks = [
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
    {
      imgSrc: 'https://static5.depositphotos.com/1020804/422/i/950/depositphotos_4225403-stock-photo-jar-with-cosmetic-cream.jpg',
      product: {
        title: 'Product 1',
        subTitle: 'This is a product',
        action1Label: 'Shop Now',
        action2Label: 'Shop Detail',
        action1OnClick: () => console.log('Shop Now'),
        action2OnClick: () => console.log('Shop Detail')
      }
    },
  ];

  const renderImageLinks = () => {
    const rows: JSX.Element[] = [];
    const maxItemsPerRow = 3;
    const maxItems = Math.min(imageLinks.length, 6);

    for (let i = 0; i < Math.ceil(maxItems / maxItemsPerRow); i++) {
      const rowItems: JSX.Element[] = [];

      for (let j = i * maxItemsPerRow; j < Math.min((i + 1) * maxItemsPerRow, maxItems); j++) {
        const imageLink = imageLinks[j];
        rowItems.push(
          <Col span={8} key={j}>
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
            <div>
              <Typography.Title style={contentStyle} level={3}> 1 </Typography.Title>
            </div>
            <div>
              <Typography.Title style={contentStyle} level={3}> 2 </Typography.Title>
            </div>
            <div>
              <Typography.Title style={contentStyle} level={3}> 3 </Typography.Title>
            </div>
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
            <CustomCard title='Cara Skincare Sukses' bordered={true} description='Yuk Sukses Skincare!' imgSrc='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>
            <CustomCard title='Kenapa Youtube Gagal' bordered={true} description='Jangan Gagal Yutub' imgSrc='https://thumbs.dreamstime.com/z/close-up-logo-header-youtube-web-page-close-up-logo-header-youtube-web-page-youtube-297139593.jpg?w=992'/>
          </CustomCarousel>
        </Col>
        <Col span={4} />
      </Row>
    </main>
  );
}
