import { StreamVideoProvider } from "@/providers/StreamClientProvider";

import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <StreamVideoProvider>{children}</StreamVideoProvider> */}
      {children}
    </main>
  );
}

export default RootLayout;
