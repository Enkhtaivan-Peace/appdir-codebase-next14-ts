import { Button } from 'a/components/ui/button'
import { Flex } from 'a/components/ui/containers/flex/Flex'
import { NextPage } from 'next'
import React from 'react'

const ButtonPage:NextPage = () => {
  return (
    <div>
        <h2>Buttons</h2>
        <Flex className='flex-col gap-20'>
            <div>
                <Button>
                    default button
                </Button>
            </div>
            <div>
                <Button variant='outline'>
                    outline button
                </Button>
            </div>
            <div>
                <Button variant='destructive'>
                        Destructive button
                </Button>
            </div>
            <div>
                <Button variant='ghost'>
                        Ghost button
                </Button>
            </div>
            <div>
                <Button variant='link'>
                    Link button
                </Button>
            </div>
            <div>
                <Button variant='secondary'>
                    Secondary button
                </Button>
            </div>
        </Flex>
    </div>
  )
}

export default ButtonPage