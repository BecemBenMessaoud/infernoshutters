export function FaqHero() {
  return (
    <section className="w-full leading-none">
      <img
        src="/images/faq-hero.png"
        alt="Frequently Asked Questions. Answers to common questions to help you understand our wildfire protection and security solutions before you request a quote."
        width={1024}
        height={290}
        fetchPriority="high"
        decoding="async"
        className="block aspect-[1024/290] h-auto w-full object-cover object-center"
      />
    </section>
  )
}