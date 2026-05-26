"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallback?: string;
}

export default function SafeImage({
  src,
  alt,
  fallback = "/portfolio.jpg",
  className = "",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [errored, setErrored] = useState(false);

  return (
    <Image
      src={errored ? fallback : imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (!errored) {
          setImgSrc(fallback);
          setErrored(true);
        }
      }}
      {...props}
    />
  );
}