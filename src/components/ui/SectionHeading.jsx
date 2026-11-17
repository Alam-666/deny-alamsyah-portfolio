import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        <p className="eyebrow text-accent">{eyebrow}</p>
      </div>
      <h2 className="mt-5 text-balance text-4xl leading-[1.08] font-semibold tracking-[-0.045em] sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description && <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{description}</p>}
    </Reveal>
  )
}
