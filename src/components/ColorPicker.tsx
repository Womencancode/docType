import React, { useState } from 'react'
import Circle from './Circle';
import '../styles/ColorPicker.css';

export default function ColorPicker() {
    const [bgColor, setBgColor] = useState<string>('black')

    const changeBgColor = (e:React.SyntheticEvent) => {
        e.preventDefault()
        
        
        const target = e.target as typeof e.target & {
            colorPicker: { value: string };
        };
        const color = target?.colorPicker.value; //typecheck
        
        if (color.length === 0){
            setBgColor('black')
            return
        }
        setBgColor(color)
        
        //reset input field
        target.colorPicker.value=''    
    }


    return (
        <div className="main-form">
            <div className="display-circle">
                <Circle bgColor={bgColor} />
            </div>
            <form onSubmit={changeBgColor}>
                <div className="form-field">
                    <label htmlFor="colorPicker">Enter a color</label>
                    <input type="text" name="colorPicker" id="colorPicker" placeholder="black" />
                </div>
                <button type="submit" className="button">Update Color</button>
            </form>

        </div>
    )
}
