const fs = require('fs');
const React = require('react');
const extractStyle = require('@ant-design/static-style-extract').extractStyle;
const ConfigProvider = require('antd').ConfigProvider;

const outputPath = './public/antd.min.css';

const testGreenColor = '#008000';

const css = extractStyle(function (node) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      ConfigProvider,
      {
        theme: {
          token: {
            colorBgBase: testGreenColor,
            fontFamily: "'__Poppins_b809fa', '__Poppins_Fallback_b809fa', 'Poppins', 'sans-serif'",
          },
        },
      },
      node
    )
  );
});

fs.writeFileSync(outputPath, css);

fontFamily: "'__Poppins_b809fa', '__Poppins_Fallback_b809fa'"