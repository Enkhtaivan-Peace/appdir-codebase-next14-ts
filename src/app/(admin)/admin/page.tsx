import { Flex } from '@/components/ui/containers/flex/Flex'
import MainPlan from '@/features/work-plan/MainPlan'
import { NextPage } from 'next'
import React from 'react'

const AdminHome: NextPage = () => {
    return (
        <Flex className="gap-10 flex-col">
            <h3>Front-end төслийн ажлын график</h3>
            <MainPlan />
        </Flex>
    )
}

export default AdminHome
