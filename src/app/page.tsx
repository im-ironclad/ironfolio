import HeadshotWithLinks from '@/app/components/HeadshotWithLinks'
import Bio from '@/app/components/Bio'
import ExperienceCard from './components/ExperienceCard'

export default function Home() {
	const experience = [
		{
			companyTitle: `(Could Be You!)`,
			dateRange: `June 2023 - ???`,
			description: `I'm currently looking for my next journey! I'd like to join a team with more focus on javascript-driven applications whether on the web or native. I'd also be happy to join a team that uses tools such as Laravel or CraftCMS. Even if your team doesn't match those criteria if you think i'd be a good fit for the work you're doing please reach out!`,
			positionTitle: `???`,
			tags: []
		},
		{
			companyTitle: `Union`,
			dateRange: `Sep 2020 - May 2023`,
			description: `At Union I gained extensive experience by performing a variety of tasks and throughout my journey moved between Frontend and Backend focuses. More recently I was Frontend focused while also building out a few CMSs on the Backend with CraftCMS. I also gained some experience with native apps using React Native. Other tools and experience learned includes but is not limited to AWS, CI/CD, Linux Administration. I've mentored to more junior developers on projects that i've lead or also been a part of building, providing feedback in two stages to try and grow their skillsets on multiple fronts.`,
			positionTitle: `Full-stack Developer`,
			tags: [`ReactJS`, `NextJS`, `React Native`, `Typescript`, `CraftCMS`, `TailwindCSS`, `Bash`, `Linux`, `AWS`, `CI/CD`]
		},
		{
			companyTitle: `Interactive Knowledge`,
			dateRange: `Dec 2018 - May 2020`,
			description: `At Interactive Knowledge I broadened my experience and learned a few new skills and technologies such as creating interactive physical experiences (kiosks) with electron and react. I also helped develop websites, some decoupled, using Drupal and NextJS.`,
			positionTitle: `Full-stack Developer`,
			tags: [`ReactJS`, `NextJS`, `Electron`, `Drupal`]
		},
		{
			companyTitle: `Wray Ward`,
			dateRange: `May 2017 - October 2018`,
			description: `At Wray Ward my primary responsibility was the development of marketing emails. I gained experience and worked with multiple email marketing and CRM platforms such as Emma, Pardot, HubSpot, MailChimp, Constant Contact and Campaign Monitor. I also lead one project and assisted on others that utilized the CodeIgniter framework. Lastly I assisted on larger project builds that implemented CraftCMS.`,
			positionTitle: `Jr. Developer`,
			tags: [`HTML`, `CSS`, `SCSS`, `CraftCMS`, `CodeIgniter`, 'Gulp', `Email Marketing`]
		},
		{
			companyTitle: `Chief Supply`,
			dateRange: `Aug 2016 - March 2017`,
			description: `At Chief Supply I was responsible for the development of marketing emails. I gained experience working in various email marketing platforms such as Listrak and Bronto.`,
			positionTitle: `Jr. Developer`,
			tags: [`HTML`, `CSS`, `SCSS`, `Email Marketing`]
		}
	]

	return (
		<main className="min-h-screen flex flex-col items-start gap-x-20 pt-10 px-8 [&>*+*]:mt-36 | lg:flex-row lg:px-20 lg:pt-20">
			<header className='flex flex-col gap-10 shrink-0 | lg:w-[45%] lg:sticky lg:top-20 lg:left-0 lg:items-center'>
				{/* Heading group/copy */}
				<hgroup className='[&>*+*]:mt-5 order-2 | lg:order-1'>
					<h1 className='text-3xl'>
						Adam, <strong>Ironclad</strong>, Wells
					</h1>

					<h2 className='uppercase text-sm tracking-widest !mt-2 opacity-80'>
						Creative Developer &amp; Software Engineer
					</h2>

					<h3 className='tracking-wider'>
						I&apos;m an engineer with a background in design which has given me a strong eye for detail and the ability to bring designs to life.
					</h3>
				</hgroup>

				<HeadshotWithLinks containerClasses='order-1 | lg:order-2' />
			</header>

			<div className='flex flex-col [&>*+*]:mt-36 | lg:!mt-0'>
			  <Bio />
  
  			{/* Experience */}
  			<section className='[&>*+*]:mt-14 [&>*:nth-child(2)]:mt-2'>
  					<h2 className='uppercase tracking-widest text-sm opacity-80'>
  						Experience
  					</h2>
  
  					{/* Union <span className='text-xs'><em>(Joins Valtech)</em></span> */}
  
  					{ experience.map((job, i) => (
  						<ExperienceCard
  							key={job.companyTitle + i}
  							companyTitle={job.companyTitle}
  							dateRange={job.dateRange}
  							description={job.description}
  							positionTitle={job.positionTitle}
  							tags={job.tags}
  						></ExperienceCard>
  					))}
  			</section>
  
  			{/* Projects */}
  			{/* <section className='[&>*+*]:mt-2'>
  					<h2 className='uppercase tracking-widest text-sm opacity-80'>
  							Projects
  					</h2>
  
  					<div className='[&>*+*]:mt-4 tracking-wider'>
  						<p>
  							TBD
  						</p>
  					</div>
  			</section> */}
			</div>
		</main>
	)
}
