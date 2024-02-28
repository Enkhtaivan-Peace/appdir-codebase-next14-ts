import { Wrapper } from "a/components/ui/containers/Wrapper";
import { Flex } from "a/components/ui/containers/flex/Flex";
import GotoBtn from "a/features/render/ssr/GotoBtn";
import { getRandomNumber } from "a/features/render/ssr/_ssr-actions";
import { NextPage } from "next";
import React from "react";

const SSRpage: NextPage = async () => {
  const { random } = await getRandomNumber();

  return (
    <Wrapper>
      <Flex className="flex-col gap-20">
        <h4>{random || "байхгүй"}</h4>
        <GotoBtn />
      </Flex>
    </Wrapper>
  );
};

export default SSRpage;
