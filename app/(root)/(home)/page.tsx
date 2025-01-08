import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

function Home() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-contain bg-no-repeat">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-10">
          <h2>A Video Chatting Application like Zoom</h2>
          <div className="flex flex-col gap-2">
            <h1>{time}</h1>
            <p>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
