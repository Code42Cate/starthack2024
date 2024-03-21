import { SettingsIcon, MailWarning } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-full flex-row justify-between">
      <div className="flex h-full flex-col justify-between rounded-lg bg-gray-100 shadow-sm">
        <div className="flex flex-row items-center gap-2">
          <span className="m-4 h-3 w-3 rounded-full bg-[#FF6100]"></span>
          <span className="text-sm font-bold">Needs Review (3)</span>

          <SettingsIcon className="m-4 ml-auto h-5 w-5 cursor-pointer text-gray-500" />
        </div>
        <div className="flex w-96 flex-col gap-4 p-4">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-500">March 21</span>
            <span>
              This line is too dark. Please increase the pixel density. 🥺👉👈
            </span>

            <div className="flex flex-row items-center justify-end gap-4">
              <Image
                src="/avatar.png"
                width={24}
                height={24}
                alt="avatar"
                className="rounded-full object-contain"
              />

              <div className="flex flex-row items-center gap-1">
                <MailWarning className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-500">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between rounded-lg bg-gray-100 shadow-sm">
        <div className="flex flex-row items-center gap-2">
          <span className="m-4 h-3 w-3 rounded-full bg-green-600"></span>
          <span className="text-sm font-bold">Awaiting answer (1)</span>

          <SettingsIcon className="m-4 ml-auto h-5 w-5 cursor-pointer text-gray-500" />
        </div>

        <div className="flex w-96 flex-col gap-4 p-4">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-500">March 21</span>
            <span>Yeet pls gimme money 🥺👉👈</span>

            <div className="flex flex-row items-center justify-end gap-4">
              <Image
                src="/avatar.png"
                width={24}
                height={24}
                alt="avatar"
                className="rounded-full object-contain"
              />

              <div className="flex flex-row items-center gap-1">
                <MailWarning className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-500">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col justify-between rounded-lg bg-gray-100 shadow-sm">
        <div className="flex flex-row items-center gap-2">
          <span className="m-4 h-3 w-3 rounded-full bg-[#FF8900]"></span>
          <span className="text-sm font-bold">Interview scheduled (2)</span>

          <SettingsIcon className="m-4 ml-auto h-5 w-5 cursor-pointer text-gray-500" />
        </div>
        <div className="flex w-96 flex-col gap-4 p-4">
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-500">March 21</span>
            <span>Yeet pls gimme money 🥺👉👈</span>

            <div className="flex flex-row items-center justify-end gap-4">
              <Image
                src="/avatar.png"
                width={24}
                height={24}
                alt="avatar"
                className="rounded-full object-contain"
              />

              <div className="flex flex-row items-center gap-1">
                <MailWarning className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-500">2</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-500">March 21</span>
            <span>Yeet pls gimme money 🥺👉👈</span>

            <div className="flex flex-row items-center justify-end gap-4">
              <Image
                src="/avatar.png"
                width={24}
                height={24}
                alt="avatar"
                className="rounded-full object-contain"
              />

              <div className="flex flex-row items-center gap-1">
                <MailWarning className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-500">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
