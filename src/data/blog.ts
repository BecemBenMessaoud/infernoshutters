export type BlogTextSegment =
  | { type: 'text'; value: string }
  | { type: 'link'; text: string; href: string }

export type BlogCardItem = {
  icon: 'shield' | 'link' | 'anchor' | 'lock' | 'waves' | 'flame' | 'snowflake' | 'wind' | 'tree' | 'volume'
  title: string
  text: string
}

export type BlogFeatureItem = {
  title: string
  text: string
}

export type BlogSpecItem = {
  value: string
  label: string
}

export type BlogBenefitItem = {
  icon: BlogCardItem['icon']
  label: string
}

export type BlogBlock =
  | { type: 'paragraph'; text: string; emphasis?: boolean }
  | { type: 'rich-paragraph'; segments: BlogTextSegment[] }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string }
  | { type: 'callout'; text: string; label?: string }
  | { type: 'plainbox'; title: string; items: string[] }
  | { type: 'hero-banner'; eyebrow: string; headline: string; theme?: 'slats' | 'waves' }
  | { type: 'stat'; value: string; label: string }
  | { type: 'card-grid'; cards: BlogCardItem[] }
  | { type: 'feature-list'; items: BlogFeatureItem[] }
  | { type: 'pull-quote'; text: string }
  | { type: 'spec-grid'; items: BlogSpecItem[] }
  | { type: 'benefit-grid'; items: BlogBenefitItem[] }
  | { type: 'quote-box'; title: string; text: string }
  | {
      type: 'case-study'
      label: string
      title: string
      location: string
      paragraphs: Array<{ text: string; lead?: string }>
    }
  | {
      type: 'cta'
      title: string
      text: string
      primary: { label: string; href: string }
      secondary?: { label: string; href: string }
    }

export type BlogSection = {
  id: string
  title: string
  hideTitle?: boolean
  blocks: BlogBlock[]
}

