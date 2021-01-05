import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import React, {useState} from 'react'
import "../styles/PriceCheckBox.css"


const PriceCheckBox = (props) => {

    const [value, setValue] = useState('0');



    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {

        setValue(value);
        setChecked(value);
        props.handleFilters(value);

    }

    

    return (
        <div className="price-range-container">
            {props.list.map((price, index)=>(
                <span className="price-range-checkbox">
                    
                    <RadioGroup defaultValue="Any" name="customized-radios" value={value}
                    onChange = {() => handleToggle(price.id)}>

                        <FormControlLabel value={price.id} control={<Radio />} label={price.name} />

                    </RadioGroup>
                </span>
            ))}
        </div>
    )
}

export default PriceCheckBox
