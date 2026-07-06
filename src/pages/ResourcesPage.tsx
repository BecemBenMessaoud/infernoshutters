import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GuideAccordionItem,
  GuideArticle,
  GuideList,
  GuideParagraph,
  GuideSection,
  ResourcesHero,
} from '../components/resources/ResourcesGuide'

export function ResourcesPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <main>
      <ResourcesHero />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
          <GuideAccordionItem
            title="Seasonal Maintenance Guide for your shutters:"
            isOpen={openItems.has(0)}
            onToggle={() => toggleItem(0)}
          >
          <GuideArticle
            hideHeader
            title="Seasonal Maintenance Guide for your shutters:"
            intro="Regular maintenance keeps your Inferno fire-resistant roll shutters operating smoothly, extends their life, and helps preserve the proprietary intumescent coating that activates in high heat. Follow these simple steps:"
            footer="Proper care ensures your Inferno shutters remain ready to protect against embers, flames, and wind - and helps maintain your warranty. For location-specific advice (especially coastal or high-wildfire zones), contact your Inferno dealer or our support team."
          >
            <GuideSection title="Recommended Schedule" tone="orange">
              <GuideList
                items={[
                  'Clean and inspect: At least twice per year (spring and fall) or after major storms, high winds, or wildfire season.',
                  'Lubricate: Once per year, or more often in coastal, sandy, or dusty areas.',
                  'Operate: Run the shutters fully up and down several times a year to keep mechanisms free.',
                ]}
              />
            </GuideSection>

            <GuideSection title="1. Cleaning" background="white">
              <GuideList
                items={[
                  'Fully lower the shutters.',
                  'Rinse thoroughly with a garden hose (avoid high-pressure washers).',
                  'Mix a mild, non-abrasive cleaner (e.g., ¼ cup Simple Green per 2 gallons of water or a pH-neutral soap).',
                  'Use a soft-bristled brush or soft cloth to gently wash the slats, guide tracks, and bottom bar - work horizontally across the slats and up/down in the tracks.',
                  'Pay special attention to the ends of the slats and inside the tracks to remove sand, salt, debris, pollen, or insects.',
                  'Rinse completely with clean water while raising and lowering the shutter in small increments to flush hidden areas.',
                  'Allow the shutters to dry fully in the open position before closing.',
                  'Important: Use only mild detergents. Avoid abrasive pads, harsh chemicals, or solvents that could damage the fire-resistant coating.',
                ]}
              />
            </GuideSection>

            <GuideSection title="2. Lubrication">
              <GuideList
                items={[
                  'With the shutter fully open, spray clear silicone lubricant (dry silicone spray only - never WD-40 or oil-based products) lightly inside the guide tracks/rails.',
                  'Wipe away any excess to prevent drips or buildup.',
                  'A light application on the slat ends (where they contact the tracks) helps maintain smooth, quiet operation.',
                ]}
              />
            </GuideSection>

            <GuideSection title="3. Visual Inspection (Do this every cleaning)" background="white">
              <GuideList
                items={[
                  'Check slats for dents, bends, or coating damage.',
                  'Inspect guide tracks and housing for debris, corrosion, or misalignment.',
                  'Look at caulking/seals around the box and tracks for cracks.',
                  'Test operation: Listen for unusual grinding, squeaking, or binding.',
                  'For motorized or solar models: Ensure the motor, battery, or manual override works smoothly.',
                  'In coastal areas: Pay extra attention to salt buildup and corrosion.',
                ]}
              />
            </GuideSection>

            <GuideSection title="4. Operation Tips">
              <GuideList
                items={[
                  'Always use the motor, remote, switch, or manual crank - never push or pull the curtain by hand.',
                  'Keep the path clear of furniture, plants, or obstructions.',
                  'In cold climates: Remove ice or snow from tracks before operating.',
                  'For manual override models: Test the crank periodically (especially bedroom egress windows).',
                ]}
              />
            </GuideSection>

            <GuideSection title="When to Contact Inferno or a Certified Dealer" tone="orange" background="white">
              <GuideList
                items={[
                  'Unusual noises or resistance during operation.',
                  'Damaged slats or tracks after a storm or wildfire event.',
                  'Motor, battery, or control issues.',
                  'Any sign of coating damage or performance concerns.',
                ]}
              />
            </GuideSection>
          </GuideArticle>
          </GuideAccordionItem>

          <GuideAccordionItem
            title="Wildfire Preparedness: How to Protect Your Home"
            isOpen={openItems.has(1)}
            onToggle={() => toggleItem(1)}
          >
          <GuideArticle
            hideHeader
            title="Wildfire Preparedness: How to Protect Your Home"
            intro={'Wildfires are unpredictable, but your home doesn\'t have to be. A comprehensive wildfire preparedness plan combines defensible space (clearing vegetation around your home) with home hardening (making the structure itself more ignition-resistant).\n\nNo single measure guarantees survival, but addressing these two areas together dramatically improves your home\'s chances. Inferno fire-resistant roll shutters are a critical part of hardening the most vulnerable openings - windows and doors - while the rest of your property and building envelope must also be protected.'}
            footer={'Protect what matters most. Inferno roll shutters give you peace of mind - but true wildfire resilience comes from a complete plan.\n\nReady to harden your home? Contact Inferno today for a personalized wildfire protection assessment and quote.'}
            footerVariant="navy"
          >
            <GuideSection title="1. Create Defensible Space" tone="orange">
              <GuideParagraph>
                Defensible space is the buffer zone you maintain between your home and surrounding vegetation. It slows or stops fire spread and gives firefighters a safe area to defend your property. California and many other wildfire-prone states require at least 100 feet of defensible space (or to your property line).
              </GuideParagraph>
            </GuideSection>

            <GuideSection title="Zone 0 (0-5 feet from the home) - The Most Critical Area" tone="navy" background="orange">
              <GuideList
                items={[
                  'Use only non-combustible materials: gravel, pavers, concrete, or hardscape.',
                  'Remove all combustible mulch, bark, plants, shrubs, and wood piles.',
                  'Keep this area clear of furniture, planters, and debris.',
                  'Trim tree branches so they do not overhang the roof or touch the house.',
                ]}
              />
            </GuideSection>

            <GuideSection title="Zone 1 (5-30 feet from the home)" tone="navy">
              <GuideList
                items={[
                  'Keep grass mowed to 4 inches or less.',
                  'Remove dead plants, leaves, and pine needles.',
                  'Space trees and shrubs so canopies are at least 10 feet apart.',
                  'Prune low-hanging branches to 6-10 feet off the ground.',
                  'Move wood piles and propane tanks into Zone 2.',
                ]}
              />
            </GuideSection>

            <GuideSection title="Zone 2 (30-100 feet from the home)" tone="navy">
              <div className="space-y-4">
                <GuideList
                  items={[
                    'Thin trees and brush to reduce fuel load.',
                    'Remove dead branches and undergrowth.',
                    'Space tree canopies 10-20 feet apart (depending on slope and tree type).',
                  ]}
                />
                <GuideParagraph>
                  Tip: Inspect and maintain your defensible space at least twice a year - especially in spring and fall.
                </GuideParagraph>
              </div>
            </GuideSection>

            <GuideSection title="2. Harden Your Home - The 4 Critical Areas" tone="orange" background="blue">
              <div className="space-y-4">
                <GuideParagraph>
                  Most homes ignite from embers or radiant heat entering through vulnerable points. Focus on these four key parts of the building envelope:
                </GuideParagraph>
                <GuideParagraph>
                  Roof Upgrade to Class A fire-rated materials (metal, concrete tile, or asphalt shingles rated for wildfire). Keep the roof and gutters clean of leaves, needles, and debris.
                </GuideParagraph>
                <GuideParagraph>
                  Siding & Exterior Walls Use ignition-resistant or non-combustible siding (fiber cement, stucco, brick, or stone). Seal gaps and repair damaged areas.
                </GuideParagraph>
                <GuideParagraph>
                  Eave & Soffit Vents Install ember-resistant vents (listed by the California State Fire Marshal or tested to ASTM standards) or cover openings with 1/8-inch corrosion-resistant metal mesh.
                </GuideParagraph>
                <GuideParagraph>
                  Windows, Doors & Other Openings This is where Inferno fire-resistant roll shutters make the biggest difference.
                </GuideParagraph>
                <GuideList
                  items={[
                    'They block embers, radiant heat, and flames from entering windows and doors.',
                    'Proprietary intumescent coating expands under extreme heat for added protection.',
                    'Motorized or solar-powered options with manual override ensure operation even during power outages.',
                    'Custom sizes up to 24 ft wide for full coverage.',
                  ]}
                />
                <GuideParagraph>
                  If even one of these four areas remains unprotected, your home remains at high risk.
                </GuideParagraph>
              </div>
            </GuideSection>

            <GuideSection title="Additional Home Hardening Tips" tone="orange">
              <GuideList
                items={[
                  'Decks & Porches: Use ignition-resistant materials or enclose undersides with ember-resistant screening.',
                  'Gutters: Install gutter guards and clean regularly.',
                  'Chimneys: Install spark arrestors and keep them clear.',
                  'Garages & Sheds: Store flammable materials safely and use ember-resistant doors/vents.',
                  'Power Outages: Choose Inferno shutters with solar power, battery backup, or manual crank for reliable operation.',
                ]}
              />
            </GuideSection>

            <GuideSection title="Your Next Steps" tone="orange" background="white">
              <GuideList
                items={[
                  'Assess your property - start with Zone 0 and the four critical building areas.',
                  'Schedule a free evaluation with Inferno\'s wildfire protection experts.',
                  'Get a custom quote for Inferno fire-resistant roll shutters tailored to your home\'s windows and doors.',
                ]}
              />
            </GuideSection>
          </GuideArticle>
          </GuideAccordionItem>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-inferno-500 py-14 lg:py-16">
        <div
          className="absolute bottom-0 left-0 h-0 w-0 border-b-[56px] border-r-[72px] border-b-transparent border-r-navy-900"
          aria-hidden
        />
        <div
          className="absolute bottom-0 right-0 h-0 w-0 border-b-[56px] border-l-[72px] border-b-transparent border-l-white"
          aria-hidden
        />
        <div className="relative z-10 px-4 text-center">
          <p className="mb-6 text-lg font-semibold text-white sm:text-xl">
            Don&apos;t wait until it&apos;s too late!
          </p>
          <Link
            to="/quote"
            className="inline-block w-full max-w-xs rounded border-2 border-white px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-inferno-500 sm:w-auto sm:text-base"
          >
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </main>
  )
}