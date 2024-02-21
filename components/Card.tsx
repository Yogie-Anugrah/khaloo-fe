import React from 'react';
import Card from 'antd/es/card';
import Meta from 'antd/es/card/Meta';

interface CardProps extends React.ComponentProps<typeof Card>,
  Omit<React.ComponentProps<typeof Meta>, 'title' | 'description' | 'image'> {
  // Add any additional props you need for your component
  title: string;
  description: string;
  imgSrc: string;
}

const CustomCard: React.FC<CardProps> & {
    Meta: typeof Meta;
} = (props) => {
    const { title, description, imgSrc, ...restProps } = props;

    return (
        <Card
            {...restProps}
            cover={<img alt={title} src={imgSrc} />}
        >
            <CustomCard.Meta title={title} description={description} />
        </Card>
    );
}
CustomCard.Meta = Meta;

export default CustomCard;