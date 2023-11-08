import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div className='dropdown alert alert-success'>
            <div data-bs-toggle="dropdown"> 
                Currency {<select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value) }>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
                </select>	
                }	
            </div>
        </div>
    );
};

export default Currency;