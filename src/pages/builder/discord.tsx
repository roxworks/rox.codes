import { useRouter } from "next/router";

const FS_TEXT =
  "Click below to schedule a call with me on Sunday to chat about this :D";

const NOT_FS_TEXT =
  "Please join this discord server and I will DM you if I think of any cool ideas for us to work on together :D";

export default function BuilderSubmissionPage() {
  const router = useRouter();
  const { name } = router.query;
  const fs = "0";

  if(!fs) return null;

  const href = "https://discord.gg/3Z9Z9Z9";

  return (
    <div className="lg:max-h-screen lg:overflow-hidden">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white gap-10">
        <h1 className='text-5xl'>Thanks for filling out the form{name ? ', ' + name + '!' : '!'}</h1>
        <p className='text-xl text-center'>Please join this discord server.<br/> I will DM you if I think of any cool ideas for us to work on together :D</p>
        <a href={href} className=' rounded-3xl px-4 py-3 bg-gray-700 font-semibold'>
            Join the discord
        </a>
      </main>
    </div>
  );
}
