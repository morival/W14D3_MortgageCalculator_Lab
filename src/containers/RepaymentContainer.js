import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import React, { useEffect, useState } from 'react';
import RepaymentForm from '../components/RepaymentForm';
import RepaymentResult from '../components/RepaymentResult';


export default function RepaymentContainer(params) {


    const [mortgageDebt, setMortgageDebt] = useState(170000);
    const [interestRate, setInterestRate] = useState(5.5);
    const [mortgageTerm, setMortgageTerm] = useState(35);

    const [monthlyPayment, setMonthlyPayment] = useState(0);


    useEffect(() => {
        const numberOfPayments = mortgageTerm * 12;
        const monthlyRate = interestRate / 100 / 12;
        const power = Math.pow(1 + monthlyRate, numberOfPayments);
        const payment = mortgageDebt * (monthlyRate * power / (power - 1));
        setMonthlyPayment(payment);
        // const totalPayment = payment * numberOfPayments;
        // setTotalRepayment(totalPayment.toFixed(2))
        // console.log(monthlyPaymentmonthlyInterest)
    }, [mortgageTerm, interestRate, mortgageDebt])


    return (
        <Card variant='outlined'>
            <CardHeader title='Mortgage repayment calculator' />
            <CardActions>
                <RepaymentForm
                    mortgageDebt={mortgageDebt}
                    setMortgageDebt={setMortgageDebt}
                    interestRate={interestRate}
                    setInterestRate={setInterestRate}
                    mortgageTerm={mortgageTerm}
                    setMortgageTerm={setMortgageTerm}
                />
            </CardActions>
            <CardContent>
                <RepaymentResult
                    monthlyPayment={monthlyPayment}
                    monthlyInterest={(mortgageDebt * interestRate / 1200)}
                    mortgageDebt={mortgageDebt}
                    totalRepayment={(monthlyPayment * mortgageTerm * 12)}
                />
            </CardContent>
        </Card>
    )
};
