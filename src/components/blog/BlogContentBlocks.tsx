import type { BlogBlock } from '../../data/blog'

export function BlogContentBlocks({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === 'list') {
          return (
            <ul
              key={`list-${index}`}
              className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-navy-900 sm:text-base"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <p
            key={`paragraph-${index}`}
            className={`text-sm leading-relaxed text-navy-900 sm:text-base ${
              block.emphasis ? 'font-semibold' : ''
            }`}
          >
            {block.text}
          </p>
        )
      })}
    </div>
  )
}