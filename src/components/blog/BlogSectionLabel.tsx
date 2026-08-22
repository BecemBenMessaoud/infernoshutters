type BlogSectionLabelProps = {
  children: string
}

export function BlogSectionLabel({ children }: BlogSectionLabelProps) {
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <p className="shrink-0 text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-gray-500">
        {children}
      </p>
      <span className="h-px flex-1 bg-gray-200" aria-hidden />
    </div>
  )
}
