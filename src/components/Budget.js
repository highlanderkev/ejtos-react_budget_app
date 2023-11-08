import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency, remaining } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditBudget = (e)=>{
        // if (e.target.value > 20000) {
        //     alert("The value can't exceed remaining funds "+ currency + remaining );
        //     console.log(budget)
        //     console.log("The value can't exceed remaining funds "+ currency + remaining );
        // }
        // else if (e.target.value < totalExpenses) {
        //     alert("You can't reduce the budget value lower than the spending");
        //     console.log("You can't reduce the budget value lower than the spending");
        // }
        // else {
        //     dispatch({type: "SET_BUDGET", payload: e.target.value});       
        // }
        dispatch({type: "SET_BUDGET", payload: e.target.value})
    }

    const validateBudget = () => {
        if(budget > 20000) {
            alert("The value can't exceed remaining funds "+ currency + remaining );
            console.log(budget)
            console.log("The value can't exceed remaining funds "+ currency + remaining );
            dispatch({type: "SET_BUDGET", payload: 20000})
        } else if (budget < totalExpenses) {
            alert("You can't reduce the budget value lower than the spending");
            console.log("You can't reduce the budget value lower than the spending");
            dispatch({type: "SET_BUDGET", payload: budget + totalExpenses})
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => validateBudget(), 1000);
        return () => clearTimeout(timeoutId);
    }, [budget])

    return (
        <div className='alert alert-secondary'>
            <span>Budget {currency}</span><input type="number" step={10} value={budget} onChange={handleEditBudget}/>
        </div>
    );
};

export default Budget;
