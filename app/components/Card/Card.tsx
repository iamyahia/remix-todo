import React from "react";
import { cn } from "~/lib/utils";
import { DollarSquare, HeartTick, Profile2User, Save2 } from "iconsax-react";

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
      iconColor: "74C1ED",
    },
    {
      title: "courses",
      total: 3,
      icon: Save2,
      iconColor: "EE95C5",
    },
    {
      title: "payments",
      total: 10000,
      icon: DollarSquare,
      iconColor: "F6C762",
    },
    {
      title: "users",
      total: 243,
      icon: Profile2User,
      iconColor: "80CC90",
    },
  ];

  return (
    <div className="flex flex-wrap m-7 ">
      {cards.map((card, index) => (
        <div
          className={cn(
            cardVariants({ variant: card.title }),
            "flex justify-between w-full sm:w-1/2 md:w-1/3 lg:w-1/4  px-6 py-12 rounded-lg text-[#6C6C6C]"
          )}
          key={index}
        >
          <div className="">
            <h6>{card.title}</h6>
            <p className="font-bold">{card.total}</p>
          </div>
          {<card.icon className={`text-[#${card.iconColor}]`} size={58} />}
        </div>
      ))}
    </div>
  );
}

export { CardBox };
