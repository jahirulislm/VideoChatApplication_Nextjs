import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "../MobileNav";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/icons/android-chrome-192x192.png"}
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Video Chatt
        </p>
      </Link>
      {/* // mobile navigation */}
      <div className="flex-between gap-5">
        {/* /clerk user management */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
