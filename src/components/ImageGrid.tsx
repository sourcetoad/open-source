import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface ImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

interface ImageGridProps {
  images: ImageProps[];
  columns?: number;
  gap?: number;
  thumbnailSize?: number;
}

export default function ImageGrid({ images, columns = 2, gap = 8, thumbnailSize = 240 }: ImageGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = useCallback((index: number) => setOpenIndex(index), []);
  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : Math.min(images.length - 1, i + 1)));
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : Math.max(0, i - 1)));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openIndex, close, images.length]);

  const gridStyle = useMemo<React.CSSProperties>(() => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, ${thumbnailSize}px)`,
    gap: `${gap}px`,
    paddingBottom: `${gap}px`,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }), [columns, gap, thumbnailSize]);

  const thumbStyle: React.CSSProperties = {
    width: thumbnailSize,
    height: thumbnailSize,
    objectFit: 'cover',
    borderRadius: 6,
    cursor: 'pointer',
    boxShadow: '0 1px 3px rgba(0,0,0,0.15)'
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: 16,
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 8,
    boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    padding: '8px 10px',
    cursor: 'pointer',
    fontSize: 14,
  };

  return (
    <div>
      <div style={gridStyle}>
        {images.map((image, idx) => (
          <div key={image.src} style={{ width: thumbnailSize }}>
            <img
              src={image.src}
              alt={image.alt || ''}
              style={thumbStyle}
              onClick={() => open(idx)}
              loading="lazy"
            />
            {image.caption && (
              <div
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: '#666',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  wordBreak: 'break-word'
                }}
              >
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex]?.alt || 'Image preview'}
          style={overlayStyle}
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close image"
            style={closeButtonStyle}
          >
            Close
          </button>
          <img
            src={images[openIndex]?.src}
            alt={images[openIndex]?.alt || ''}
            style={imageStyle}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
