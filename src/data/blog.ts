export type BlogTextSegment =
  | { type: 'text'; value: string }
  | { type: 'link'; text: string; href: string }

export type BlogBlock =
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'rich-paragraph'; segments: BlogTextSegment[] }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string }
  | { type: 'callout'; text: string }
  | { type: 'plainbox'; title: string; items: string[] }

export type BlogSection = {
  id: string
  title: string
  blocks: BlogBlock[]
}

export type BlogArticle = {
  slug: string
  title: string
  excerpt: string
  cardTitle?: string
  cardExcerpt?: string
  category: string
  categoryDetail: string
  readTime: string
  publishedDate: string
  modifiedDate: string
  featured?: boolean
  cardAccent: 'ember' | 'navy' | 'slate'
  cardGlyph: string
  seoDescription: string
  aiSummary: string
  intro: BlogBlock[]
  sections: BlogSection[]
}

export type BlogComingSoonCard = {
  category: string
  title: string
  excerpt: string
  cardAccent: 'slate'
  cardGlyph: string
}

const DEFENSIBLE_SPACE_ARTICLE: BlogArticle = {
  slug: 'why-every-home-in-a-wildfire-zone-needs-more-than-defensible-space',
  title: 'Why Every Home in a Wildfire Zone Needs More Than Defensible Space',
  excerpt:
    'Defensible space matters, but the weakest point of almost every home is its windows and doors. Learn why roll shutters add a critical layer of wildfire protection.',
  category: 'Wildfire Science',
  categoryDetail: 'Home hardening & defensible space',
  readTime: '6 min read',
  publishedDate: '2026-01-15',
  modifiedDate: '2026-08-01',
  cardAccent: 'slate',
  cardGlyph: '🛡️',
  seoDescription:
    'Expert insights on wildfire home hardening, defensible space limits, and why roll shutters are essential for protecting windows and doors in fire-prone areas.',
  aiSummary:
    'Editorial content on wildfire risk, the limits of defensible space alone, and how roll shutters protect critical building openings.',
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
  ],
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
  ],
}

