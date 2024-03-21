import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function FellowsMainPage() {
  return (
    <div className="mt-4 flex w-fit flex-col gap-4">
      <h1 className="text-xl font-bold">Welcome, Vasilis!</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex h-52 w-96 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Fellow Fellows</h2>
          <p>
            Connect with other founders and alumni through a comprehensive
            database of 42 startups
          </p>

          <Link
            href="/public/fellows"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="col-span-1 flex h-52 w-96 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">
            Partner &#38; Mentors
          </h2>
          <p>
            Find new contacts and mentors to help you grow your startup through
            any challenges
          </p>

          <Link
            href="/public/partners"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="col-span-1 flex h-52 w-96 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Your startup</h2>
          <p>
            Manage your startup profile, update your progress and share your
            story with the community
          </p>

          <Link
            href="/public/fellows/1"
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="col-span-1 flex h-52 w-96 flex-col gap-2 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Requests</h2>
          <p>View your requests that you have submitted to START</p>

          <Link
            href="/fellows/requests"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
