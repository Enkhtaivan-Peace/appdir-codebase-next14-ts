import React from 'react'
import { ITodo } from './_interfaces'
import tw from 'tailwind-styled-components'
import Image from 'next/image'
import { Flex } from 'a/components/ui/containers/flex/Flex'
import { Button } from 'a/components/ui/button'
import { MdOutlineModeEditOutline, MdDelete  } from "react-icons/md";

function TodoListItem(props:ITodo) {
    const { id, name, photo, isCompleted, createdAt } = props
  return (
    <Item>
        <Flex className='justify-between items-center'>
            <Flex className='gap-10'>
                <Image src={photo} alt={'image of ' + name} width={100} height={100} />
                <div>
                    <h5>{name}</h5>
                    <hr />
                    <Flex className='flex-col'>
                        <span>Дууссан эсэх: { isCompleted ? 'тийм' : 'үгүй' }</span>
                        <span>Огноо: { createdAt } </span>
                    </Flex>
                </div>
            </Flex>
            <Flex>
                <Button variant='ghost'>
                    <MdOutlineModeEditOutline />
                </Button>
                 <Button variant='ghost'>
                    <MdDelete />
                </Button>
            </Flex>
        </Flex>
    </Item>
  )
}


const Item = tw.div`
    py-10
    px-20
    border-b
    border-emerald-500
`

export default TodoListItem