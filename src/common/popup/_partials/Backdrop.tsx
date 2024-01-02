import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import tw from 'tailwind-styled-components'
export interface IBackdrop {
    children: ReactNode
}

function Backdrop({ children }: IBackdrop) {
    return (
        <AnimatePresence>
            <BackdropOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-screen h-screen bg-black z-100"
            >
                {children}
            </BackdropOverlay>
        </AnimatePresence>
    )
}

const BackdropOverlay = tw(motion.div)`
    fixed
    top-0
    left-0
    right-0
    bottom-0
    flex
    items-center
    justify-center
    bg-[#000]
    bg-opacity-50
`
export default Backdrop
