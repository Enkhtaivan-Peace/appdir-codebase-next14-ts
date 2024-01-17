'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import tw from 'tailwind-styled-components'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Paginate(props:TPaginate) {
    const { total, pageCount, start, end, limit, nextPage, prevPage  } = props

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const pageNumbers:Array<number> = []
    for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(i);
    }
   
    function createPageURL(pageNumber:number | string) {
        if( currentPage === pageNumber ) return
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        const url = `${pathname}?${params.toString()}`
        router.push(url)
    }

    function handleNext() {
        if( nextPage === 0 ) return
        createPageURL(nextPage)
    }

    function handlePrev() {
        if(prevPage === pageCount) return 
        createPageURL(prevPage)
    }

    const renderPaginationButtons = () => {
        // debugger
        
        return Array(pageCount).fill('').map((_, idx) =>     
            <li key={'pagination-button' + idx}>
                <PaginationBtn onClick={() => createPageURL(idx + 1)} className={ currentPage === (idx + 1) ? 'bg-emerald-700' : '' }>
                    <span className='text-12 text-white'>{ idx + 1 }</span>
                </PaginationBtn>
            </li> 
        ).slice(currentPage-4 < 0 ? 0 : currentPage-4,currentPage+1 < 5 ? 5 : currentPage+1)
      };

  return (
    <PaginationContainer>
        <p className="text-emerald-700 font-bold">
            Showing {(currentPage - 1) * limit + 1}-{Math.min(currentPage * limit, total)} of{' '}
            {total}
        </p>
        <PaginationTw>
            <li>
                <button 
                    disabled={currentPage === 1} 
                    onClick={handlePrev}   
                    className={currentPage === 1 ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAngleLeft />
                </button>
            </li>
            {
                currentPage > 4 &&
                <li>
                     ...   
                </li>
            }
            {
                renderPaginationButtons()
            }
            {
                currentPage < pageNumbers.length - 2 && (
                    <div className='flex items-end font-bold text-emerald-700'>...</div>
                )
            }
            <li aria-disabled={currentPage === pageCount}>
                <button 
                    disabled={currentPage === pageCount} 
                    onClick={handleNext}   
                    className={currentPage === pageCount ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAngleRight />
                </button>
            </li>
        </PaginationTw>
    </PaginationContainer>
  )
}

export const PaginationContainer = tw.div`
    flex
    justify-between
    items-center
    my-10
`

export const PaginationTw = tw.ul`
    flex
    items-center
    gap-10
`

export const PaginationBtn = tw.button`
    flex
    justify-center
    items-center
    min-w-30
    min-h-30
    rounded
    bg-emerald-500
    hover:bg-emerald-700
`

export default Paginate