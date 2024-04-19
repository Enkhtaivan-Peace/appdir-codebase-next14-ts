import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import HugeTabContent1 from './contents/HugeTabContent1'
import HugeTabContent2 from './contents/HugeTabContent2'

function MainTab() {
    return (
        <Tabs defaultValue="account" className="w-full">
            <Tabs>
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <HugeTabContent1 />
                </TabsContent>
                <TabsContent value="password">
                    <HugeTabContent2 />
                </TabsContent>
            </Tabs>
        </Tabs>
    )
}

export default MainTab
