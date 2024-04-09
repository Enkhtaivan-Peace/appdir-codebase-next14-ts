'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Sheet1 } from '@/common/sheet/choices/Sheet1'
import { Sheet2 } from '@/common/sheet/choices/Sheet2'
function Sheetpage() {
    return (
        <div>
            <Sheet1 />
            <Sheet2 />
        </div>
    )
}

export default Sheetpage
