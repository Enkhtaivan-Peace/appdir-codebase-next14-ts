import { Wrapper } from "a/components/ui/containers/Wrapper";
import { AnimeServices } from "a/features/anime/anime.services";
import Link from "next/link";
import React from "react";

type TParams = {
  params: {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
};

const ISRPage = async ({ params }: TParams) => {
  const data = await AnimeServices.get_ISR_or_SSG_AnimeList({ page: 1 });
  return (
    <Wrapper>
      <h1>ISR list page: </h1>
      <p>
        <strong>number</strong> яагаад refresh хийхэд өөрчлөгдөхгүй байгаа вэ
        гэвэл, nextjs - ийн cache - д revalidate: 5 гэж тохируулсан учраас 5
        секундын дараа refresh хийхэд шинээр дуудагдаж ажиллана{" "}
      </p>
      <ul className=" py-60">
        {data.map((item: any, idx: number) => (
          <li key={idx} className=" py-10">
            <Link href={"/render/isr/" + item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export async function generateStaticParams() {
  const preRenderedAnimeList = await AnimeServices.getAnimeList({
    page: 1,
    limit: 20,
  });
  return preRenderedAnimeList.map((anime: any, idx: number) => ({
    id: anime.id.toString(),
  }));
}

export default ISRPage;