export type BlogRelatedLink = {
  name: string
  path: string
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
  layout?: 'accordion' | 'prose'
  relatedLinks?: BlogRelatedLink[]
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

const SECURITY_BREAK_IN_ARTICLE: BlogArticle = {
  slug: 'what-actually-stops-a-break-in',
  title: 'What Actually Stops a Break-In',
  excerpt:
    'A standard window and a pry bar is a few seconds of delay. Extruded aluminum security shutters with end retention are what sits between someone wanting in and someone getting in.',
  category: 'Security Protection',
  categoryDetail: 'Home & business security',
  readTime: '6 min read',
  publishedDate: '2026-10-05',
  modifiedDate: '2026-10-05',
  layout: 'prose',
  cardAccent: 'slate',
  cardGlyph: '🔒',
  seoDescription:
    'Standard windows and doors fail in under a minute. Our extruded aluminum security shutters with end retention are sledgehammer-rated and built to stop intruders, protect inventory, and lower insurance claims.',
  aiSummary:
    'Explains why ordinary glass fails in a break-in, how extruded aluminum slats and end retention resist a sledgehammer and pry-out, where security shutters matter most, and how they also cover storm, fire, and energy savings.',
  relatedLinks: [
    { name: 'Our Shutter Products', path: '/products/overview' },
    { name: 'When the Pacific Comes for Your Home', path: '/blog/when-the-pacific-comes-for-your-home' },
    {
      name: 'Where Wildfires Actually Get In',
      path: '/blog/why-windows-and-doors-fail-first-in-a-wildfire',
    },
    { name: 'Frequently Asked Questions', path: '/faq' },
    { name: 'Request a Free Quote', path: '/quote' },
    { name: 'All Blog Articles', path: '/blog' },
  ],
  intro: [
    {
      type: 'hero-banner',
      eyebrow: 'Hardened for Humans',
      headline:
        'Sledgehammer-rated extruded aluminum shutters with end retention. Built to not give in.',
    },
    {
      type: 'paragraph',
      text: 'The question is not whether a determined person could try your window. The question is what happens when they do. A standard window and a pry bar is not a security system — it is a few seconds of delay. Our extruded aluminum security shutters are what sits between someone wanting in and someone actually getting in.',
    },
    {
      type: 'stat',
      value: 'Under 60 sec',
      label:
        'Average time an experienced intruder needs to get through a standard window or sliding glass door. A locked door barely counts.',
    },
  ],
  sections: [
    {
      id: 'easy-target',
      title: 'Why standard windows and doors are the easy target',
      blocks: [
        {
          type: 'paragraph',
          text: 'Residential and commercial glass is designed for weather and visibility, not for impact. A hardware store sledgehammer, a tire iron, even a landscaping rock will put a hole through standard window or sliding-door glass in one swing. Deadbolts and alarm stickers are deterrents — not barriers. If someone decides they want in, glass is the obvious way.',
        },
        {
          type: 'paragraph',
          text: 'The real security question is not "does my door lock," it is "what happens in the ten seconds after someone starts hitting my window." For most homes and most storefronts, the answer is: they are inside.',
        },
      ],
    },
    {
      id: 'hard-to-breach',
      title: 'What makes a security shutter actually hard to breach',
      blocks: [
        {
          type: 'paragraph',
          text: 'There are two specifications that separate a real security shutter from a decorative one. Everything else is marketing.',
        },
        {
          type: 'card-grid',
          cards: [
            {
              icon: 'shield',
              title: 'Extruded aluminum slats',
              text: 'Solid, heavy-gauge aluminum pushed through a die as a single piece — not thin sheet rolled into a hollow shell with foam filler. Sledgehammer-rated.',
            },
            {
              icon: 'link',
              title: 'End retention system',
              text: 'Each slat is mechanically locked into the side tracks. You cannot peel the shutter open or pry a slat out of the guide.',
            },
            {
              icon: 'anchor',
              title: 'Reinforced side tracks',
              text: 'Heavy-gauge extruded tracks anchored into the structure, not screwed into drywall. The whole system is only as strong as the weakest connection.',
            },
          ],
        },
      ],
    },
    {
      id: 'sledgehammer-test',
      title: 'The sledgehammer test, in plain English',
      blocks: [
        {
          type: 'paragraph',
          text: 'A thin, foam-filled roll shutter — the kind most residential shutter companies sell for sun and privacy — will dent, buckle, and eventually break open under a sledgehammer. A couple of good swings and a determined person is through.',
        },
        {
          type: 'paragraph',
          text: 'A proper extruded aluminum security shutter does not. The slats are solid. The hammer bounces off, leaves a scuff, and the slat keeps its shape. Even if the attacker gets through the shutter slats, the end-retention system means they cannot peel the curtain back from the window — the slats stay physically locked into the guide rails on both sides. There is no "pop one corner and lift" shortcut.',
        },
        {
          type: 'callout',
          label: 'The honest version',
          text: 'Given enough time, tools, and lack of witnesses, a determined professional can get through anything. Our security shutters are not a bank vault. What they are is enough of a barrier that no opportunistic break-in is getting through, and no smash-and-grab is going to risk the time it takes to try.',
        },
      ],
    },
    {
      id: 'end-retention',
      title: 'End retention — why it matters more than most people realize',
      blocks: [
        {
          type: 'paragraph',
          text: 'Here is the quiet failure mode of cheap roll shutters: an attacker does not have to break through the slats at all. They can pry one slat sideways and pull the whole curtain out of the track. Once the curtain is out of the guide, the shutter folds away like a window shade, and the glass behind it is unprotected.',
        },
        {
          type: 'paragraph',
          text: 'End retention stops that. Every slat has a mechanical lock — a steel pin, interlocking end cap, or captive feature — that physically holds it inside the side track. You cannot pull it out. You cannot push it out. To breach the shutter, you have to actually destroy the slats themselves, which, with extruded aluminum, you are not going to do with a crowbar on a Tuesday night.',
        },
      ],
    },
    {
      id: 'where-it-matters',
      title: 'Where this matters most',
      blocks: [
        {
          type: 'feature-list',
          items: [
            {
              title: 'Retail storefronts',
              text: 'Downtown jewelry, electronics, dispensaries, boutiques — any business that stocks high-value, portable inventory. Close the shutters at close, open them at open. Smash-and-grabs do not get past the window.',
            },
            {
              title: 'Vacation and second homes',
              text: 'Homes that sit empty for weeks or months are the top target for professional burglars. Shutters down the whole time you are away = no visible glass to break, no entry path to try.',
            },
            {
              title: 'Garages, workshops, and storage',
              text: 'Tools, bikes, equipment, inventory — the stuff thieves know is in a garage. A security shutter over the opening makes the whole space a hardened enclosure.',
            },
            {
              title: 'Ground-floor apartments and condos',
              text: 'First-floor units are statistically far more likely to be targeted. A security shutter on the sliding patio door takes the easiest entry point off the table.',
            },
            {
              title: 'Home offices and gun safes',
              text: 'Private offices with equipment, medical practices, firearms stored legally at home — any room where what is inside justifies more than a locked door.',
            },
            {
              title: 'Short-term rentals',
              text: "Vacation rental owners deal with a different threat profile — unknown guests, inconsistent occupancy, periods of vacancy between bookings. Shutters give you remote control over the building's security.",
            },
          ],
        },
      ],
    },
    {
      id: 'insurance',
      title: 'The insurance side nobody talks about',
      blocks: [
        {
          type: 'paragraph',
          text: 'A single break-in claim raises your premium. Multiple claims can get your policy non-renewed, especially on commercial property. The security shutter is not just about the first incident — it is about preventing the pattern that insurance companies start pulling coverage over.',
        },
        {
          type: 'paragraph',
          text: 'And when you do have to file a claim, insurance covers the replacement cost of what was taken. It does not give back the heirloom. It does not give back the data. It does not give back the week you lost dealing with the fallout. Prevention is dramatically cheaper than any payout, and the shutters pay for themselves the first time they stop something.',
        },
        {
          type: 'pull-quote',
          text: '"Insurance pays for what you lost. It does not give it back."',
        },
      ],
    },
    {
      id: 'once-you-have-them',
      title: 'The thing you only understand once you have them',
      blocks: [
        {
          type: 'paragraph',
          text: 'Our installed customers tell us the same thing: the real benefit is not any single feature. It is that they stop thinking about it. Vacation without wondering if the house is OK. Close the store at night without the mental checklist of what is on display. Sleep through the sound of someone trying a car door in the alley. The shutters are closed. Nothing is getting through. That is the actual product — peace of mind that is not based on hoping, it is based on knowing.',
        },
        {
          type: 'spec-grid',
          items: [
            { value: 'Extruded', label: 'Solid aluminum slat, not foam-filled' },
            { value: 'Locked', label: 'End retention — slats cannot be pulled from tracks' },
            { value: 'Seconds', label: 'To deploy before leaving, closing up, or going to bed' },
          ],
        },
      ],
    },
    {
      id: 'one-shutter-many-jobs',
      title: 'One shutter, many jobs',
      blocks: [
        {
          type: 'paragraph',
          text: 'Security is one of several things these shutters do. Few products on the market protect a property against this many threats in a single system:',
        },
        {
          type: 'benefit-grid',
          items: [
            { icon: 'lock', label: 'Intruder & break-in protection' },
            { icon: 'waves', label: 'Storm & wave protection' },
            { icon: 'flame', label: 'Fire & ember defense' },
            { icon: 'snowflake', label: 'Heating & cooling savings' },
          ],
        },
        {
          type: 'paragraph',
          text: 'One install, four jobs. That is the Inferno-Roll package.',
        },
        {
          type: 'quote-box',
          title: 'Want a preliminary quote?',
          text: 'Send us photos of your home or business along with your window and door sizes, and we can give you preliminary pricing for both shutters and installation. Security applications typically call for our extruded aluminum product line with end retention — we will spec it to the opening and the use case. Start the process by sending us those details, and give us a call.',
        },
      ],
    },
    {
      id: 'peace-of-mind',
      title: 'Peace of mind that is not based on hoping',
      hideTitle: true,
      blocks: [
        {
          type: 'cta',
          title: 'Peace of mind that is not based on hoping',
          text: 'Inferno-Roll makes custom security, fire, and storm shutters, designed and manufactured in California and professionally installed. Book a free property assessment and we will walk your site with you — openings, threats, use case, the works.',
          primary: { label: 'Request a Free Estimate', href: '/quote' },
          secondary: { label: '(888) 999-8809', href: 'tel:8889998809' },
        },
      ],
    },
  ],
}

const PACIFIC_STORM_ARTICLE: BlogArticle = {
  slug: 'when-the-pacific-comes-for-your-home',
  title: 'When the Pacific Comes for Your Home',
  excerpt:
    'King tides, atmospheric rivers, and winter storms are hitting West Coast properties harder. Hurricane-rated shutters stop a 2x4 at 120 MPH and use stainless hardware for coastal salt.',
  category: 'Storm & Impact Protection',
  categoryDetail: 'West Coast storm protection',
  readTime: '6 min read',
  publishedDate: '2026-10-05',
  modifiedDate: '2026-10-05',
  layout: 'prose',
  cardAccent: 'slate',
  cardGlyph: '🌊',
  seoDescription:
    'King tides, atmospheric rivers, winter storms. Inferno-Roll shutters are hurricane-rated, 2x4-at-120MPH debris tested, and built with stainless hardware for coastal salt. See how we protect Zelda\'s Restaurant on the beach in Capitola.',
  aiSummary:
    'Explains why West Coast storms threaten windows and doors, the 2x4-at-120-MPH debris test, the Zelda\'s Restaurant Capitola installation, stainless coastal hardware, and why hurricane ratings apply to Pacific storms.',
  relatedLinks: [
    { name: 'Fire-Resistant Roller Shutters', path: '/products/fire-resistant' },
    {
      name: 'Where Wildfires Actually Get In',
      path: '/blog/why-windows-and-doors-fail-first-in-a-wildfire',
    },
    { name: 'What Actually Stops a Break-In', path: '/blog/what-actually-stops-a-break-in' },
    { name: 'Frequently Asked Questions', path: '/faq' },
    { name: 'Request a Free Quote', path: '/quote' },
    { name: 'All Blog Articles', path: '/blog' },
  ],
  intro: [
    {
      type: 'hero-banner',
      theme: 'waves',
      eyebrow: 'Built for the Coast',
      headline:
        'Hurricane-rated shutters, built for Pacific storm surge, flying debris, and salt corrosion.',
    },
    {
      type: 'paragraph',
      text: 'If you live on the West Coast, the Pacific is not the quiet ocean it used to be. King tides are higher. Atmospheric rivers are stronger. Winter storms are stacking up back-to-back and throwing waves at coastal properties that used to sit a safe distance from the water. If you are between the Pacific and your front door, you need something built for that fight — and we have a restaurant sitting on the sand in Capitola to prove it.',
    },
    {
      type: 'stat',
      value: '120 MPH',
      label:
        'The speed we rate our shutters to stop a flying 2x4 — the toughest debris-impact standard in the shutter industry.',
    },
  ],
  sections: [
    {
      id: 'different-animal',
      title: 'Why West Coast storms are a different animal now',
      blocks: [
        {
          type: 'paragraph',
          text: 'The East Coast gets hurricanes. The Gulf gets hurricanes. The West Coast gets atmospheric rivers, Pineapple Expresses, and bomb cyclones — and the damage they are doing to coastal properties has gotten dramatically worse in the last decade. The ocean comes at you three different ways at once, and your windows and doors are what take the hit.',
        },
        {
          type: 'card-grid',
          cards: [
            {
              icon: 'waves',
              title: 'Wave crash & storm surge',
              text: 'King tides push waves farther up the shoreline than before. Water hits glass that was never designed to be hit.',
            },
            {
              icon: 'wind',
              title: 'Hurricane-force winds',
              text: 'Winter storms deliver sustained 60–90 MPH winds along the coast, with gusts well into hurricane territory.',
            },
            {
              icon: 'tree',
              title: 'Flying debris',
              text: 'Driftwood, cobbles, patio furniture, even restaurant signage become projectiles once the wind picks up.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'Standard windows and sliding glass doors are not built for any of this. The glass breaks on impact, the water pours in, and from there it is a race against the next wave.',
        },
      ],
    },
    {
      id: 'debris-test',
      title: 'The debris test that matters',
      blocks: [
        {
          type: 'paragraph',
          text: 'Inferno-Roll shutters are engineered to the same impact standards used in Florida\'s hurricane codes. The headline test — the one anyone in the shutter industry has to pass before they can claim "impact-rated" — is simple and brutal: a 2x4 piece of lumber fired at over 120 MPH, straight at the shutter. If the shutter stops it without the opening behind it being breached, it passes.',
        },
        {
          type: 'paragraph',
          text: 'Our shutters pass. Whether your threat is a Florida hurricane or a California winter storm throwing a chunk of driftwood sideways through your dining room window, the engineering is the same. If a 2x4 at 120 MPH cannot get through, neither can anything the Pacific is likely to throw.',
        },
        {
          type: 'callout',
          label: 'What this means for you',
          text: 'Once the shutter is down and locked into its tracks, the opening behind it is sealed. Wind cannot press through. Water cannot force its way in. Debris bounces off instead of through. That is the whole job.',
        },
      ],
    },
    {
      id: 'zeldas',
      title: "Proof on the sand: Zelda's Restaurant, Capitola",
      blocks: [
        {
          type: 'case-study',
          label: 'Case Study',
          title: "Zelda's on the Beach",
          location: 'Capitola Village, California',
          paragraphs: [
            {
              text: "Zelda's on the Beach is as literal as a restaurant name gets. It sits directly on the sand in Capitola Village, in the path of every winter storm the Pacific throws at the Central Coast. During the January 2023 atmospheric river events, the Capitola Esplanade took millions of dollars in damage. Zelda's was right in that path.",
            },
            {
              lead: "We installed Inferno-Roll shutters at Zelda's.",
              text: 'Since then, the restaurant closes the shutters before every major storm and king tide event. The waves hit the facade. The surge pushes debris up the beach. The shutters take the hits — and the glass behind them stays whole.',
            },
            {
              text: 'That is not a sales pitch. That is a working restaurant in one of the most exposed spots on the California coast, and the shutters are doing exactly what we built them to do.',
            },
          ],
        },
        {
          type: 'pull-quote',
          text: '"The shutters take the hits. The glass behind them stays whole."',
        },
      ],
    },
    {
      id: 'stainless-hardware',
      title: 'The part most shutter companies cut corners on: stainless hardware',
      blocks: [
        {
          type: 'paragraph',
          text: 'Here is where a lot of shutters that look great on day one fail quietly over a few winters. If you live within a few miles of the ocean, salt air is going to eat anything that is not built to resist it. Regular steel hardware rusts. Zinc-plated fasteners corrode. Cheap tracks seize up with crusted salt and stop rolling smoothly.',
        },
        {
          type: 'paragraph',
          text: 'Every Inferno-Roll shutter we install in a coastal environment uses stainless steel hardware — fasteners, hinges, brackets, mounting points. Stainless costs more, but it is the difference between a shutter that still rolls smoothly ten years from now and one that is seized with rust after three winters on the beach.',
        },
        {
          type: 'paragraph',
          text: 'This is not an upgrade line item we try to upsell. It is the standard build for anything we install near salt water. If your shutter is going to live through storms, it has to live through the salt first.',
        },
      ],
    },
    {
      id: 'what-coastal-shutters-do',
      title: 'What our coastal shutters do',
      blocks: [
        {
          type: 'feature-list',
          items: [
            {
              title: 'Hurricane-force wind resistance',
              text: 'Shutter curtain anchored into reinforced side tracks that hold the load when sustained wind presses against the opening.',
            },
            {
              title: '2x4-at-120MPH debris impact rating',
              text: 'Engineered to the Miami-Dade / Florida Building Code large missile impact standard — the toughest debris test in the shutter industry.',
            },
            {
              title: 'Sealed water barrier',
              text: 'Once closed, the shutter and track system keeps wave crash, blown spray, and storm surge on the outside of your home.',
            },
            {
              title: 'Stainless steel coastal hardware',
              text: 'Standard build for every ocean-exposed install. Resists salt corrosion so the shutter keeps working year after year.',
            },
            {
              title: 'Deploy in seconds, not hours',
              text: 'Motorized shutters close with the push of a button, from a remote, wall switch, phone app, or voice command — no plywood, no screws, no scrambling before the storm hits.',
            },
            {
              title: 'Always ready, year-round',
              text: 'Unlike panel systems that live in the garage waiting for an emergency, roll shutters stay mounted and ready. Storm hits overnight? You are already protected.',
            },
          ],
        },
        {
          type: 'spec-grid',
          items: [
            { value: '120+ MPH', label: '2x4 debris impact rating' },
            { value: 'Stainless', label: 'Hardware standard on coastal installs' },
            { value: 'Seconds', label: 'To close before a storm hits' },
          ],
        },
      ],
    },
    {
      id: 'hurricane-rated',
      title: 'About the words "hurricane-rated" on a West Coast page',
      blocks: [
        {
          type: 'paragraph',
          text: 'A lot of West Coast homeowners hear "hurricane shutter" and assume it does not apply to them. Hurricanes do not make landfall on the California coast. True.',
        },
        {
          type: 'paragraph',
          text: 'But the engineering standards developed for hurricanes — Miami-Dade protocols, Florida Building Code impact ratings — are the only universally accepted testing standards for shutters that have to deal with sustained high wind, flying debris, and water intrusion. When we tell you our shutters are hurricane-rated, that is the engineering vocabulary. The threat on the West Coast has a different name (atmospheric river instead of Category 3), but the problem your opening has to solve is the same: keep the wind, water, and debris outside your building.',
        },
        {
          type: 'paragraph',
          text: 'If the shutter can handle a 2x4 at 120 MPH, it can handle whatever a Pacific winter wants to throw at it.',
        },
      ],
    },
    {
      id: 'one-shutter-many-jobs',
      title: 'One shutter, many jobs',
      blocks: [
        {
          type: 'paragraph',
          text: 'Storm protection is a big one, but it is not the only thing these shutters do. Few products on the market protect a home against this many threats in a single system:',
        },
        {
          type: 'benefit-grid',
          items: [
            { icon: 'waves', label: 'Storm & wave protection' },
            { icon: 'flame', label: 'Fire & ember defense' },
            { icon: 'snowflake', label: 'Heating & cooling savings' },
            { icon: 'volume', label: 'Noise reduction & privacy' },
          ],
        },
        {
          type: 'paragraph',
          text: 'One system, year-round value. That is the Inferno-Roll package.',
        },
        {
          type: 'quote-box',
          title: 'Want a preliminary quote?',
          text: 'Send us photos of your home or business along with your window and door sizes, and we can give you preliminary pricing for both shutters and installation. Coastal installs include stainless hardware and motorized controls as standard. Start the process by sending us those details, and give us a call.',
        },
      ],
    },
    {
      id: 'protect-the-pacific',
      title: 'Protect what the Pacific is coming for',
      hideTitle: true,
      blocks: [
        {
          type: 'cta',
          title: 'Protect what the Pacific is coming for',
          text: 'Inferno-Roll makes custom storm, fire, and security shutters, designed and manufactured in California and professionally installed. Book a free property assessment and we will walk your site with you — exposure, debris paths, salt conditions, the works.',
          primary: { label: 'Request a Free Estimate', href: '/quote' },
          secondary: { label: '(888) 999-8809', href: 'tel:8889998809' },
        },
      ],
    },
  ],
}

export const BLOG_ARTICLES: BlogArticle[] = [
  WINDOWS_DOORS_ARTICLE,
  INSURANCE_HARDENING_ARTICLE,
  DEFENSIBLE_SPACE_ARTICLE,
  SECURITY_BREAK_IN_ARTICLE,
  PACIFIC_STORM_ARTICLE,
]

export const BLOG_ARTICLE = DEFENSIBLE_SPACE_ARTICLE

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug)
}

export function getFeaturedBlogArticle(): BlogArticle {
  return BLOG_ARTICLES.find((article) => article.featured) ?? BLOG_ARTICLES[0]
}

export function getBlogLatestGridArticles(): BlogArticle[] {
  return [
    WINDOWS_DOORS_ARTICLE,
    INSURANCE_HARDENING_ARTICLE,
    SECURITY_BREAK_IN_ARTICLE,
    PACIFIC_STORM_ARTICLE,
  ]
}

export const BLOG_ARTICLE_SLUGS = BLOG_ARTICLES.map((article) => article.slug)
