import Link from "next/link";

export default function WorkWithMe() {
  return (
    <div className="p-4 pb-16 flex h-full min-h-screen flex-col items-center bg-gray-800 pt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Work With Me</h1>
        <p className="pt-5 text-center text-2xl text-gray-400">
          There are two ways to work with me.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          We can start a business together, or you can pay me a lot of money to
          build you a quick one-off project.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          The most recent one-off project I built was <Link className='underline' href="https://excuses.ai" target="_blank" rel='noreferrer'>Excuses.ai</Link>, and it took me 10 hours total.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          I read all messages sent through this page :D
        </p>
        <div className="flex flex-col items-center justify-around lg:w-2/3 lg:flex-row">
          <button className="mt-10 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a href="mailto:hitmeup@rox.works?subject=I%20want%20to%20start%20a%20business%20with%20you&body=Hey%20Rox%2C%0A%0AI%27m%20___%2C%0A%0AI%27ve%20seen%20your%20other%20work%2C%20and%20want%20to%20work%20with%20you.%0A%0AHere%27s%20my%20idea%3A%20_____%0A%0AI%20think%20you%27d%20be%20perfect%20for%20this%20because%20____" target="_blank" rel='noreferrer'>Start A Business With Me</a>
          </button>
          <button className="mt-10 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a href="mailto:hitmeup@rox.works?subject=I%20want%20to%20pay%20you%20to%20build%20me%20something%20awesome&body=Hey%20Rox%2C%0A%0AI%27d%20like%20you%20to%20build%20_____%20for%20me.%0A%0AI%27m%20happy%20to%20pay%20your%20price%20of%20%24200%2Fhour%20or%20%242000%2Fday.%0A%0AMy%20total%20budget%20is%20%24____%2C%20so%20you%27d%20have%20to%20finish%20within%20___%20hours%2Fdays." target="_blank" rel='noreferrer'>Pay Me $200/hr</a>
          </button>
        </div>
      </div>
    </div>
  );
}
