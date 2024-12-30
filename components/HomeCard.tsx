import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  img?: string;
  title: string;
  description: string;
  handleClick: () => void;
}
function HomeCard({
  className,
  img,
  title,
  description,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg w-full px-4 py-6 flex flex-col xl:max-w-[270px] min-h-[260px]",
        className
      )}
      onClick={handleClick}
    >
      <Image
        src={img || "/default-image.png"}
        width={27}
        height={27}
        alt="Meeting"
      />
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HomeCard;
