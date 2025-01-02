"use client";

import Image from "next/image";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Loader from "./Loader";
import { useToast } from "@/hooks/use-toast";

function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoinMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setcallDetails] = useState<Call>();
  // getting user using clerk
  const { user } = useUser();
  // initialize meeting state using stream client
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    const { toast } = useToast();

    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: "Please select a date and time" });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      console.log(call);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setcallDetails(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: "Meeting Created",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting" });
    }
  };
  if (!client || !user) return <Loader />;
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
