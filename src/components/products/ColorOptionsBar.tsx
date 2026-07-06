const COLORS = [
  { name: 'White', hex: '#ffffff' },
  { name: 'Cream', hex: '#f3ead8' },
  { name: 'Beige', hex: '#d4b896' },
  { name: 'Sand', hex: '#c9a66b' },
  { name: 'Bronze', hex: '#8b6914' },
  { name: 'Black', hex: '#1f2937' },
  { name: 'Gray', hex: '#9ca3af' },
] as const

export function ColorOptionsBar() {
  return (
    <div className="mt-4 border-t border-amber-200/60 bg-gradient-to-r from-amber-100 via-amber-50 to-white px-4 py-3">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-navy-900">
        Color Options
      </p>
      <div className="flex flex-wrap items-end gap-3">
        {COLORS.map((color) => (
          <div key={color.name} className="flex flex-col items-center gap-1">
            <span
              className="h-5 w-5 rounded-sm border border-gray-300 shadow-sm"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-[9px] text-gray-600">{color.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[8px] leading-relaxed text-gray-500">
        * Standard colors available at no extra cost. ** Additional charge for custom colors.
      </p>
    </div>
  )
}
