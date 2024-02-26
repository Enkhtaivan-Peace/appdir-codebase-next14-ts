import { Flex } from "a/components/ui/containers/flex/Flex";
import InputSearchUnControl from "a/components/ui/form/elements/input/search/InputSearchUnControl";
import Paginate from "a/components/ui/pagination/old/Paginate";
import PaginateComplex from "a/components/ui/pagination/old/PaginateComplex";
import TodoListTable from "a/features/todo/TodoListTable";
import { getTodoList } from "a/features/todo/_todo-actions";
import { NextPage } from "next";
import Link from "next/link";
import React, { Suspense } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";

const SearchPage: NextPage = async (props: TPageProps) => {
  const { searchParams } = props;

  const search = searchParams?.search || null;
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const todos = await getTodoList({ search, page, limit });
  const pagination = todos.paginate!;

  return (
    <div>
      <Flex className="flex-col gap-30">
        <Link
          href={"/admin/search/add"}
          className="flex gap-10 items-center bg-emerald-500 w-fit py-5 px-20 rounded text-white"
        >
          <p>Шинээр нэмэх</p>
          <BsPlusSquareDotted />
        </Link>
        <InputSearchUnControl
          id="search-input"
          name={"search"}
          placeholder="шүүлт хийх ..."
        />
      </Flex>
      <div className="py-30">
        <Suspense key={"todolisttable-" + page} fallback={"уншиж байна ..."}>
          <TodoListTable search={search} page={page} limit={limit} />
        </Suspense>
      </div>
      <div className="mt-10 flex w-full">
        {/* <Paginate {...pagination} /> */}
        <PaginateComplex {...pagination} />
      </div>
    </div>
  );
};

export default SearchPage;
