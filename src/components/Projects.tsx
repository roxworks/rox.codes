import { ArrowRightIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Function to add UTM parameters to URLs
const addUtmParams = (url: string) => {
  const utmParams = new URLSearchParams({
    utm_source: 'rox.codes',
    utm_medium: 'portfolio',
    utm_campaign: 'projects',
    utm_content: 'project_card'
  });
  
  // Check if URL already has query parameters
  if (url.includes('?')) {
    return `${url}&${utmParams.toString()}`;
  } else {
    return `${url}?${utmParams.toString()}`;
  }
};

const projectsData = [
  {
    title: "FlightCast",
    link: "https://flightcast.com",
    imgUrl: "/flightcast.png",
    desc: "The first podcast hosting platform made for video",
    notes:
      "My newest project! FlightCast helps creators publish video podcasts everywhere in one click, with unified audio&video analytics across platforms.",
    featured: true,
    color: "#4158D0",
    active: true
  },
  {
    title: "ThumbnailTest.com",
    link: "https://ThumbnailTest.com",
    imgUrl: "/ThumbnailTest_Logo.svg",
    desc: "A/B Test Your Thumbnails Live On YouTube.",
    notes:
      "My most successful project to date. Built in under 30 days initially grew it over 18 months, then sold it as my first solid exit :)",
    featured: true,
    color: "#FF4500",
    active: true
  },
  {
    title: "ThumbnailCheck.com",
    link: "https://ThumbnailCheck.com",
    imgUrl: "/thumbnailcheck.png",
    desc: "Preview your thumbnail before you upload it to YouTube.",
    notes:
      "Built in 4 hours. A free tool to get people into ThumbnailTest.com. Easily my most successful free tool. Sold as part of ThumbnailTest.com acquisition.",
    color: "#00C853",
    active: true
  },
  {
    title: "MagicThumbnails.com",
    link: "https://MagicThumbnails.com",
    imgUrl: "https://magicthumbnails.com/mtexamples.png",
    desc: "Generate YouTube Thumbnails with AI",
    notes:
    "Tried super hard to make this really good, got it to a 5/10 or so and stopped - it now creates fiverr quality thumbnails. Sold as part of ThumbnailTest.com acquisition.",
    color: "#6200EA",
    active: false
  },
  {
    title: "ThumbnailFace.com",
    link: "https://ThumbnailFace.com",
    imgUrl: "/thumbnailface.jpeg",
    desc: "Make Thumbnail Quality Faces, In Bulk, In Seconds",
    notes:
      "Built in a weekend. Had plans to make it into some huge AI-Google-Drive type thing for sifting through files, but ended up having better ideas. Sold as part of ThumbnailTest.com acquisition.",
    color: "#FF6D00",
    active: false
  },
  {
    title: "BirdBuds",
    link: "https://BirdBuds.com",
    imgUrl: "/birdbudslogo.svg",
    desc: "Get matched with a new friend on Twitter every week.",
    notes:
      "Can you build an entire startup in just a twitter account? Yes. And I did! I built this with my partner, Aprilynne Alter :) Just launched! Planned monetization is sponsored messages or affiliate links for everyone that does not get matched. ",
    color: "#1DA1F2",
    active: false
  },
  {
    title: "EasyUpload",
    link: "https://EasyUpload.dev",
    imgUrl: "/easyupload_logo.svg",
    desc: "Upload your mobile video to Instagram, YouTube, and TikTok all at once!",
    notes:
      "I planned to launch this project with the Creatornow team. Plan was to give the tool away for free to Creatornow users, and charge a small fee for non-creatornow users. I would also get an affiliate fee on anyone who signed up for Creatornow through the tool. The project never launched as Creatornow sold out before our planned release date. Since been shut down by me.",
    color: "#D81B60",
    active: true
  },
  {
    title: "Clipbot.tv",
    link: "https://clipbot.tv",
    imgUrl: "/clipbot-dark-social.png",
    desc: "Automatically upload your Twitch clips to TikTok and YouTube Shorts and grow overnight.",
    notes:
      "My first big solo project. Started as a desktop app, now a web app. Made around $400/month. Ended up selling it for parts as it wasn't worth the time to maintain.",
    color: "#7B1FA2",
    active: true
  },
  {
    title: "ClipThat.live",
    link: "https://clipthat.live",
    imgUrl: "/clipthat-logo.png",
    desc: "Just say \"Clip that\" to make a live clip on Twitch of the last 30 seconds of your stream.",
    notes:
      "Released for free as marketing for Clipbot.tv. Got a few hundred upvotes on reddit, but never took off. Three days later someone else released the same tool with the same name lol, they had a better marketing video than I did so they got over 1000 upvotes. Lesson learned :)",
    color: "#0097A7",
    active: true
  },
  {
    title: "Delight Rewards",
    link: "https://delightrewards.com",
    imgUrl: "/delight-logo.avif",
    desc: "One app for rewards at all your favorite Restaurants. Pivoted to E-commerce referrals.",
    notes:
      "My first startup. I was the CMO and did everything from marketing to product to sales. We got $50k from an accelerator program and used it to live off of for years.I moved to Chicago to work on this full time, but got depressed and left.",
    color: "#F57C00",
    active: false
  },
];

export default function Projects() {
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState<string | null>(null);
  
  // Track scrolling to hide the scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  
  const ProjectCard = ({
    imgUrl,
    title,
    description,
    link,
    notes,
    featured = false,
    color = "#333",
    index,
    active = true
  }: {
    imgUrl: string;
    title: string;
    description: string;
    link: string;
    notes: string;
    featured?: boolean;
    color?: string;
    index: number;
    active?: boolean;
  }) => {
    // Get tracking URL if project is active
    const trackingUrl = active ? addUtmParams(link) : "#";
    
    // Handle click for inactive projects
    const handleInactiveClick = (e: React.MouseEvent) => {
      if (!active) {
        e.preventDefault();
        setShowPopup(title);
      }
    };
    
    return (
      <a
        href={trackingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleInactiveClick}
        className={`relative block w-full max-w-3xl overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-700 ${
          index === 0 ? "mb-8" : "mb-12"
        } cursor-pointer ${
          featured ? "border-l-8" : "border-l-4"
        } transition-all duration-300 hover:shadow-xl no-underline`}
        style={{ 
          borderLeftColor: color,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}
      >
        {featured && (
          <div 
            className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm font-bold px-4 py-1.5 rounded-full z-10 shadow-md"
          >
            FEATURED
          </div>
        )}
        
        {!active && (
          <div className="absolute top-4 right-4 bg-gray-700 text-white text-sm font-bold px-4 py-1.5 rounded-full z-10 shadow-md flex items-center">
            <InformationCircleIcon className="h-4 w-4 mr-1" />
            INACTIVE
          </div>
        )}
        
        <div className="relative overflow-hidden" style={{ height: index === 0 ? '240px' : featured ? '280px' : '220px' }}>
          <img 
            src={imgUrl} 
            alt={`${title} logo`} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
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
          
          <div className="flex">
            <div
              className="flex items-center text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110"
              style={{ 
                background: `linear-gradient(to right, ${color}, ${color}CC)`,
              }}
            >
              {active ? "Visit Project" : "View Details"}
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-12 px-4"
    >
      <div className="text-center mb-10">
        <h1 
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          My Projects
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          I build tools that help creators grow and monetize their audience. 
          Here are some of my favorite projects.
        </p>
      </div>
      
      <div className="flex flex-col items-center w-full max-w-4xl pb-20">
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
            active={project.active}
          />
        ))}
      </div>
      
      {/* Scroll indicator that disappears after scrolling */}
      {!hasScrolled && (
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <p className="text-sm mb-2">Scroll to see more</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
      
      {/* Popup for inactive projects */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPopup(null)}>
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project No Longer Active</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {showPopup} is no longer active. This project has been shut down and is no longer available.
            </p>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 text-center transition-colors duration-300"
              onClick={() => setShowPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
