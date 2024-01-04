import { Button } from 'a/components/ui/button'
import { Flex } from 'a/components/ui/containers/flex/Flex'
import React from 'react'

async function TodoAddForm() {

  return (
    <Flex className='py-30 justify-center'>
        <form action="#" method="POST">
            <Flex className=' items-center'>
                <div>
                    <input 
                        id="todo" 
                        name="text" 
                        type="text"
                        placeholder="todo нэмэх"
                        required
                    />
                </div>
                <div>
                <Button variant='outline' size='sm'>ok</Button>
                </div>
            </Flex>    
        </form>
    </Flex>
  )
}

export default TodoAddForm