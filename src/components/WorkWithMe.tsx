import Link from "next/link";

export default function WorkWithMe() {
  return (
    <div className="p-4 pb-16 flex h-full min-h-screen flex-col items-center bg-gray-800 pt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Work With Me</h1>
        <p className="pt-5 text-center text-2xl text-gray-400">
          There are three ways to work with me.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          We can start a business together, you can work for me, or you can pay me for a consulting call.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          I've stopped coding for money, but I'm happy to chat and be helpful however I can.
        </p>
        <p className="pt-5 text-center text-2xl text-gray-400">
          I read all messages sent through this page :D
        </p>
        <div className="flex flex-col items-center justify-around lg:w-2/3 ">
          <button className="mt-5 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a href="mailto:hitmeup@rox.codes?subject=I%20want%20to%20start%20a%20business%20with%20you&body=Hey%20Rox%2C%0A%0AI%27m%20___%2C%0A%0AI%27ve%20seen%20your%20other%20work%2C%20and%20want%20to%20work%20with%20you.%0A%0AHere%27s%20my%20idea%3A%20_____%0A%0AI%20think%20you%27d%20be%20perfect%20for%20this%20because%20____" target="_blank" rel='noreferrer'>Start A Business With Me</a>
          </button>
          <button className="mt-5 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a target="_blank" rel='noreferrer' href="mailto:jobs@rox.codes?subject=I%20want%20to%20work%20for%20you&body=Hey%20Rox!%0A%0AMy%20name%20is%20%5BNAME%5D%20and%20I'd%20like%20to%20work%20for%20you%20as%20a%20%5BJOB%20TITLE%5D.%0A%0AIn%20the%20past%2C%20I've%20done%20%5BEXPERIENCE%5D.%0A%0AWhat%20makes%20me%20cool%20is%20%5BX%2FY%2FZ%5D.%0A%0AI%20want%20to%20be%20paid%20%5BSALARY%20IN%20USD%5D%2C%20and%20work%20%5BPART-TIME%2FFULL-TIME%2FALL-THE-TIME%5D.%0A%0AI%20understand%20you%20are%20busy%2C%20and%20accept%20that%20this%20email%20might%20only%20receive%20a%20one%20word%20answer.%0A%0AThanks%20for%20your%20consideration%2C%0A%0A-%20%5BNAME%5D">Work For Me</a>
          </button>
          {/* <button className="mt-5 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a href="mailto:hitmeup@rox.codes?subject=I%20want%20to%20sponsor%20you&body=Hey%20Rox%2C%0D%0A%0D%0AI'm%20___%2C%0D%0A%0D%0AMy%20company%20is%20____%2C%20we%20do%20____.%0D%0A%0D%0AI've%20seen%20your%20content%2C%20and%20want%20to%20sponsor%20you.%0D%0A%0D%0AWe're%20interested%20in%20a%20%5Bregular%20twitch%20stream%2C%20dev%20game%20show%20event%2C%20monthly%20twitch%20channel%20sponsor%2C%20anything%5D.%0D%0A%0D%0AWe%20have%20some%20ideas%20on%20how%20to%20best%20show%20off%20our%20product%3A%20%5Bbuild%20something%20with%20it%2C%20incorporate%20it%20into%20the%20game%20show%20in%20some%20way%2C%20shout%20it%20out%20whenever%20I%20need%20to%20do%20X%20on%20stream%2C%20etc%20(any%20idea%20you%20have)%5D%0D%0A%0D%0AOur%20budget%20is%20up%20to%20%24____%2C%20we'd%20like%20to%20sponsor%20%5BX%20hours%20of%20stream%2C%20X%20game%20shows%2C%20X%20months%20of%20channel%20sponsorship%5D.%0D%0A%0D%0AWe're%20prepared%20to%20pay%20you%20%5B%24200%2Fhr%20live%2C%20%241000%2Fevent%2C%20%24500%2Fmonth%20for%20a%20channel%20sponsorship%5D.%0D%0A%0D%0AWhat%20do%20you%20think%3F%0D%0A%0D%0A%0D%0A%0D%0A" target="_blank" rel='noreferrer'>Sponsor me</a>
          </button> */}
          <button className="mt-5 rounded text-xl bg-green-600 py-2 px-4 font-bold text-white hover:bg-green-700">
            <a href="https://cal.com/roxcodes" target="_blank" rel='noreferrer'>Book a consulting call</a>
          </button>
        </div>
      </div>
    </div>
  );
}
