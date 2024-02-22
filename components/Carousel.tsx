"use client";
import { Carousel as AntdCarousel, Row, Col } from 'antd';
import Image from 'next/image';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import * as React from 'react'; // Import the 'React' module
import { CarouselRef, CarouselProps as AntdCarouselProps } from 'antd/es/carousel';

interface CarouselProps extends AntdCarouselProps {
  children: React.ReactNode;
  enableArrow?: boolean | undefined;  // Add a new prop to enable or disable the arrows in the carousel
}

export default function Carousel({ children, enableArrow }: CarouselProps) {
  const carouselRef = React.useRef<CarouselRef>(null); // Specify the correct type for 'carouselRef'

  const next = () => {
    if (carouselRef.current) { // Check if 'carouselRef' is defined
      carouselRef.current.next();
    }
  }

  const previous = () => {
    if (carouselRef.current) { // Check if 'carouselRef' is defined
      carouselRef.current.prev();
    }
  }

  return (
    <Row gutter={8} align={'middle'}>
      {enableArrow && (
        <Col span={1}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#F26A2A', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LeftOutlined style={{color: 'white'}} onClick={previous} />
          </div>
        </Col>
      )}
      <Col span={enableArrow ? 22 : 24}>
        <AntdCarousel ref={carouselRef}>
          {children}
        </AntdCarousel>
      </Col>
      {enableArrow && (
        <Col span={1}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#F26A2A', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RightOutlined style={{color: 'white'}} onClick={next} />
          </div>
        </Col>
      )}
    </Row>
  );
}
