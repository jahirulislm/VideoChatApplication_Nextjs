import React from "react";

import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/Sidebar";
function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
        <Sidebar />
      </div>
    </main>
  );
}

export default HomeLayout;
