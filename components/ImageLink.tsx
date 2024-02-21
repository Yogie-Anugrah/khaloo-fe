import React from 'react';

interface ImageLinkProps {
    // Add any additional props you need for your component
    imgSrc: string;
    product : {
        title: string;
        subTitle: string;
        action1Label: string;
        action2Label: string;
        action1OnClick: () => void;
        action2OnClick: () => void;
    }
}
const ImageLink = ({imgSrc, product} : ImageLinkProps) => {
    return (
        <div className="relative">
            <img
                src={imgSrc}
                alt="Image"
                className="w-full h-auto"
                style={{ filter: 'brightness(100%)', transition: 'filter 0.3s' }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(70%)'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(100%)'}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black opacity-50"/> {/* Overlay div */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-lg font-bold mb-2">{product.title}</h2>
                    <p className="text-white text-sm mb-4">{product.subTitle}</p>
                    <div className="flex space-x-2">
                        <button onClick={product.action1OnClick} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">Shop Now</button>
                        <button onClick={product.action2OnClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Shop Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageLink;
