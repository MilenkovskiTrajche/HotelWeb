import type { ImgHTMLAttributes } from "react";

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, "srcSet"> {
  src: string;
  medium?: string;
  large?: string;
  sizes?: string;
  fetchPriority?: "high" | "low" | "auto";
}

export function OptimizedImage({ src, medium, large, sizes="(max-width: 700px) 100vw, (max-width: 1100px) 70vw, 50vw", alt, loading="lazy", width, height, fetchPriority, ...props }: Props) {
  const srcSet = [
    medium && `${medium} 900w`,
    large && `${large} 1400w`
  ].filter(Boolean).join(", ");
  return (
    <img
      {...props}
      src={src}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      fetchPriority={fetchPriority}
    />
  );
}