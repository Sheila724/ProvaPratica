import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, fallback }) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        setImgSrc(fallback); // Substitui a imagem em caso de erro
    };

    return <img src={imgSrc} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
