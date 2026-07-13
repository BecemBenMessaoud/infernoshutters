export type BlogBlock =
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'list'; items: string[] }

export type BlogSection = {
  id: string
  title: string
  blocks: BlogBlock[]
}

export const BLOG_ARTICLE = {
  title: 'Why Every Home in a Wildfire Zone Needs More Than Defensible Space',
  intro: [
    {
      type: 'paragraph',
      text: 'Wildfires are changing—and so should the way we protect our homes.',
      emphasis: true,
    },
    {
      type: 'paragraph',
      text: "For years, homeowners have been told the same advice: clear brush, trim trees, clean gutters, and create defensible space. While these steps are important, recent fires across California, Oregon, Colorado, and other western states have proven that they aren't always enough.",
    },
    {
      type: 'paragraph',
      text: 'The reality is simple: the weakest point of almost every home is its windows and doors.',
      emphasis: true,
    },
    {
      type: 'paragraph',
      text: 'When extreme heat or wind-driven embers breach these openings, a home can ignite from the inside—even if the surrounding landscaping survives.',
    },
    {
      type: 'paragraph',
      text: "That's why more homeowners are looking beyond traditional wildfire preparation.",
    },
  ] satisfies BlogBlock[],
  sections: [
    {
      id: 'hidden-threat-flying-embers',
      title: 'The Hidden Threat: Flying Embers',
      blocks: [
        {
          type: 'paragraph',
          text: 'Many people imagine wildfires as a wall of flames reaching their house.',
        },
        {
          type: 'paragraph',
          text: 'In reality, most homes are destroyed by wind-driven embers.',
          emphasis: true,
        },
        {
          type: 'paragraph',
          text: 'These burning embers can travel over a mile ahead of the main fire, landing on roofs, decks, vents, and windows. Once glass breaks from intense radiant heat or an ember finds a vulnerable opening, fire can quickly enter the structure.',
        },
        {
          type: 'paragraph',
          text: "The challenge isn't always stopping the fire outside.",
        },
        {
          type: 'paragraph',
          text: "It's preventing it from getting inside.",
        },
      ],
    },
    {
      id: 'new-layer-of-defense',
      title: 'A New Layer of Defense',
      blocks: [
        {
          type: 'paragraph',
          text: 'At Inferno Roll Shutters, we believe wildfire protection should be proactive—not reactive.',
          emphasis: true,
        },
        {
          type: 'paragraph',
          text: "Our exterior rolling shutters create a physical barrier over windows and doors, helping shield some of the home's most vulnerable openings from:",
        },
        {
          type: 'list',
          items: [
            'Wind-driven embers',
            'Radiant heat',
            'Flying debris',
            'High winds',
            'Broken glass',
          ],
        },
        {
          type: 'paragraph',
          text: 'When deployed before a wildfire threatens, they add another critical layer of protection that landscaping alone simply cannot provide.',
        },
      ],
    },
    {
      id: 'protection-beyond-wildfires',
      title: 'Protection Beyond Wildfires',
      blocks: [
        {
          type: 'paragraph',
          text: 'Wildfire protection is only part of the story.',
        },
        {
          type: 'paragraph',
          text: 'Homeowners also choose Inferno Roll Shutters because they provide year-round benefits, including:',
        },
        {
          type: 'list',
          items: [
            'Enhanced security against break-ins',
            'Hurricane and severe storm protection',
            'Increased privacy',
            'Reduced heat gain and lower cooling costs',
            'Better energy efficiency',
            'Noise reduction',
            'Total blackout capability for improved sleep',
          ],
        },
        {
          type: 'paragraph',
          text: 'Instead of investing in a product that only serves one purpose, homeowners gain protection every day of the year.',
        },
      ],
    },
    {
      id: 'designed-for-modern-homes',
      title: 'Designed for Modern Homes',
      blocks: [
        {
          type: 'paragraph',
          text: "Today's homeowners don't want bulky steel panels stored in the garage.",
        },
        {
          type: 'paragraph',
          text: 'Modern rolling shutters disappear into compact housings above the window and deploy in seconds using:',
        },
        {
          type: 'list',
          items: [
            'Wall switches',
            'Remote controls',
            'Smart home automation',
            'Mobile app integration (depending on system)',
          ],
        },
        {
          type: 'paragraph',
          text: "When not in use, they're virtually invisible.",
        },
        {
          type: 'paragraph',
          text: "When they're needed, they're ready immediately.",
        },
      ],
    },
    {
      id: 'future-of-wildfire-protection',
      title: 'The Future of Wildfire Protection',
      blocks: [
        {
          type: 'paragraph',
          text: 'Wildfires are becoming larger, faster, and more unpredictable.',
        },
        {
          type: 'paragraph',
          text: 'Insurance companies are raising premiums, limiting coverage, or leaving high-risk areas altogether. Homeowners are increasingly searching for additional ways to protect their property before disaster strikes.',
        },
        {
          type: 'paragraph',
          text: 'Preparation is no longer just about evacuation plans.',
        },
        {
          type: 'paragraph',
          text: "It's about giving your home every possible advantage.",
        },
        {
          type: 'paragraph',
          text: 'Inferno Roll Shutters were created with that mission in mind: providing homeowners with an innovative solution that helps protect what matters most.',
        },
      ],
    },
    {
      id: 'learn-more',
      title: 'Learn More',
      blocks: [
        {
          type: 'paragraph',
          text: 'If you live in a wildfire-prone area—or simply want to add another layer of protection to your home—our team can help you determine the right solution for your property.',
        },
        {
          type: 'paragraph',
          text: "Because protecting your home shouldn't start when the fire is already at your doorstep.",
          emphasis: true,
        },
      ],
    },
  ] satisfies BlogSection[],
} as const