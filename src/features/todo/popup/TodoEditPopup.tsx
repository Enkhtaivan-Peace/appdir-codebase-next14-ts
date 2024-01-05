import MainPopup from 'a/common/popup/_partials/MainPopup'
import { Button } from 'a/components/ui/button'
import React from 'react'

function TodoEditPopup() {
  return (
    <MainPopup title='Edit todo'>
        <Button variant='outline'>
                ok
        </Button>
    </MainPopup>
  )
}

export default TodoEditPopup