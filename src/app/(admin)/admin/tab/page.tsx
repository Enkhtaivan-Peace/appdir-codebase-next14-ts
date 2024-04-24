import React from 'react'
import MainTab from '@/features/tab/MainTab'
import HugeTabContent1 from '@/features/tab/contents/HugeTabContent1'
import HugeTabContent2 from '@/features/tab/contents/HugeTabContent2'
import { Flex } from '@/components/ui/containers/flex/Flex'
import SimpleTab from '@/components/ui/tab/choices/simpleTab/SimpleTab'
import BorderedTab from '@/components/ui/tab/choices/borderedTab/BorderedTab'

const TabPage = () => {
    return (
        <Flex className="flex-col gap-20">
            <h3>Shadcn tab:</h3>
            <MainTab />
            <h3>Freestyle tabs:</h3>
            <SimpleTab name="simple-tab" />
            <BorderedTab name="bordered-tab" />
        </Flex>
    )
}

export default TabPage
