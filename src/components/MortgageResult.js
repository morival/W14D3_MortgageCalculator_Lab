import React from 'react';


export default function MortgageResult({ monthlyPayment, monthlyInterest, mortgageDebt, totalRepayment }) {

    const mPayment = monthlyPayment.toFixed(2);
    const mInterest = monthlyInterest.toFixed(2);
    const principal = mPayment - mInterest;
    const tRepayment = totalRepayment.toFixed(2);

    return (
        <>
            <h4>Monthly mortgage payment: £{mPayment}</h4>
            <h4>Of which £{principal} is the principal and £{mInterest} is the interest.</h4>
            <h4>Mortgage amount: £{mortgageDebt}</h4>
            <h4>Total Mortgage repayment: £{tRepayment}</h4>
        </>
    )
};
