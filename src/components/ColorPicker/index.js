// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import { SketchPicker } from 'react-color'

const ColorPicker = ({onColorChange}) => {
    const [ color, setColor ] = useState("#ffffff")
    
    const handleChange = (newColor) => {
        setColor(newColor.hex)
        onColorChange(newColor.hex)
    }
    return (
        <div style={{ height: "400px", cursor: "pointer",}} className='w-full'>
            <SketchPicker color={color} onChange={handleChange} width='' className='w-11/12'/>
        </div>
    )
}

export default ColorPicker;