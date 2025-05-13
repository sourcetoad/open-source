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
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '1rem' }}>
      {images.map((image) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt || ''}
        />
      ))}
    </div>
  );
}
