import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";

export default function StoryPage() {
  return (
    <>
      <NavBar />
      <div className='bg-gray-800 flex flex-col items-center justify-center pt-10 h-full'>
        <Timeline />
      </div>
    </>
  );
}