const WINDOWS_DOORS_ARTICLE: BlogArticle = {
  slug: 'why-windows-and-doors-fail-first-in-a-wildfire',
  title: 'Why Windows and Doors Fail First in a Wildfire',
  excerpt:
    'When a wildfire reaches a home, the glass is almost always the first thing to go. Here\'s why embers and radiant heat beat ordinary windows, and the fire-tested way to shut them out.',
  category: 'Wildfire Science',
  categoryDetail: 'Ember & heat protection',
  readTime: '7 min read',
  publishedDate: '2026-02-01',
  modifiedDate: '2026-08-01',
  featured: true,
  cardAccent: 'ember',
  cardGlyph: '🔥',
  cardExcerpt:
    'Embers travel a mile ahead of the flames and radiant heat cracks glass from a distance. See how fire-tested shutters keep the fire outside.',
  seoDescription:
    'When a wildfire reaches a home, windows and doors fail first. Learn why embers and radiant heat beat ordinary glass—and how fire-tested roll shutters protect your openings.',
  aiSummary:
    'Guide explaining why windows and doors are the first failure point in wildfires, how embers and radiant heat breach openings, and how Inferno-Roll fire-tested shutters protect them.',
  intro: [
    {
      type: 'paragraph',
      text: "When a wildfire reaches a house, the house almost never loses at the walls. It loses at the windows and the doors. If you're going to harden one part of your home against fire, that's the part to start with. Here's why the glass gives out first, and what actually stops it.",
    },
  ],
  sections: [
    {
      id: 'embers-not-wall-of-flame',
      title: 'Embers do most of the damage, not the wall of flame',
      blocks: [
        {
          type: 'paragraph',
          text: 'Most people picture a wildfire as a solid wall of fire rolling through a neighborhood. That happens, but it\'s usually not what burns the house down. The bigger threat is embers. A wildfire throws off millions of them, and wind can carry a burning ember more than a mile ahead of the main fire. They pile up against the house, slip through any gap they can find, and land on anything that will catch. Long before the flame front shows up, those embers are already testing every opening you have.',
        },
        {
          type: 'paragraph',
          text: 'Your windows are where that test gets won or lost.',
        },
      ],
    },
    {
      id: 'how-window-lets-fire-in',
      title: 'How a window lets the fire in',
      blocks: [
        {
          type: 'paragraph',
          text: "Glass doesn't need to be touched by flame to fail. The radiant heat that runs out ahead of a wildfire is enough on its own to crack or shatter an ordinary window from a distance. Once the glass is gone, the opening is wide open. Embers and hot gas pour straight into the house, find the curtains, the couch, the flooring, and start a fire on the inside where nothing is there to fight it. A home that could have ridden out the fire outside is now burning from within.",
        },
        {
          type: 'paragraph',
          text: "Building codes only go so far here. California's wildfire construction rules (Chapter 7A) call for things like tempered glass on homes in the wildland-urban interface, and tempered glass does help. But the window and door openings are still the soft spot, and millions of older homes have no protection there at all.",
        },
      ],
    },
    {
      id: 'what-inferno-roll-shutter-does',
      title: 'What an Inferno-Roll shutter actually does',
      blocks: [
        {
          type: 'paragraph',
          text: 'An Inferno-Roll shutter rolls a solid metal barrier down over the glass, so the radiant heat, the embers, and even direct flame hit the shutter instead of the window. The glass stays intact. The opening stays sealed. The fire stays outside where it belongs.',
        },
        {
          type: 'paragraph',
          text: "The part you can't see is what makes the difference. The slats carry an intumescent fire coating, the same family of material used to protect the steel beams in commercial buildings. When it gets hot, that coating swells up and chars into an insulating layer that slows the heat from ever reaching the other side. That's the wildfire-science half of the name, and it's the reason these shutters hold up as long as they do.",
        },
      ],
    },
    {
      id: 'fire-test-results',
      title: "We put that to the test. Here's what happened.",
      blocks: [
        {
          type: 'paragraph',
          text: "This isn't a brochure claim. Inferno-Roll shutters were fire-tested at Western Fire Center, an independent lab, using California's wildfire exposure methods. In one test they faced a 150 kW gas burner putting direct flame right on the shutter. In another they faced sustained radiant heat, the kind that breaks windows ahead of a fire.",
        },
        {
          type: 'plainbox',
          title: 'What the fire test showed, in plain English',
          items: [
            'An uncoated shutter failed in about a minute. A plain, untreated slat burned through in just over 60 seconds under direct flame.',
            'The coated Inferno-Roll shutter held that same flame for 16 to nearly 20 minutes. That\'s roughly 16 times longer than the untreated one.',
            'It cleared the standard 10-minute wildfire flame test with minutes to spare. The lab actually ran the burner out past the standard, to 20 minutes, at our request.',
            'Against radiant heat, it went the full 30-minute test with no burn-through. Radiant heat is what shatters ordinary glass, and the shutter simply held.',
            'It kept the window side far cooler the whole time. That\'s the number that matters, because a cooler window is a window that doesn\'t crack and let embers in.',
          ],
        },
        {
          type: 'subheading',
          text: 'Why minutes matter',
        },
        {
          type: 'paragraph',
          text: "In a wildfire, minutes are the whole game. Crews can't be everywhere at once, and a fire front often passes a given house in well under 15 minutes. A window that buys you that much protected time is frequently the difference between a home that's still standing when the fire moves on and one that's a total loss.",
        },
      ],
    },
    {
      id: 'protection-when-not-home',
      title: "Protection that works when you're not home",
      blocks: [
        {
          type: 'paragraph',
          text: "Wildfires don't wait for you to get back from work, and an evacuation order usually means you can't be there at all. Inferno-Roll shutters are motorized, so they can close without you:",
        },
        {
          type: 'list',
          items: [
            'Temperature-sensor deployment: the shutters can lower on their own when they sense extreme heat, even with nobody home.',
            'Phone and remote control: close everything from your phone as you\'re driving away.',
            'Smart-home integration: they work with the app, Alexa, and Google setups you already use.',
          ],
        },
      ],
    },
    {
      id: 'one-system-more-than-one-job',
      title: 'One system, more than one job',
      blocks: [
        {
          type: 'paragraph',
          text: 'The same shutter that seals your home against embers earns its keep the rest of the year too:',
        },
        {
          type: 'list',
          items: [
            'Storm defense: a solid barrier against hurricane-force wind and flying debris.',
            'Security: a metal wall over the glass that makes a break-in a lot harder.',
            'Energy savings: exterior shade that cuts solar heat and lowers your cooling bill.',
          ],
        },
        {
          type: 'paragraph',
          text: "Fire is the reason most people call us. The other three are why they're glad they did.",
        },
      ],
    },
  ],
}

