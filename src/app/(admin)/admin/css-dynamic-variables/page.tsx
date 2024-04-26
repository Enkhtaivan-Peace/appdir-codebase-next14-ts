'use client'
import React, { useState } from 'react'
import './css-dynamic-vars.css'
import ParticleButton from '@/components/ui/button/particle-button/ParticleButton'
const CssDynamicVariablesPage = () => {
    const [color, setColor] = useState('#ff0000')

    const handleColorChange = () => {
        setColor('#00ff00')
    }

    return (
        <div>
            <h3>CssDynamicVariablesPage:</h3>
            <button onClick={handleColorChange}>Change Color</button>
            <div className="dynamic-vars-example" style={{ '--my-color': color } as React.CSSProperties}>
                This is my element
            </div>
            <ParticleButton />
        </div>
    )
}

export default CssDynamicVariablesPage
