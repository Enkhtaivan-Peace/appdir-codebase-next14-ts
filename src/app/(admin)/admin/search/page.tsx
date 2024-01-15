import InputSearchUnControl from 'a/components/ui/form/elements/input/search/InputSearchUnControl';
import TodoListTable from 'a/features/todo/TodoListTable';
import { NextPage } from 'next'
import React, { Suspense } from 'react'

interface ISearchPage {
    searchParams?: TSearchParams
}

const SearchPage : NextPage = (props:ISearchPage) => {
    const { searchParams } = props
    const search = searchParams?.search || null
    const page = Number(searchParams?.page) || 1
    const limit = Number(searchParams?.limit) || 1
  return (
    <div>
        <InputSearchUnControl id='search-input' name={'search'} />
        <Suspense key={'todolisttable-' + page} fallback={'уншиж байна ...'}>
            <TodoListTable 
              search={search} 
              page={page} 
              limit={limit}
            />           
        </Suspense>
        <div className='mt-10 flex w-full justify-center'>
             {/* <Pagination totalPages={totalPages} /> */}
        </div>
    </div>
  )
}

export default SearchPage