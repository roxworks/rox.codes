type Event = {
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
};

const EVENTS = [
  //Birbuds launch Dec 3rd 2022

  {
    title: "A Better Idea",
    description:
      `Realize a much bigger opporunity for what I could build with this creator.
      Suggest it, he's 100% in.
      Start researching the podcast hosting space to see if I can do something interesting :)
      `,
    startDate: "March 2024",
  },
  {
    title: "Lose my cofounder",
    description:
      `My cofounder went viral for a hackathon project.
      Opportunity was huge and much closer to his dream, so I told him to go for it, and started hiring for the first time in my life.
      `,
    startDate: "February 2024 (late)",
  },
  {
    title: "Actually sell Thumbnailtest",
    description:
      `After almost 3 months of grueling paperwork and migration, finally get paid for ThumbnailTest. 
      By the end, sitting near $18-20k MRR, sold for functionally 1x ARR. 
      YouTube is planning A/B testing themselves, and I don't want to fight that fight anymore.
      Yet, selling this is still my greatest regret - I've felt lost since, and don't really have "life-changing" money to show for it.
      Feels weird that friends at $5k MRR sold for similar prices. Feel dumb.
      But it's time to move on.
      `,
    startDate: "February 2024",
  },
  {
    title: "Start on something new",
    description:
      `Finally, a year later, convince a creator to launch products with me. Flew out to london with a new cofounder for a month to work with them. Decided the product idea wasn't good enough, but we should all build something else together. The opportunity is just too big.`,
    startDate: "December 2023",
    location: "London, UK"
  },
  {
    title: "ThumbnailTest Blows Up",
    description:
      `After months of slow grow, ThumbnailTest hits ~$8k MRR. Then, a customer makes a video, and my MRR doubles to almost $16k 6 weeks later. Makes negotiating acquisition really hard, as price keeps increasing.`,
    startDate: "November 2023",
    location: "San Francisco, CA"
  },
  {
    title: "Try to sell ThumbnailTest",
    description:
      `My 6 month old MicroAcquire listing finally pays off, I start getting offers. Negotiations begin.`,
    startDate: "October 2023",
    location: "San Francisco, CA"
  },
  {
    title: "The Dark Times",
    description:
      `Questioned everything. A lot. Debated just shutting everything down and starting on something else. ThumbnailTest took up so much of my brain, even if not my time - I knew I needed a change. Struggled with asking for help, realized I was not surrounding myself with people I could learn from. Decided to try to fix that.`,
    startDate: "September 2023",
  },
  {
    title: "Launch BacklogBoost.com",
    description:
      `Wanted to see if I could build a more "enterprise" creator tool - released BacklogBoost at a starting price of $99/mo and got $1k MRR in the first week.`,
    startDate: "August 2023",
    location: "San Francisco, CA"
  },
  {
    title: "Buildspace IRL SF1",
    description:
      "I got top 32 in buildspace s3, so they invited me out to SF to work from their office for 3 months and get mentored. I tried to expand into new and different creator tools, while growing ThumbnailTest on the side.",
    startDate: "July 2023",
    location: "San Francisco, CA"
  },
  {
    title: "Return to ThumbnailTest (Marketing Month)",
    description:
      "My girlfriend Aprilynne challenged me to focus on one project for a bit. I did an entire month of marketing through buildspace n&w s3, and managed to double MRR ($1600 -> $3200).",
    startDate: "March 2023",
    location: "Denver, CO"
  },
  {
    title: "The 10x Mindset Shift",
    description:
      "After working with Mr Beast, I realized I had to shoot for bigger things. I truly believe I can do something amazing with my life, I just have to push myself to do it. I've decided to try building businesses with creators from day 1 specifically for their audience to see how far I can take that business model. I might not be able to start 1 billion dollar business, but maybe I can start 100 $10 million dollar businesses.",
    startDate: "November 2022",
  },
  {
    title: "Worked with Mr Beast + Post-stream Move #10",
    description:
      "Somehow the Mr Beast team found my twitter/twitch/thumbnailtest.com and asked me to come build some cool secret stuff for them. So I did! It was only a 3 month contract, but I worked my absolute ass off. I can't talk about what I built so don't ask :D. Moved to Greenville, NC for this because I wanted to meet everyone in person and got kinda tired of travel.",
    startDate: "August 5th, 2022",
    endDate: "November 5th, 2022",
    location: "Greenville, NC",
  },
  {
    title: "Start + Launch ThumbnailTest.com",
    description:
      "After EasyUpload, I wanted to build another tool for creators. I saw that TubeBuddy was $50/month and everyone just used their A/B testing tool which felt super simple to build. So I made my own in 30 days and launched it. It's my most successful project to date.",
    startDate: "June 2022",
    location: "Lisbon, Portugal",
  },
  {
    title: "Post-stream Move #9",
    description:
      "When I left Thailand, the plan was always to meet back up in Portugal in about 6 months. So that's what we did! Aprilynne and I got to move there together, and I got to see everybody again, as well as make a bunch of new friends who were already in Lisbon.",
    startDate: "May 7th 2022",
    endDate: "May 14th 2022",
    location: "Lisbon, Portugal",
  },
  {
    title: "An accidental week in the UK",
    description:
      "I was going to move to the UK but then didn't, but I'd already booked my flights. So I flew to the UK and stayed with my mod and now main Clipbot engineer @Delvoid. I ate all the british foods and they were all bad.",
    startDate: "May 7th 2022",
    endDate: "May 14th 2022",
    location: "Manchester, UK",
  },
  {
    title: "The Failed launch of EasyUpload",
    description:
      "I decided to build EasyUpload in the process of moving Clipbot to a web app. I wanted it to be successful beyond just my own audience / producthunt, so I reached out to some creator courses to see if they'd want to launch this (or another idea) with me. I partnered with Creatornow to launch it, but the day before we were supposed to launch they dropped out as they had successfully sold out their course before our joint marketing launch start date. I decided not to launch it and keep it on the backburner for now.",
    startDate: "April 2022",
    location: "Denver, CO",
  },
  {
    title: "Post-stream Move #8",
    description:
      "Moved to Denver for a month to see Aprilynne's family and friends.",
    startDate: "April 2022",
    location: "Denver, CO",
  },
  {
    title: "Post-stream Move #7",
    description:
      "Moved to Seattle for a month to see more family and show Aprilynne the city. Struggled to be productive because of cute girl. Worth it.",
    startDate: "March 2022",
    location: "Seattle, WA",
  },
  {
    title: "Started Dating Aprilynne :D",
    description:
      "Flew across the country to meet the coolest girl I've ever met. We've been together ever since, and lived together since day 1 :)",
    startDate: "February 14th, 2022",
    location: "San Francisco, CA",
  },
  {
    title: "Met Aprilynne Alter",
    description:
      "Our mutual friend Steph tagged me in one of her tweets. She DMed me and we started chatting :)",
    startDate: "December 2021",
    location: "Twitter",
  },
  {
    title: "Post-stream Move #6",
    description:
      "Went home to the US for the holidays and stayed for about two months before starting the next adventure.",
    startDate: "December 17th, 2021",
    location: "New York",
  },
  {
    title: "Launched Clipbot.tv",
    description:
      "It took me almost 5 months to launch, but I finally did it! MRR hit like $200/month then stopped growing pretty quick. Biggest reddit post of my life :)",
    startDate: "November 22nd, 2021",
    location: "reddit.com/r/twitch",
  },
  {
    title: "Started my first solo project - Clipbot.tv",
    description:
      "I hated Tiktok and short form content, so I wanted to just automate everything. My friends all recommended building in a space I knew, so I decided to build tools for content creators to start.",
    startDate: "June 2021",
    location: "Koh Samui, Thailand",
  },
  {
    title: "Post-stream Move #5 - All the way to Thailand",
    description: `Fifth move of the stream - I moved from Chicago to Thailand to become a digital twitch nomad 😄 I started going ham at twitch, youtube and the like, as well as working on new startup projects every single day. Lived on an island with a bunch of other indie hackers including piet, andrey, and javi who all helped me not suck.`,
    startDate: "May 22nd, 2021",
    location: "Koh Samui, Thailand",
  },
  {
    title: "I left my company",
    description: `I left my startup, Delight, after almost 3 years and took a month off to figure out what to do with my life. I felt depressed and like I had lost control of my life and my time. I called every startup friend I had and asked them if I should leave, and they all said yes, so I did. I made a video about it titled "The Hardest Decision I've Ever Made". I flew to Washington to be with my family and to figure out what to do next.`,
    startDate: "April 6th, 2021",
  },
  {
    title: "Interview with @levelsio (Pieter Levels)",
    description:
      "After following piet for years and being an absolute fanboy, he found my stream one day and offered to do a podcast/Q&A with me. We finally got to do it and to this day it is my most popular piece of content ever, and still how many people find me.",
    startDate: "January 2021",
  },
  {
    title: "Pivoted to E-commerce referrals",
    description: `When rewards didn't work, we went after referrals. This was probably the most success we got out of any of our businesses, we got to like 10 B2B customers paying $100/mo at one point. For once we were global! Kinda. But I still wasn't really excited about this idea, or most of the ideas we'd been working on.`,
    startDate: "Late 2020",
    location: "Chicago, IL",
  },
  {
    title: "Post-stream Move #3",
    description: "I moved back to Chicago to live with one of my cofounders.",
    startDate: "November 2nd, 2020",
    location: "Chicago, IL ",
  },
  {
    title: "Joined the OnlyDevs",
    description:
      "Prime made a new team called the OnlyDevs and invited me to join it! So I did! We planned to make dope events.",
    startDate: "October 8th, 2020",
  },
  {
    title: "Post-stream Move #2",
    description:
      "I moved to an airbnb in Washington state for a month to be with my family while my neice was born.",
    startDate: "October 1st, 2020",
    location: "Seattle, WA",
  },
  {
    title: "Post-stream Move #1",
    description:
      "I moved to a different neighborhood in Chicago. At this time I exclusively lived in airbnbs and had at least two roomates. It was ok.",
    startDate: "September 1st, 2020",
    location: "Chicago, IL",
  },
  {
    title: "I become a Twitch Affiliate",
    description:
      "Within just a few days of all the raids, I become a Twitch affiliate. I wasn't ever planning on becoming a streamer, but now I guess I have to :D",
    startDate: "August 12th, 2020",
    location: "Chicago, IL",
  },
  {
    title: "ThePrimeagen raids my stream AGAIN",
    description:
      "On my fourth stream ever, ThePrimeagen raids me AGAIN with ~150 people. I am extremely unprepared and have no idea what to do, so I cry. Again. As a result, !cry now exists.",
    startDate: "August 9th, 2020",
    location: "Chicago, IL",
  },
  {
    title: "ThePrimeagen raids my stream",
    description:
      "On my third stream ever, ThePrimeagen raids me with ~100 people. I am extremely unprepared, and have no idea what to do, so I cry.",
    startDate: "August 8th, 2020",
    location: "Chicago, IL",
  },
  {
    title: "Started Streaming on Twitch By Accident",
    description:
      "I was struggling to be productive one day, so I decided to stream myself working. I streamed to 0-1 viewers for a few days before something crazy happened.",
    startDate: "July 30th, 2020",
    location: "Chicago, IL",
  },
  {
    title: "Pivoted to Delivery-only rewards because of COVID",
    description: `Restaurants were pretty much the worst business to be in when COVID started. We tried to make delivery-only rewards work, but it didn't. `,
    startDate: "Early-Mid 2020",
    location: "Chicago, IL",
  },
  {
    title: "Pivoted to Delight Rewards",
    description: `Payble wasn't going too well, so we decided to try a restaurant rewards app instead. Creative, I know. We managed to get 30 "sales" but they were all free and we had to pitch each restaurant individually. Around this time I started getting kind of sad that our businesses weren't really "internet" businesses - we couldn't exactly go "viral" and no one could really "find" us and to me that felt problematic. But to be honest that's probably just how B2B works to some extent in the early days. `,
    startDate: "Late 2019",
    location: "Chicago, IL",
  },
  {
    title: "Accepted into Alchemist Accelertaor",
    description:
      "Probably the first time I felt like we were becoming a 'real' business. Got enough money to live on for like a year which kept us going through SEVERAL pivots. Learned a lot about enterprise sales. We did this entire program remotely before remote things were cool. No zoom or anything, I was listening in to talks on my friend's cellphone sitting in the middle of the room on speaker mode. AND I WAS THE ONLY ONE THAT HAD NOTES.",
    startDate: "Early 2019",
    location: "Remote",
  },
  {
    title: "Moved to Chicago",
    description:
      "We moved the business to Chicago and spent all our savings in 3 months and got 0 sales lmao. Also went through the original PYROS program at 1871 Chicago which was awesome and taught us a lot of what we were doing wrong.",
    startDate: "Late 2018",
    location: "Chicago, IL",
  },
  {
    title: "Started my first startup - Payble - in college",
    description:
      "What if you could pay from your phone at a restaurant instead of waiting for a check? We, like thousands of other tiny startups, were BRAVE enough to ask this question. We didn't get very far, as most first startups don't, and eventually pivoted. We did get a few paid beta customers though!",
    startDate: "Late 2018 - Early 2019",
    location: "Rochester, NY",
  },
  {
    title: "Internship @ Microsoft",
    description:
      "This would begin to cement the idea that I really don't like working for big companies. I got a job offer from Apple which would be my first FAANG company, but then Microsoft gave me an offer and seemed more fun. It was absolutely not fun.",
    startDate: "Summer 2018",
    location: "Redmond, WA",
  },
  {
    title: "Internship @ Intuit",
    description:
      "Towards the end, started to realize that I was doing nothing with my free time and that I wanted to be someone more amazing. What ever happened to the beef jerky kid I once was? Went to the company that makes TurboTax and did absolutely nothing related to TurboTax. Worked under the best manager I've ever had and learned how to be a better manager (one day, hopefully). Became extremely ok at ping pong.",
    startDate: "Early 2018",
    location: "San Diego, CA",
  },
  {
    title: "Internship @ Constant Contact",
    description:
      "Freshman year summer. Lived in Boston for 3 months. Ate only pasta. Got paid $25/hr. Learned way too much about DNS. I hate DNS.",
    startDate: "2017",
  },
  {
    title: "Studied GameDev + Computer Science @ RIT",
    description:
      "Was president of an organization of try-hards. Taught me to be a try-hard. Taught me how not to be a leader (I messed up so much holy shit). Got all my big boi internships through this. Planned to double major but halfway through I left college to pursue startups.",
    startDate: "2016",
  },
  {
    title: "Started a mini beef jerky business",
    description:
      "I used to sell gum and candy on the bus, until a friend told me he made homemade beef jerky. I bought him a dehyradtor and we became 50/50 partners in the business. We were selling beef jerky to kids in little ziploc bags. It totally looked like we were selling weed. It was pretty funny.",
    startDate: "2014",
  },
  {
    title: "Grew up on Long Island",
    description:
      "Lived my entire childhood until 18 on Long Island, NY. Grew up in a well off neighborhood. Not rich, but I definitely had a lot of privilege growing up. I took a ton of college classes in high school and left high school with half a college degree already done.",
    startDate: "1999",
  },
  {
    title: "Born",
    description:
      "I was born in NYC in a tiny apartment. My parents then moved to fit my big head.",
    startDate: "1998",
  },
];

const TimelineEntry = ({ event }: { event: Event }) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <svg
          aria-hidden="true"
          className="h-3 w-3 text-blue-600 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className="mb-1 text-lg font-semibold text-white">
        {event.title}
      </h3>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-500">
        {event.startDate} {event.endDate && ` - ${event.endDate}`}{" "}
        {event.location && `(${event.location})`}
      </time>
      <p className="text-base font-normal text-gray-300">
        {event.description}
      </p>
    </li>
  );
};

export default function Timeline() {
  return (
    <ol className="relative w-4/5 lg:w-1/2 border-l border-gray-200 dark:border-gray-700">
      {EVENTS.map((event) => (
        <TimelineEntry event={event} key={event.toString()} />
      ))}
    </ol>
  );
}
