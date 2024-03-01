import { PopupProvider } from "a/common/popup/usePopupCtx";
import { Wrapper } from "a/components/ui/containers/Wrapper";
import { Flex } from "a/components/ui/containers/flex/Flex";
import CachedTodoList from "a/features/todo-cached/CachedTodoList";
import { NextPage } from "next";
import React from "react";

const ClientCachePage: NextPage = () => {
  return (
    <PopupProvider>
      <Wrapper>
        <Flex className="w-full gap-20">
          <CachedTodoList />
        </Flex>
      </Wrapper>
    </PopupProvider>
  );
};

export default ClientCachePage;
