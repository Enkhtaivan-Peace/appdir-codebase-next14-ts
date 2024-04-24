'use client'
import { Combobox } from '@/components/ui/combobox'
import * as React from 'react'

const ListPage = () => {
    const [comboVal, setComboVal] = React.useState('')

    console.log('comboVal', comboVal)
    return (
        <div>
            <Combobox setComboVal={setComboVal} />
        </div>
    )
}

export default ListPage
