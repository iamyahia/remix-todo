import React from "react";
import { cn } from "~/lib/utils";
import { HeartTick } from "iconsax-react";

import cardVariants from "./card.styles";
import { VariantProps } from "class-variance-authority";
import { Button } from "../ui/button";

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
    {
      title: "dd",
      total: 243,
      icon: HeartTick,
    },
    {
      title: "dd",
      total: 243,
      icon: HeartTick,
    },
  ];
  return cards.map((card, index) => (
    <div className={cn(cardVariants({ variant: card.title }))} key={index}>
      <div>
        <h6>{card.title}</h6>
        <p>{card.total}</p>
        <Button>Button</Button>
      </div>
      {<card.icon />}
    </div>
  ));
}

export { CardBox };
