"use client";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import tokenProvider from "@/actions/stream.actions";
const apiKey = process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY;


export const StreamVideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    if (!apiKey) throw new Error("API key not provided");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user?.username || user?.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });
    setVideoClient(client);
  }, [user, isLoaded]);
  if (!videoClient) return <Loader />;
  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};
