import { Wrapper } from "a/components/ui/containers/Wrapper";
import AnimeDetail from "a/features/anime/AnimeDetail";
import { AnimeServices } from "a/features/anime/anime.services";
import { NextPage } from "next";
import React, { Suspense } from "react";

const ISrDetailPage: NextPage = async (props: any) => {
  const id = props.params.id;
  const data = await AnimeServices.get_ISR_or_SSG_AnimeDetail(id);
  return (
    <Wrapper>
      <h4>SSG DetailPage: {id}</h4>
      <Suspense fallback={<h3>уншжийнаа ...</h3>}>
        <AnimeDetail data={data} />
      </Suspense>
    </Wrapper>
  );
};

export default ISrDetailPage;
