import React from 'react';

interface ImageProps {
  src: string;
  alt?: string;
}

interface ImageRowProps {
  images: ImageProps[];
}

export default function ImageRow({ images }: ImageRowProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
      {images.map((image, i) => (
        <img
          key={i}
          src={image.src}
          alt={image.alt || ''}
          style={{ width: `${100 / images.length - 2}%` }}
        />
      ))}
    </div>
  );
}
