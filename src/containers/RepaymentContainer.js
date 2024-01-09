import React, { useEffect, useState } from 'react';
import RepaymentForm from '../components/RepaymentForm';
import RepaymentResult from '../components/RepaymentResult';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';


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
    }, [mortgageTerm, interestRate, mortgageDebt])


    return (
        <Card variant='outlined' sx={{ p: 1, m: 2, width: 1, maxWidth: '500px'  }}>
            <CardHeader
                title='Mortgage Repayment Calculator'
                subheader='Find out how much the mortgage repayments costs'
                subheaderTypographyProps={{ paddingBlock: '20px' }} />
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
