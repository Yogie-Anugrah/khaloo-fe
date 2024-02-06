import { Button as AntdButton, ConfigProvider } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
interface CustomButtonProps extends ButtonProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'ghost-secondary'
    | 'ghost-secondary-black'
    | 'dark-primary-black'
    | 'dark-primary-white';
  fontSize?: number;
  fontWeight?: number;
}

export default function Button({
  variant,
  children,
  fontWeight = 500,
  fontSize = 16,
  ...restProps
}: CustomButtonProps) {
  const variantStyles = {
    primary: {
      backgroundColor: '#F9994C',
      backgroundColorActive: '#F9994C',
      backgroundColorHover: '#F9994C',
      borderColor: '#F9994C',
      borderColorHover: '#F9994C',
      borderColorActive: '#F9994C',
      textColor: '#FFFFFF',
      textColorHover: '#FFFFFF',
      textColorActive: '#FFFFFF',
    },
    secondary: {
      backgroundColor: '#AF2D6D',
      backgroundColorHover: '#AF2D6D',
      backgroundColorActive: '#AF2D6D',
      borderColor: '#AF2D6D',
      borderColorHover: '#AF2D6D',
      borderColorActive: '#AF2D6D',
      textColor: '#FFFFFF',
      textColorHover: '#FFFFFF',
      textColorActive: '#FFFFFF',
    },
    'ghost-secondary': {
      backgroundColor: '#F4F4F4',
      backgroundColorHover: '#F4F4F4',
      backgroundColorActive: '#F4F4F4',
      borderColor: '#AF2D6D',
      borderColorHover: '#AF2D6D',
      borderColorActive: '#AF2D6D',
      textColor: '#AF2D6D',
      textColorHover: '#AF2D6D',
      textColorActive: '#AF2D6D',
    },
    'ghost-secondary-black': {
      backgroundColor: '#F4F4F4',
      backgroundColorHover: '#F4F4F4',
      backgroundColorActive: '#F4F4F4',
      borderColor: '#AF2D6D',
      borderColorHover: '#AF2D6D',
      borderColorActive: '#AF2D6D',
      textColor: '#000000',
      textColorHover: '#000000',
      textColorActive: '#000000',
    },
    'dark-primary-black': {
      backgroundColor: '#F26A2A',
      backgroundColorActive: '#F26A2A',
      backgroundColorHover: '#F26A2A',
      borderColor: '#F26A2A',
      borderColorHover: '#F26A2A',
      borderColorActive: '#F26A2A',
      textColor: '#000000',
      textColorHover: '#000000',
      textColorActive: '#000000',
    },
    'dark-primary-white': {
      backgroundColor: '#F26A2A',
      backgroundColorActive: '#F26A2A',
      backgroundColorHover: '#F26A2A',
      borderColor: '#F26A2A',
      borderColorHover: '#F26A2A',
      borderColorActive: '#F26A2A',
      textColor: '#FFFFFF',
      textColorHover: '#FFFFFF',
      textColorActive: '#FFFFFF',
    },
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontWeight: fontWeight,
            defaultBg: variantStyles[variant].backgroundColor,
            defaultBorderColor: variantStyles[variant].borderColor,
            defaultColor: variantStyles[variant].textColor,
            defaultActiveColor: variantStyles[variant].textColorActive,
            defaultActiveBg: variantStyles[variant].backgroundColorActive,
            defaultActiveBorderColor: variantStyles[variant].borderColorActive,
            defaultHoverBg: variantStyles[variant].backgroundColorHover,
            defaultHoverColor: variantStyles[variant].textColorHover,
            defaultHoverBorderColor: variantStyles[variant].borderColorHover,
          },
        },
      }}
    >
      <AntdButton {...restProps}>{children}</AntdButton>
    </ConfigProvider>
  );
}
