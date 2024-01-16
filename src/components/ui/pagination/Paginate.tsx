'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import tw from 'tailwind-styled-components'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Paginate(props:TPaginate) {
    const { total, pageCount, start, end, limit, nextPage, prevPage  } = props
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const pageNumbers = Array.from({ length: pageCount })
    console.log('pageNumbers', pageNumbers)
    function createPageURL(pageNumber:number | string) {
        const params = new URLSearchParams(searchParams)
        params.set('page', pageNumber.toString())
        return `${pathname}?${params.toString()}`
    }

  return (
    <PaginationContainer>
        <p className="text-emerald-700 font-bold">
            Showing {(currentPage - 1) * limit + 1}-{Math.min(currentPage * limit, total)} of{' '}
            {total}
        </p>
        <PaginationTw>
            <li>
                <button className={ currentPage === 1 ? 'text-emerald-500 cursor-not-allowed' : '' }>
                    <FaAngleLeft />
                </button>
            </li>
            {
                currentPage > 2 &&
                <li>
                     ...   
                </li>
            }
            {
                pageNumbers.map(( number, idx:number ) => (
                    <li key={'pagination-button' + idx}>
                         <button 
                            className={number === currentPage ? 'bg-emerald-600 text-white' : 'bg-white'}
                            onClick={() => createPageURL(idx)}
                         >
                            { idx + 1 }
                         </button>
                    </li>    
                ))
            }
            {
                currentPage < pageNumbers.length - 2 && (
                    <div className='flex items-end font-bold text-emerald-700'>...</div>
                )
            }
            <li>
                <button className={currentPage === pageCount ? 'text-emerald-500 cursor-not-allowed' : ''}>
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

export default Paginate