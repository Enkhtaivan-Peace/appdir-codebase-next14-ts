import React from "react";
import { IAnimeProp } from "./AnimeList";
import Image from "next/image";
import { MotionDiv } from "a/components/ui/motion/MotionDiv";
import Link from "next/link";
import { Flex } from "a/components/ui/containers/flex/Flex";

interface IAnimeCard extends IAnimeProp {
  idx: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function AnimeCard(props: IAnimeCard) {
  const { image, name, kind, episodes, episodes_aired, score, idx, id } = props;

  return (
    <MotionDiv
      className="card"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: idx * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one/${image.original}`}
          alt={name}
          className="rounded-xl"
          width={420}
          height={760}
        />
      </div>
      <Flex className="flex-col gap-10">
        <Flex className="flex-col items-center">
          <Link href={"/animes/" + id}>
            <h2 className="">{name}</h2>
          </Link>
          <p className="text-sm">{kind}</p>
        </Flex>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold">{episodes || episodes_aired}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </Flex>
    </MotionDiv>
  );
}

export default AnimeCard;
