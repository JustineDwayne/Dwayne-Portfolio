import React from 'react';

export default function Icons({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      loading="lazy"
    />
  );
}
