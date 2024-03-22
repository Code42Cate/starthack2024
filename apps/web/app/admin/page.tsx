import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-4 flex h-screen w-fit flex-col gap-4">
      <h1 className="text-xl font-bold">Welcome, Vasilis!</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 flex h-52 w-full flex-col gap-2 rounded-lg border border-neutral-200 bg-gray-50 p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Fellows</h2>
          <p>
            Manage, analyze, and work with the startups that are part of the
            START Fellowship.
          </p>

          <Link
            href="/admin/fellows"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="col-span-1 flex h-52 w-full flex-col gap-2 rounded-lg border border-neutral-200 bg-gray-50 p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">
            Partner &#38; Mentors
          </h2>
          <p>
            Manage the partners and mentors that are part of the START
            Fellowship.
          </p>

          <Link
            href="/admin/partners"
            className="group ml-auto mt-auto flex flex-row items-center gap-1 underline-offset-4 hover:text-[#FF6100] hover:underline"
          >
            Explore
            <ArrowRightIcon className="group-hover:text-primary-500 ml-2 h-4 w-4 transform transition-colors duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="col-span-1 flex h-52 w-full flex-col gap-2 rounded-lg border border-neutral-200 bg-gray-50 p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Applications</h2>
          <p>
            Manage incoming applications from startups that are interested in
            the START Fellowship and assign them to your teammates on a Kanban
            board.
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

        <div className="col-span-1 flex h-52 w-full flex-col gap-2 rounded-lg border border-neutral-200 bg-gray-50 p-4 shadow-sm transition-all hover:scale-[1.02]">
          <h2 className="text-lg font-bold text-[#FF6100]">Requests</h2>
          <p>
            View and manage requests that startups have made to START
            Fellowship.
          </p>

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
