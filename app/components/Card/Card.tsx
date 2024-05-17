import React from "react";
import { cn } from "~/lib/utils";
import { HeartTick } from "iconsax-react";

import cardVariants from "./card.styles";
import { VariantProps } from "class-variance-authority";

export interface CardBoxProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {}

function CardBox({}: CardBoxProps) {
  const cards = [
    {
      title: "students",
      total: 243,
      icon: HeartTick,
    },
    {
      title: "courses",
      total: 3,
      icon: HeartTick,
    },
    {
      title: "payments",
      total: 10000,
      icon: HeartTick,
    },
    {
      title: "users",
      total: 243,
      icon: HeartTick,
    },
  ];

  return (
    <div className="flex flex-wrap m-7 ">
      {cards.map((card, index) => (
        <div
          className={cn(
            cardVariants({ variant: card.title }),
            "flex justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4  px-6 py-12 rounded-lg"
          )}
          key={index}
        >
          <div className="">
            <h6>{card.title}</h6>
            <p>{card.total}</p>
          </div>
          {<card.icon size={58} />}
        </div>
      ))}
    </div>
  );
}

export { CardBox };
