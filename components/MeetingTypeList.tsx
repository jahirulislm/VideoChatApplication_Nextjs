"use client";

import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/router";
import MeetingModal from "./MeetingModal";

function MeetingTypeList() {
  // const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoinMeeting" | "isInstantMeeting" | undefined
  >(undefined);

  const createMeeting = () => {};
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-blue-500"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule meeting"
        description="Start an instant meeting"
        handleClick={() => {}}
        className="bg-red-500"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View recording"
        description="Start an instant meeting"
        handleClick={() => {}}
        className="bg-yellow-500"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join the meeting"
        description="Start an instant meeting"
        handleClick={() => {}}
        className="bg-green-500"
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}

export default MeetingTypeList;
