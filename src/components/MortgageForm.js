import React, { useState } from 'react';


export default function MortgageForm(params) {

    const [mortgageDebt, setMortgageDebt] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [mortgageTerm, setMortgageTerm] = useState("");

    const handleMortgageDeptChange = e => setMortgageDebt(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h4>Mortgage debt</h4>
                <p>How much do you want to borrow?</p>
            </div>
            <div>
                <div style={{width: '200px', border: '1px solid', borderRadius: '15px', padding: '5px 30px'}}>
                    <span>£</span>
                    <input
                        type='number'
                        min='0'
                        value={mortgageDebt}
                        onChange={handleMortgageDeptChange} />
                </div>
            </div>
            <hr/>
            <div>
                <h4>Initial interest rate</h4>
                <p>What interest rate can you get?</p>
            </div>
            <div>
                
            </div>
        </form>
    )
};