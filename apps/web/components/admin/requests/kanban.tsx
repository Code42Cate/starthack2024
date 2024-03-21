"use client";
import clsx from "clsx";
import { MailWarning, SettingsIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

type Request = {
  text: string;
  date: string;
  avatar: string;
  status: string;
};

const status = {
  "Needs Review": "bg-[#FF6100]",
  "Awaiting Answer": "bg-green-600",
  "Interview Scheduled": "bg-[#FF8900]",
};

function RequestCard({ text, date, avatar }: Request) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: text + date,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <span className="text-sm text-gray-500">{date}</span>
      <span>{text}</span>

      <div className="flex flex-row items-center justify-end gap-4">
        <Image
          src={avatar}
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
  );
}

function KanbanColumn({
  status,
  name,
  children,
  requests,
}: {
  name: string;
  status: string;
  children: any;
  requests: Request[];
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      className={clsx(
        "flex h-full flex-col justify-between rounded-lg bg-gray-100 shadow-sm",
        {
          "border-2 border-green-500": isOver,
          "border-2 border-transparent": !isOver,
        },
      )}
      ref={setNodeRef}
    >
      <div className="flex flex-row items-center gap-2 p-4">
        <span
          className={`h-3 w-3 rounded-full ${status} ${
            isOver ? "bg-opacity-50" : ""
          }`}
        ></span>
        <span className="text-sm font-bold">
          {name} ({requests.filter((app) => app.status === name).length})
        </span>
        <SettingsIcon
          className="ml-auto h-5 w-5 cursor-pointer text-neutral-500"
          style={style}
        />
      </div>
      <div className="flex w-96 flex-col justify-start gap-4 p-4">
        {children}
      </div>
    </div>
  );
}

export default function Kanban({ baseRequests }: { baseRequests: Request[] }) {
  const [requests, setRequests] = useState(baseRequests);

  return (
    <DndContext
      onDragEnd={({ active, over }) => {
        if (active.id === over.id) return;

        const activeIndex = requests.findIndex(
          (app) => app.text + app.date === active.id,
        );

        const newrequests = [...requests];
        newrequests[activeIndex].status = over.id.toString();
        setRequests(newrequests);
      }}
    >
      {Object.entries(status).map(([key, value]) => (
        <KanbanColumn status={value} name={key} key={key} requests={requests}>
          {requests
            .filter((app) => app.status === key)
            .map((app) => (
              <RequestCard key={app.date} {...app} />
            ))}
        </KanbanColumn>
      ))}
    </DndContext>
  );
}
