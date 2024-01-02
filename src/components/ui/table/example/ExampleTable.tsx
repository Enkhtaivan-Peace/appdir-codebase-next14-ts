import Table from 'a/components/ui/table/Table'
import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

function ExampleTable() {
    return (
        <Table>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </Table>
    )
}

export default ExampleTable
