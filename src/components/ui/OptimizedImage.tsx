import type { CSSProperties, ImgHTMLAttributes } from 'react'

type OptimizedImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'loading' | 'decoding' | 'fetchPriority'
> & {
  /** Set false for above-the-fold / LCP images. Defaults to lazy. */
  lazy?: boolean
  priority?: boolean
  objectPosition?: CSSProperties['objectPosition']
}

export function OptimizedImage({
  lazy = true,
  priority = false,
  objectPosition,
  style,
  width,
  height,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      {...props}
      alt={alt ?? ''}
      width={width}
      height={height}
      loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : undefined}
      style={objectPosition ? { ...style, objectPosition } : style}
    />
  )
}
