import { Button } from 'a/components/ui/button'
import { Flex } from 'a/components/ui/containers/flex/Flex'
import React from 'react'
import { addTodo } from '../_todo-actions'

async function TodoAddForm() {
   
  return (
    <Flex className='py-30 justify-center'>
        <form  action={addTodo} >
            <Flex className=' items-center'>
                <Flex className='flex-col gap-10'>
                    <input 
                        id="todoName" 
                        name="name" 
                        type="text"
                        placeholder="гарчиг"
                        required
                    />
                    <input 
                        id="todoName" 
                        name="photo" 
                        type="text"
                        placeholder="photo url"
                    />
                    <textarea
                        id="description"
                        name='description'
                        placeholder='тайлбар'
                    />
                    <Button variant='outline' size='sm'>ok</Button>
                </Flex>
            </Flex>    
        </form>
    </Flex>
  )
}

export default TodoAddForm