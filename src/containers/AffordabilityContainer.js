import React, { useEffect, useState } from 'react';
import AffordabilityForm from '../components/AffordabilityForm';
import AffordabilityResult from '../components/AffordabilityResult';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';


export default function AffordabilityContainer(params) {


    const [jointMortgage, setJointMortgage] = useState(false)
    const [mainSalary, setMainSalary] = useState("");
    const [secondSalary, setSecondSalary] = useState("");
    const [salaryMultiplier, setSalaryMultiplier] = useState(4.5);
    const [deposit, setDeposit] = useState("");

    const [affordableAmount, setAffordableAmount] = useState(0);

   
    useEffect(() => {
        const totalSalary = Number(mainSalary) + Number(secondSalary);
        const maxMortgage = totalSalary * salaryMultiplier;
        const affordability = maxMortgage + Number(deposit);
        setAffordableAmount(affordability)
    }, [mainSalary, secondSalary, salaryMultiplier, deposit])


    return (
        <Card variant='outlined' sx={{ p: 1, m: 2, width: 1, maxWidth: '500px' }}>
            <CardHeader
                title='Affordability Calculator'
                subheader='Find out how much you could borrow'
                subheaderTypographyProps={{ paddingBlock: '20px' }} />
            <CardActions>
                <AffordabilityForm
                    jointMortgage={jointMortgage}
                    setJointMortgage={setJointMortgage}
                    mainSalary={mainSalary}
                    setMainSalary={setMainSalary}
                    secondSalary={secondSalary}
                    setSecondSalary={setSecondSalary}
                    salaryMultiplier={salaryMultiplier}
                    setSalaryMultiplier={setSalaryMultiplier}
                    deposit={deposit}
                    setDeposit={setDeposit} />
            </CardActions>
            <CardContent>
                <AffordabilityResult houseValue={affordableAmount} />
            </CardContent>
        </Card>
    )
};
