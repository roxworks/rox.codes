import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

import { trpc } from "../utils/trpc";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";


const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const router = useRouter();

  if(router.query.via === 'ali') {
    router.push('https://thumbnailtest.com/?via=ali');
  }

  // angle 5 degrees on hove
  const linkStyle =
    "flex w-full flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 text-center hover:scale-105 transition-transform duration-200 hover:rotate-1";
  const h3Style = "text-2xl font-medium";

  const ClickThrough = ({
    href,
    innerText,
    titleText,
    newTab
  }: {
    href: string;
    innerText: string;
    titleText: string;
    newTab?: boolean;
  }) => {
    return (
      <Link
        className="w-fit 
              cursor-pointer 
              underline 
              decoration-1 
              transition-all	
              duration-500 
              hover:rounded-lg
              hover:bg-sky-600
              hover:px-2
              hover:py-1
              hover:text-black
              hover:no-underline" //hover:bg-gradient-to-t from-sky-500 hover:transition-all
        href={href}
        title={titleText}
        target={newTab ? "_blank" : undefined}
      >
        {innerText}
      </Link>
    );
  };

  return (
    <>
      <Head>
        <title>Hi, I'm Rox! - I Build Creator Tools</title>
        <meta name="description" content="I build cool stuff for creators" />
        <meta name="facebook-domain-verification" content="memkcgqtvtfbym9i431pw9zm15eyd1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:overflow-hidden lg:max-h-screen">
        <NavBar />
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
          <div className="w-full mb-2 flex flex-col items-center justify-start px-4">
            {/* picture of roxcodes on github */}
            <Image
              src="https://github.com/roxworks.png"
              alt="Picture of the author"
              width={100}
              height={100}
              className="mb-4 rounded-full"
            />
            <div className="flex w-full flex-col gap-2 text-center text-[6vw] text-white md:text-2xl lg:w-[70%]">
              <div>
                <span>Hey! I&apos;m Rox. </span>
              </div>
              <div>
                <ClickThrough
                  href="/projects"
                  innerText="I make cool stuff for creators."
                  titleText="See my projects"
                />
              </div>
              <div>
                <span>I&apos;ve worked for </span>
                <ClickThrough
                  href="/experience"
                  innerText="MrBeast, Facebook, Microsoft"
                  titleText="See my work experience"
                />
                <span>, and many others. </span>
              </div>
              <div>
                <span>Now, </span>
                <ClickThrough
                  href="/workwithme"
                  innerText="I help big creators start software businesses."
                  titleText="Work with me"
                />
              </div>
              <div>
                <span>
                  I make{" "}
                  <ClickThrough
                    href="https://linktr.ee/roxcodes"
                    innerText="content"
                    titleText="My Content Links"
                    newTab
                  />{" "}
                  about what I build.{" "}
                </span>{" "}
              </div>
              <div>
                <ClickThrough
                  href="/story"
                  innerText="I'm trying to live the most amazing life I can."
                  titleText="My Life Story"
                />
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
