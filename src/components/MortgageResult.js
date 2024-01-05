import React from 'react';


export default function MortgageResult({monthlyPayment, mortgageDebt, totalRepayment}) {
    

    return (
        <>
            <h4>Monthly mortgage payment: {monthlyPayment}</h4>
            <h4>Mortgage amount: {mortgageDebt}</h4>
            <h4>Total Mortgage repayment: {totalRepayment}</h4>
        </>
    )
};
