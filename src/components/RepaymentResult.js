import React from 'react';


const formattedNumber = (num) => Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);


export default function MortgageResult({ monthlyPayment, monthlyInterest, mortgageDebt, totalRepayment }) {

    const principal = (monthlyPayment - monthlyInterest);

    console.log(formattedNumber(monthlyPayment));
    return (
        <>
            <h4>Monthly mortgage payment: £{formattedNumber(monthlyPayment)}</h4>
            <h4>Of which £{formattedNumber(principal)} is the principal and £{formattedNumber(monthlyInterest)} is the interest.</h4>
            <h4>Mortgage amount: £{formattedNumber(mortgageDebt)}</h4>
            <h4>Total Mortgage repayment: £{formattedNumber(totalRepayment)}</h4>
        </>
    )
};