const INSURANCE_HARDENING_ARTICLE: BlogArticle = {
  slug: 'wildfire-insurance-home-hardening',
  title: 'Wildfire Insurance Is Getting Harder to Keep. Home Hardening Is How You Fight Back.',
  excerpt:
    'Non-renewals and rising premiums are hitting fire-country homeowners. Here\'s how hardening your windows and doors can help you stay insured.',
  category: 'Insurance',
  categoryDetail: 'Insurance & home hardening',
  readTime: '7 min read',
  publishedDate: '2026-08-01',
  modifiedDate: '2026-08-01',
  cardAccent: 'navy',
  cardGlyph: '🏠',
  cardTitle: 'Wildfire Insurance Is Getting Harder to Keep',
  cardExcerpt:
    'Non-renewals and rising premiums are hitting fire-country homeowners. Here\'s how hardening your windows and doors can help you stay insured.',
  seoDescription:
    'Wildfire insurance is getting harder to keep in California and the West. Learn how home hardening—especially fire-rated window and door protection—can help you stay insured.',
  aiSummary:
    'Article on rising wildfire insurance costs, non-renewals, and how home hardening credits—including fire-tested shutters on windows and doors—can help homeowners stay insurable.',
  intro: [
    {
      type: 'paragraph',
      text: "If you own a home in a wildfire-prone part of California or the West, you've probably felt the insurance squeeze already. Premiums keep climbing, some carriers have stopped writing new policies, and plenty of homeowners have opened a non-renewal letter for a house they'd insured for years. Here's the part that doesn't get said enough: the same work that makes your home safer in a fire is starting to be the thing that keeps it insurable.",
    },
  ],
  sections: [
    {
      id: 'why-market-got-tight',
      title: 'Why the market got so tight',
      blocks: [
        {
          type: 'paragraph',
          text: 'After a run of brutal wildfire and storm seasons, insurers paid out far more than they took in. Nationwide, billion-dollar weather disaster losses have more than doubled, from about $65 billion a year on average since 1980 to roughly $149 billion a year over the last five years. Faced with numbers like that, a lot of carriers pulled back from high-risk areas instead of keep losing money. That pushed more homeowners onto state plans of last resort, like California\'s FAIR Plan, which were never meant to be anybody\'s permanent coverage. The result is a market where a policy is harder to find and a lot more expensive than it used to be.',
        },
      ],
    },
    {
      id: 'hardening-counts',
      title: 'The shift: hardening now counts in your favor',
      blocks: [
        {
          type: 'paragraph',
          text: "Regulators are pushing the market back the other way, and they're doing it with dollars. Under California's Safer from Wildfires framework, the Department of Insurance now requires carriers to recognize wildfire mitigation and give homeowners credit for hardening their property. The FAIR Plan rolled out its own wildfire-hardening discounts, and its list of qualifying upgrades specifically names windows and shutters, with structural credits worth up to around 16% off the dwelling portion of the premium.",
        },
        {
          type: 'paragraph',
          text: "It's not just California. Florida law requires insurers to discount premiums for opening protection, and the My Safe Florida Home program hands out grants of up to $10,000 for hardening upgrades, with hurricane shutters an eligible category. Homeowners in that program report saving more than $900 a year on their premiums after upgrading. The pattern is the same everywhere: the steps that protect your home are turning into real money back.",
        },
      ],
    },
    {
      id: 'how-programs-look-at-home',
      title: 'How the programs look at your home',
      blocks: [
        {
          type: 'paragraph',
          text: "Most hardening frameworks look at your property in layers: the structure itself, the five feet right around it, and the wider defensible space. Windows, doors, and vents sit at the center of that first layer, because that's where embers actually get in. You can clear brush and upgrade your roof, but if a window cracks and lets embers inside, the rest of the work can't save the house.",
        },
        {
          type: 'callout',
          text: 'Home hardening is moving from a nice-to-have to the thing that keeps you covered. When you ask your insurer what earns a credit, fire-rated protection on your windows and doors is worth having on the list.',
        },
      ],
    },
    {
      id: 'where-inferno-roll-fits',
      title: 'Where Inferno-Roll fits',
      blocks: [
        {
          type: 'rich-paragraph',
          segments: [
            {
              type: 'text',
              value:
                'Hardening the openings is exactly what Inferno-Roll does. Your windows and doors are the most vulnerable part of the structure in a wildfire (we get into why in our ',
            },
            {
              type: 'link',
              text: 'ember-protection guide',
              href: '/blog/why-windows-and-doors-fail-first-in-a-wildfire',
            },
            {
              type: 'text',
              value: '), and a fire-tested shutter is one of the most direct ways to protect them.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: "And these are fire-tested for real. In independent testing at Western Fire Center, a coated Inferno-Roll shutter held back sustained wildfire radiant heat for a full 30-minute test with no burn-through, and stood up to direct open flame for 16 to nearly 20 minutes, versus about one minute for an uncoated control. That's the kind of documented, lab-tested performance that hardening programs and underwriters actually want to see.",
        },
      ],
    },
    {
      id: 'what-this-means-for-you',
      title: 'What this means for you',
      blocks: [
        {
          type: 'paragraph',
          text: 'Every insurer weighs things a little differently, and no single upgrade is a guaranteed discount, so the honest advice is to talk to your carrier or agent about which mitigations they credit and by how much. But the direction is not subtle anymore. Hardening your home is becoming the price of staying insured in fire country, and protecting your windows and doors is a core part of it.',
        },
        {
          type: 'paragraph',
          text: "There's also the house itself to think about. A hardened, fire-tested home is easier to insure, easier to sell, and far more likely to still be standing after a fire moves through. That's value you get whether or not a claim ever happens.",
        },
      ],
    },
  ],
}

export const BLOG_COMING_SOON_CARD: BlogComingSoonCard = {
  category: 'Storm & Security',
  title: 'Storm Defense & Home Security',
  excerpt:
    'The same shutter that blocks fire also stands up to hurricane-force wind, flying debris, and break-ins. Full guides are on the way.',
  cardAccent: 'slate',
  cardGlyph: '🌪️',
}

export const BLOG_ARTICLES: BlogArticle[] = [
  WINDOWS_DOORS_ARTICLE,
  INSURANCE_HARDENING_ARTICLE,
  DEFENSIBLE_SPACE_ARTICLE,
]

export const BLOG_ARTICLE = DEFENSIBLE_SPACE_ARTICLE

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug)
}

export function getFeaturedBlogArticle(): BlogArticle {
  return BLOG_ARTICLES.find((article) => article.featured) ?? BLOG_ARTICLES[0]
}

export function getBlogLatestGridArticles(): BlogArticle[] {
  return [WINDOWS_DOORS_ARTICLE, INSURANCE_HARDENING_ARTICLE]
}

export const BLOG_ARTICLE_SLUGS = BLOG_ARTICLES.map((article) => article.slug)
