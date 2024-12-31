import StreamVideoProvider from "@/providers/StreamClientProvider";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StreamVideoProvider>
      <main>{children}</main>
    </StreamVideoProvider>
  );
}

export default RootLayout;
