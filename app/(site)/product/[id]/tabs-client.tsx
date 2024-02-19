"use client";
import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import { ConfigProvider, Tabs, type TabsProps } from 'antd';



export default function TabClient({ description, ingredients, howToUse }: { description: string, ingredients: string, howToUse: string }) {
  const px2rem = px2remTransformer({
    rootValue: 9,
  });

  // Function to handle line breaks in description
  const renderDescription = (str: string | undefined) => {
    if (!str) {
      return null; // Return null or any other default content if the value is undefined
    }

    const paragraphs = str.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    return paragraphs;
  };



  const items: TabsProps['items'] = [
    {
      key: 'description',
      label: 'Description',
      children: (
        <div className='flex flex-col gap-4 break-all font-normal'>
          {renderDescription(description)}
        </div>
      ),
    },
    {
      key: 'ingredients',
      label: 'Ingredients',
      children: (
        <div className='flex flex-col gap-4 break-all font-normal'>
          {renderDescription(ingredients)}
        </div>
      ),
    },
    {
      key: 'how-to-use',
      label: 'How to Use',
      children: (
        <div className='flex flex-col gap-4 break-all font-normal'>
          {renderDescription(howToUse)}
        </div>
      ),
    },
  ];
  return (
    <StyleProvider transformers={[px2rem]}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              fontWeightStrong: 600,
              inkBarColor: '#AF2D6D',
              itemActiveColor: '#AF2D6D',
              itemHoverColor: '#AF2D6D',
              itemSelectedColor: '#AF2D6D',
            },
          },
        }}
      >
        {/* Tab Content */}

        <Tabs
          defaultActiveKey='description'
          centered
          items={items}
          tabBarGutter={64}
          className='text-3xl'
          tabBarStyle={{
            borderBottom: '10px',
            borderColor: '#AF2D6D',
            fontWeight: 600,
            width: '100%',
            justifyContent: 'space-around',
            flex: 1,
            display: 'flex',
          }}
        />
      </ConfigProvider>
    </StyleProvider>
  )
}
