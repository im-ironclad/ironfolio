type CardProps = {
  companyTitle: string;
  description: string;
  dateRange: string;
  positionTitle: string;
  tags: string[];
}

export default function ExperienceCard({
  companyTitle,
  dateRange,
  description,
  positionTitle,
  tags
}: CardProps) {
  return (
    <article
      //  border-[1px] border-[rgba(121,219,255,0.75)]
      className='relative rounded-xl w-full | transition-all duration-300'
    >
      <hgroup>
        <h2 className="opacity-80">
          { companyTitle }
        </h2>

        <h3>
          <strong>{ positionTitle }</strong>
        </h3>

        <h4 className="text-xs italic">
          { dateRange }
        </h4>
      </hgroup>

      <p className='opacity-50 mt-2'>
        { description }
      </p>

      { tags.length > 0 &&
        <ul className='flex flex-wrap gap-x-6 list-disc pl-4'>
          {tags.map((tool, i) => (
            <li key={tool + i}>
              {tool}
            </li>
          ))}
        </ul>
      }
    </article>
  )
}