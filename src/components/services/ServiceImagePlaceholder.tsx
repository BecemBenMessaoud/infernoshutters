type ServiceImagePlaceholderProps = {
  label: string
  src?: string
  alt?: string
  className?: string
  emoji?: string
}

export function ServiceImagePlaceholder({
  label,
  src,
  alt = '',
  className = '',
  emoji,
}: ServiceImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`bg-[#d9d9d9] ${className}`}>
        <img
          src={src}
          alt={alt || label}
          className="h-full w-full object-cover object-center"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex items-center justify-center bg-[#d9d9d9] px-3 text-center ${className}`}
    >
      <span className="text-sm font-medium text-gray-600">
        {emoji ? `${emoji} ` : ''}
        {label}
      </span>
    </div>
  )
}