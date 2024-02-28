import { Wrapper } from "a/components/ui/containers/Wrapper";
import { AnimeServices } from "a/features/anime/anime.services";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

type TParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: TParams) {
  const animeDetail = await AnimeServices.get_ISR_or_SSG_AnimeDetail(
    +params.id
  );
  return {
    title: "test-test",
    description: `this is the page of ${animeDetail.name}`,
  };
}

export async function generateStaticParams() {
  const preRenderedAnimeList = await AnimeServices.getAnimeList({
    page: 1,
    limit: 20,
  });
  return preRenderedAnimeList.map((anime: any) => ({
    id: anime.id.toString(),
  }));
}

const SSGPage: NextPage = async () => {
  const data = await AnimeServices.get_ISR_or_SSG_AnimeList({ page: 1 });

  return (
    <Wrapper>
      <h1>SSG list page: </h1>
      <ul className=" py-60">
        {data.map((item: any, idx: number) => (
          <li key={idx} className=" py-10">
            <Link href={"/render/ssg/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default SSGPage;
