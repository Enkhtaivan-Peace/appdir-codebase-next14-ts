'use client'
import { Button } from "a/components/ui/button"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useRef, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import useQueryParams from "../url/useQueryParams"

type TDialog = {
    title: string,
    onClose: () => void,
    onOk: () => void,
    children:React.ReactNode
}

function Dialog({ title, onClose, onOk, children}: TDialog): JSX.Element | null {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    const { createQueryString } = useQueryParams()

    useEffect(() => {
        if(showDialog ==='y') {
            dialogRef.current?.show()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
        router.push('/admin/dialog')
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    return (
        <>
            {
                showDialog === 'y' ? (
                    <DialogWrapper ref={dialogRef}>
                        <DialogInner>
                            <DialogHeader className=" bg-slate-400">
                                <h1>{ title }</h1>
                                <Button variant='ghost' onClick={closeDialog}>X</Button>
                            </DialogHeader>
                            <DialogContent>
                                { children }
                                <div className="flex flex-row justify-end">
                                    <Button variant='outline' onClick={clickOk}>
                                        ok
                                    </Button>
                                </div>
                            </DialogContent>
                        </DialogInner>
                    </DialogWrapper>
                ) : null    
            }
        </>
    );
}

const DialogWrapper = tw.dialog`
    fixed
    top-50
    left-50f
    -translate-x-50
    -translate-y-50
    z-[100]
    rounded-xl
    backdrop:bg-gray-800/50
`

const DialogInner = tw.div`
    w-[500px]
    max-w-full
    bg-gray-200
    flex
    flex-col
`

const DialogHeader = tw.div`
    flex
    flex-row
    justify-between
    mb-4
    pt-2 
    px-5
    bg-yellow-400 
`

const DialogContent = tw.div`
    px-5
    pb-6
`

export default Dialog