import { useRouter } from "next/router";

const FS_TEXT =
  "Click below to schedule a call with me on Sunday to chat about this :D";


export default function BuilderSubmissionPage() {
  const router = useRouter();
  const { name } = router.query;
  const fs = "1";

  if(!fs) return null;

  const href = "https://cal.com/roxcodes/possible-builder-chat"

  return (
    <div className="lg:max-h-screen lg:overflow-hidden">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white gap-10">
        <h1 className='text-5xl'>Thanks for filling out the form{name ? ', ' + name + '!' : '!'}</h1>
        <p className='text-xl'>{FS_TEXT}</p>
        <p>If you don&apos;t have time for a call, <a href="https://discordapp.com/users/122161737016279042">Add me on discord (Rox#0074)</a> and we can hopefully chat. </p>
        <a href={href} className=' rounded-3xl px-4 py-3 bg-gray-700 font-semibold'>
            {fs ? "Schedule a call" : "Join the discord"}
        </a>
      </main>
    </div>
  );
}
