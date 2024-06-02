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
        <div style={{width: "400px", height: "400px", cursor: "pointer",}}>
            <SketchPicker color={color} onChange={handleChange} width='330px'/>
        </div>
    )
}

export default ColorPicker;