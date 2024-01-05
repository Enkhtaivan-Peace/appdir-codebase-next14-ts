import { Flex } from 'a/components/ui/containers/flex/Flex'
import React from 'react'
import { editTodo } from '../_todo-actions'
import { Button } from 'a/components/ui/button'

function TodoEditForm() {
  return (
    <Flex className='py-30 justify-center'>
    <form>
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

export default TodoEditForm