import { StreamVideoProvider } from "@/providers/StreamClientProvider";

// import React from "react";

// function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <main>
//       <StreamVideoProvider>{children}</StreamVideoProvider>
//     </main>
//   );
// }

// export default RootLayout;
import { Children, ReactNode } from 'react';

// import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      {/* <StreamVideoProvider>{children}</StreamVideoProvider> */}
      {children}
    </main>
  );
};

export default RootLayout;