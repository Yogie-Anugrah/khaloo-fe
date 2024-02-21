import React from 'react'
import AntdTypography from 'antd/es/typography/Typography';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Link from 'antd/es/typography/Link';

interface TypographyProps extends React.ComponentProps<typeof AntdTypography>,
    Omit<React.ComponentProps<typeof Text>, 'ellipsis'>,
    Omit<React.ComponentProps<typeof Link>, 'ellipsis'>,
    Omit<React.ComponentProps<typeof Title>, 'ellipsis'>,
    Omit<React.ComponentProps<typeof Paragraph>, 'ellipsis'> {
    // Add any additional props you need for your component
}
const Typography: React.FC<TypographyProps> & {
    Text: typeof Text;
    Link: typeof Link;
    Title: typeof Title;
    Paragraph: typeof Paragraph;
} = (props) => {
    const { style, ...restProps } = props;
    const mergedStyle = { fontFamily: "'__Poppins_b809fa', '__Poppins_Fallback_b809fa'", ...style };

    return (
        <AntdTypography style={mergedStyle} {...restProps}>
            {/* Add your typography content here */}
        </AntdTypography>
    );
}

// make sure we could export Typography.Text, Typography.Link, Typography.Title, Typography.Paragraph
Typography.Text = Text;
Typography.Link = Link;
Typography.Title = Title;
Typography.Paragraph = Paragraph;

export default Typography;
