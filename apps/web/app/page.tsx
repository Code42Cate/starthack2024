import Link from "next/link";

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-xl rounded-md bg-white p-4 text-xl shadow-md">
        <span className="font-bold">
          Hey! This is the START Fellowship Submission from Team Hackasauraus
          Rex 🦖
        </span>
        <p className="mt-4 font-normal">Below are some pages to get started:</p>

        <div className="mt-4 flex flex-col gap-4">
          <Link href="/apply" className="underline underline-offset-2">
            Application Process
          </Link>

          <Link
            href="/fellows/checkout"
            className="underline underline-offset-2"
          >
            Startup Checkout Page
          </Link>

          <Link
            href="/admin/applications"
            className="underline underline-offset-2"
          >
            Application Management Kanban
          </Link>

          <Link
            href="/admin/fellows/21"
            className="underline underline-offset-2"
          >
            Admin Startup dashboard
          </Link>

          <Link href="/public/fellows" className="underline underline-offset-2">
            Public startup data
          </Link>

          <Link
            href="/public/partners"
            className="underline underline-offset-2"
          >
            Public partners page
          </Link>
        </div>
      </div>
    </div>
  );
}
