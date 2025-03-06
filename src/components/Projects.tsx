import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

const projectsData = [
  {
    title: "FlightCast",
    link: "https://flightcast.com",
    imgUrl: "/flightcast.png",
    desc: "The first podcast hosting platform made for video",
    notes:
      "My newest project! FlightCast helps creators publish video podcasts everywhere in one click, with unified analytics across platforms and AI-powered content optimization.",
    featured: true,
    color: "#4158D0"
  },
  {
    title: "ThumbnailTest.com",
    link: "https://ThumbnailTest.com",
    imgUrl: "/ThumbnailTest_Logo.svg",
    desc: "A/B Test Your Thumbnails Live On YouTube.",
    notes:
      "My most successful project to date. Built in under 30 days, making $3000+ per month.",
    featured: true,
    color: "#FF4500"
  },
  {
    title: "ThumbnailCheck.com",
    link: "https://ThumbnailCheck.com",
    imgUrl: "/thumbnailcheck.png",
    desc: "Preview your thumbnail before you upload it to YouTube.",
    notes:
      "Built in 4 hours. A free tool to get people into ThumbnailTest.com. Easily my most successful free tool.",
    color: "#00C853"
  },
  {
    title: "MagicThumbnails.com",
    link: "https://MagicThumbnails.com",
    imgUrl: "https://magicthumbnails.com/mtexamples.png",
    desc: "Generate YouTube Thumbnails with AI",
    notes:
    "Tried super hard to make this really good, got it to a 5/10 or so and stopped - it now creates fiverr quality thumbnails.",
    color: "#6200EA"
  },
  {
    title: "ThumbnailFace.com",
    link: "https://ThumbnailFace.com",
    imgUrl: "/thumbnailface.jpeg",
    desc: "Make Thumbnail Quality Faces, In Bulk, In Seconds",
    notes:
      "Built in a weekend. Scaffolding for something WAY cooler coming soon ;)",
    color: "#FF6D00"
  },
  {
    title: "BirdBuds",
    link: "https://BirdBuds.com",
    imgUrl: "/birdbudslogo.svg",
    desc: "Get matched with a new friend on Twitter every week.",
    notes:
      "Can you build an entire startup in just a twitter account? Yes. And I did! I built this with my partner, Aprilynne Alter :) Just launched! Planned monetization is sponsored messages or affiliate links for everyone that does not get matched. ",
    color: "#1DA1F2"
  },
  {
    title: "EasyUpload",
    link: "https://EasyUpload.dev",
    imgUrl: "/easyupload_logo.svg",
    desc: "Upload your mobile video to Instagram, YouTube, and TikTok all at once!",
    notes:
      "I planned to launch this project with the Creatornow team. Plan was to give the tool away for free to Creatornow users, and charge a small fee for non-creatornow users. I would also get an affiliate fee on anyone who signed up for Creatornow through the tool. The project never launched as Creatornow sold out before our planned release date.",
    color: "#D81B60"
  },
  {
    title: "Clipbot.tv",
    link: "https://clipbot.tv",
    imgUrl: "/clipbot-dark-social.png",
    desc: "Automatically upload your Twitch clips to TikTok and YouTube Shorts and grow overnight.",
    notes:
      "My first big solo project. Started as a desktop app, now a web app. Makes around $700/month. Currently trying to take this into B2B by pushing it into esports.",
    color: "#7B1FA2"
  },
  {
    title: "ClipThat.live",
    link: "https://clipthat.live",
    imgUrl: "/clipthat-logo.png",
    desc: "Just say \"Clip that\" to make a live clip on Twitch of the last 30 seconds of your stream.",
    notes:
      "Released for free as marketing for Clipbot.tv. Got a few hundred upvotes on reddit, but never took off. Three days later someone else released the same tool with the same name lol, they had a better marketing video than I did so they got over 1000 upvotes. Lesson learned :)",
    color: "#0097A7"
  },
  {
    title: "Delight Rewards",
    link: "https://delightrewards.com",
    imgUrl: "/delight-logo.avif",
    desc: "One app for rewards at all your favorite Restaurants. Pivoted to E-commerce referrals.",
    notes:
      "My first startup. I was the CMO and did everything from marketing to product to sales. We got $50k from an accelerator program and used it to live off of for years.I moved to Chicago to work on this full time, but got depressed and left.",
    color: "#F57C00"
  },
];

export default function Projects() {
  const router = useRouter();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const ProjectCard = ({
    imgUrl,
    title,
    description,
    link,
    notes,
    featured = false,
    color = "#333",
    index
  }: {
    imgUrl: string;
    title: string;
    description: string;
    link: string;
    notes: string;
    featured?: boolean;
    color?: string;
    index: number;
  }) => {
    return (
      <div
        className={`relative w-full max-w-3xl overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700 mb-12 ${
          featured ? "border-l-8" : "border-l-4"
        }`}
        style={{ 
          borderLeftColor: color,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      >
        {featured && (
          <div 
            className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold px-4 py-1.5 rounded-full z-10 shadow-md"
          >
            FEATURED
          </div>
        )}
        
        <div className="relative overflow-hidden" style={{ height: featured ? '280px' : '220px' }}>
          <img 
            src={imgUrl} 
            alt={`${title} logo`} 
            className="w-full h-full object-cover object-center"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-50"
          />
          <h2 
            className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-lg"
          >
            {title}
          </h2>
        </div>
        
        <div className="p-8">
          <p className="text-xl font-medium text-gray-800 dark:text-white mb-4">
            {description}
          </p>
          <p className="text-gray-700 dark:text-gray-200 mb-8 text-lg">
            {notes}
          </p>
          
          <button
            className="flex items-center text-white font-medium rounded-lg px-6 py-3 text-center text-lg shadow-md"
            style={{ 
              background: `linear-gradient(to right, ${color}, ${color}CC)`,
            }}
          >
            Visit Project
            <span className="ml-2">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 pt-10 pb-20 px-4"
    >
      <div className="text-center mb-16">
        {/* <h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          My Projects
        </h1> */}
        <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          I build tools that for creators. <br/>
          Here's some of my favorite stuff I've made.
        </p>
      </div>
      
      <div className="flex flex-col items-center w-full max-w-4xl">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title + "key"}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.desc}
            link={project.link}
            notes={project.notes}
            featured={project.featured}
            color={project.color}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
