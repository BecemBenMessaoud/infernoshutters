import { Link } from 'react-router-dom'
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

        if (block.type === 'subheading') {
          return (
            <h3
              key={`subheading-${index}`}
              className="mt-2 text-base font-semibold text-navy-800 sm:text-lg"
            >
              {block.text}
            </h3>
          )
        }

        if (block.type === 'callout') {
          return (
            <div
              key={`callout-${index}`}
              className="my-2 border-l-4 border-inferno-500 bg-inferno-50 px-4 py-3 text-sm leading-relaxed text-navy-900 sm:text-base"
            >
              {block.text}
            </div>
          )
        }

        if (block.type === 'plainbox') {
          return (
            <div
              key={`plainbox-${index}`}
              className="my-2 rounded-xl bg-navy-900 px-5 py-5 text-white sm:px-6"
            >
              <h3 className="mb-3 text-base font-semibold text-inferno-400 sm:text-lg">
                {block.title}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )
        }

        if (block.type === 'rich-paragraph') {
          return (
            <p
              key={`rich-paragraph-${index}`}
              className="text-sm leading-relaxed text-navy-900 sm:text-base"
            >
              {block.segments.map((segment, segmentIndex) => {
                if (segment.type === 'link') {
                  return (
                    <Link
                      key={`${segment.href}-${segmentIndex}`}
                      to={segment.href}
                      className="text-inferno-500 underline hover:text-inferno-600"
                    >
                      {segment.text}
                    </Link>
                  )
                }

                return <span key={`text-${segmentIndex}`}>{segment.value}</span>
              })}
            </p>
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
