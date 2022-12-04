import { useRouter } from "next/router";

const projectsData = [
  {
    title: "ThumbnailTest.com",
    link: "https://ThumbnailTest.com",
    imgUrl: "/ThumbnailTest_Logo.svg",
    desc: "A/B Test Your Thumbnails Live On YouTube.",
    notes:
      "My most successful project to date. Built in under 30 days, making $1000+ per month.",
  },
  {
    title: "BirdBuds",
    link: "https://BirdBuds.com",
    imgUrl: "https://birdbuds.com/lib_hFxGVkRJTRpiJeuZ/claknke4145krhkp.svg",
    desc: "Met matched with a new friend on Twitter every week.",
    notes:
      "Can you build an entire startup in just a twitter account? Yes. And I did! I built this with my partner, Aprilynne Alter :) Just launched! Planned monetization is sponsored messages or affiliate links for everyone that does not get matched. ",
  },
  {
    title: "EasyUpload",
    link: "https://EasyUpload.dev",
    imgUrl: "/easyupload_logo.svg",
    desc: "Upload your mobile video to Instagram, YouTube, and TikTok all at once!",
    notes:
      "I planned to launch this project with the Creatornow team. Plan was to give the tool away for free to Creatornow users, and charge a small fee for non-creatornow users. I would also get an affiliate fee on anyone who signed up for Creatornow through the tool. The project never launched as Creatornow sold out before our planned release date.",
  },
  {
    title: "Clipbot.tv",
    link: "https://clipbot.tv",
    imgUrl: "/clipbot-dark-social.png",
    desc: "Automatically upload your Twitch clips to TikTok and YouTube Shorts and grow overnight.",
    notes:
      "My first big solo project. Started as a desktop app, now a web app. Makes around $700/month. Currently trying to take this into B2B by pushing it into esports.",
  },
  {
    title: "ClipThat.live",
    link: "https://clipthat.live",
    imgUrl: "/clipthat-logo.png",
    desc: "Just say “Clip that” to make a live clip on Twitch of the last 30 seconds of your stream.",
    notes:
      "Released for free as marketing for Clipbot.tv. Got a few hundred upvotes on reddit, but never took off. Three days later someone else released the same tool with the same name lol, they had a better marketing video than I did so they got over 1000 upvotes. Lesson learned :)",
  },
  //   we're gonna pretend I never made this lmao, but it can live on forever in this comment
  //   {
  //     title: "NFTLists.me",
  //     link: "https://NFTLists.me",
  //     imgUrl: "https://nftlists.me/logos/social-image.png",
  //     desc: "A website that shows you the top NFTs on OpenSea.",
  //   },
  {
    title: "Delight Rewards",
    link: "https://delightrewards.com",
    imgUrl: "https://delightrewards.com/images/logos/og-image.png",
    desc: "One app for rewards at all your favorite Restaurants. Pivoted to E-commerce referrals.",
    notes:
      "My first startup. I was the CMO and did everything from marketing to product to sales. We got $50k from an accelerator program and used it to live off of for years.I moved to Chicago to work on this full time, but got depressed and left.",
  },
  //   {
  //     title: "Payble",
  //     link: "https://payble.net",
  //     imgUrl: "",
  //     desc: "Pay at the table with your phone and stop waiting for restaurant bills",
  //     notes: "My first startup. I was the CMO and did everything from marketing to product to sales. We got $50k from an accelerator program and used it to live off of for years.I moved to Chicago to work on this full time, but got depressed and left."
  //   },
];


export default function Projects() {
  const router = useRouter();

  const ProjectCard = ({
    imgUrl,
    title,
    description,
    link,
    notes,
  }: {
    imgUrl: string;
    title: string;
    description: string;
    link: string;
    notes: string;
  }) => {
    return (
      <div
        className="flex w-full transform cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg transition duration-150  ease-in-out hover:scale-105 dark:bg-gray-600 lg:w-3/5 "
        onClick={() => router.push(link)}
      >
        <div className="flex h-fit w-full flex-col items-center justify-center">
          <img src={imgUrl} alt="Project logo" className="w-full px-3 py-3" />
        </div>
        <div className="bg-white p-4 dark:bg-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-lg text-gray-600 dark:text-gray-100">
            {description}
          </p>
          <p className="mt-1 text-gray-300 dark:text-gray-300">{notes}</p>
        </div>
      </div>
    );
  };
  
const DetailedProjectCard = ({
    imgUrl,
    title,
    description,
    link,
    notes,
  }: {
    imgUrl: string;
    title: string;
    description: string;
    link: string;
    notes: string;
  }) => {
    return (
      <div className="overflow-hidden rounded-lg bg-white cursor-pointer shadow" onClick={() => router.push(link)}>
        <div className="px-4 py-5 sm:px-6">
          <img src={imgUrl} alt={title} className="w-full" />
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {title}
              </dd>
            </div>
            <div className="bg-white  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Project Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {description}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Notes</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {notes}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-white p-5 dark:bg-gray-800">
      <div className="flex sm:w-1/2 flex-col items-center justify-center gap-10 bg-white p-5 dark:bg-gray-800">
        {projectsData.map((project) => (
          <DetailedProjectCard
            key={project.title + 'key'}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.desc}
            link={project.link}
            notes={project.notes}
          />
        ))}
      </div>
    </div>
  );
}
