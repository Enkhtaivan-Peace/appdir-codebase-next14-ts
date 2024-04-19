import React from 'react'
import { Grid } from '@/components/ui/containers/grid/Grid'
import './trigonometry.scss'
import StaticCircles from './StaticCircles'
import DynamicCircles from './DynamicCircles'
function TrigonoMetryPage() {
    return (
        <Grid className="min-h-screen place-items-center">
            <StaticCircles />
            <DynamicCircles />
        </Grid>
    )
}

export default TrigonoMetryPage
