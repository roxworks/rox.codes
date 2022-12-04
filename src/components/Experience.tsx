import React from "react";

const userData = {experience: [
  {
    title: "Extremely Talented Officer",
    company: "Rox Works",
    year: "Current",
    companyLink: "#",
    desc: "Working harder than ever to try to do awesome stuff. Gonna make a billion dollars or die trying. ",
  },
  {
    title: "Programmer", 
    company: "Mr Beast Youtube, LLC",
    year: "2022",
    companyLink: "https://youtube.com/mrbeast6000",
    desc: "Worked on some super secret stuff I'm not allowed to talk about :) Worked my ass off.",
  },
  {
    title: "Marketing Consultant",
    company: "Datadistillr",
    year: "2021",
    companyLink: "https://datadistillr.com",
    desc: "Made friends with big tech startup peeps and they paid me too much money to help them with content so I could afford to move to Thailand.",
  },
  {
    title: "Chief Marketing Officer (lmao)",
    company: "Delight",
    year: "2020",
    companyLink: "https://delightrewards.com",
    desc: "Second/Third/Fourth Startup! Restaurant Rewards, then E-commerce referrals. Changed a ton over time, moved to Chicago, got depressed, left.",
  },
  {
    title: "Chief Marketing Officer (lmao)",
    company: "Payble",
    year: "2018",
    companyLink: "https://payble.net",
    desc: "First Startup! Pay from your phone with a QR code instead of waiting for a check at restaurants. Website is dead now but it seemed cool at the time :D",
  },
  {
    title: "Software Engineer Intern",
    company: "Facebook",
    year: "2019",
    companyLink: "https://facebook.com",
    desc: "Ate 3x free meals a day while helping stop fake news. I'm sorry there's still fake news I was only an intern ok. Also my username was zucc LMAO",
  },
  {
    title: "Software Engineering Intern",
    company: "Microsoft",
    year: "2018",
    companyLink: "https://microsoft.com",
    desc: "The shit I did here was so complicated and tedious that I can't explain it to my mom so just pretend I worked for Xbox.",
  },
  {
    title: "Software Engineering Intern",
    company: "Intuit",
    year: "2018",
    companyLink: "https://intuit.com",
    desc: "Remember those guys that made turbotax? I worked for them and did absolutely nothing related to turbotax.",
  },
  {
    title: "Software Engineering Intern",
    company: "Constant Contact",
    year: "2017",
    companyLink: "https://constantcontact.com",
    desc: "Did a bunch of magic to make sending spam emails harder #savetheinternet",
  },
  {
    title: "Graduated from college lmao",
    company: "Rochester Institute of Technology",
    year: "2021",
    companyLink: "https://rit.edu",
    desc: "Studied game dev because I had big dreams. Minored in Computer Science to account for dream failure.",
  }
]};

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="bg-[#F1F1F1] dark:bg-gray-800 ">
        <div className="grid grid-cols-1 dark:bg-gray-800 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx + exp.title}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? <div className='pt-10'></div> : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-12 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }: {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-600">
        {year}
      </h1>
      <h1 className="font-semibold text-xl text-gray-200">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
