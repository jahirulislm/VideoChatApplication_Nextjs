import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      navbar
      {children}
      footer
    </main>
  );
}

export default RootLayout;
