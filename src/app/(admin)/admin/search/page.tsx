import InputSearchUnControl from 'a/components/ui/form/elements/input/search/InputSearchUnControl';
import Paginate from 'a/components/ui/pagination/Paginate';
import TodoListTable from 'a/features/todo/TodoListTable';
import { getTodoList } from 'a/features/todo/_todo-actions';
import { NextPage } from 'next'
import React, { Suspense } from 'react'

interface ISearchPage {
    searchParams?: TSearchParams
}

const SearchPage : NextPage = async (props:ISearchPage) => {
    const { searchParams } = props
    const search = searchParams?.search || null
    const page = Number(searchParams?.page) || 1
    const limit = Number(searchParams?.limit) || 10
    const todos = await getTodoList({ search, page, limit })
    const pagination = todos.paginate!
    
    console.log('bbb', pagination)
  return (
    <div>
        <InputSearchUnControl id='search-input' name={'search'} />
        <div className='py-30'>
            <Suspense key={'todolisttable-' + page} fallback={'уншиж байна ...'}>
                <TodoListTable 
                  search={search} 
                  page={page} 
                  limit={limit}
                  />           
            </Suspense>
        </div>
        <div className='mt-10 flex w-full justify-center'>
           <Paginate {...pagination} />
        </div>
    </div>
  )
}

export default SearchPage