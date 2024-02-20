import { Input as AntdInput, ConfigProvider, InputProps } from 'antd';

interface CustomInputProps extends InputProps {
  variants?: 'primary';
  fontSize?: number;
  fontWeight?: number;
}
export default function Input({
  variants = 'primary',
  fontWeight = 500,
  fontSize = 16,
  ...restProps
}: CustomInputProps) {
  const variantStyles = {
    primary: {
      backgroundColor: '#FFFFFF',
      borderColor: '#434242',
      backgroundColorActive: '#FFFFFF',
      backgroundColorHover: '#FFFFFF',
      borderColorHover: '#434242',
      borderColorActive: '#434242',
      textColorHover: '#FFFFFF',
      textColorActive: '#FFFFFF',
      textColorPlaceholder: '#434242',
    },
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBg: variantStyles[variants].backgroundColorActive,
            activeBorderColor: variantStyles[variants].borderColorActive,
            hoverBg: variantStyles[variants].backgroundColorHover,
            hoverBorderColor: variantStyles[variants].borderColorHover,
            colorTextPlaceholder: variantStyles[variants].textColorPlaceholder,
            colorBgContainer: variantStyles[variants].backgroundColor,
            colorBorder: variantStyles[variants].borderColor,
            paddingInlineLG: 20,
            paddingBlockLG: 10,
          },
        },
      }}
    >
      <AntdInput {...restProps} />
    </ConfigProvider>
  );
}

export const Group = AntdInput.Group;
export const TextArea = AntdInput.TextArea;
export const Search = AntdInput.Search;
