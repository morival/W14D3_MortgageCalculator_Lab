import React, {useState} from 'react';
import SalaryForm from '../components/SalaryForm';
import LoanResult from '../components/LoanResult';

const CalculatorContainer = () => {

    const [mortgage, setMortgage] = useState(0);


    const calculateLoan = (salary) => {
        const sal1 = parseInt(salary.mainSalary);
        const sal2 = parseInt(salary.secondSalary);
        const deposit = parseInt(salary.deposit);
        
        const updated = sal1 + sal2;
        const maxMortgage = updated * 3;
        const mortgageWithDeposit = maxMortgage + deposit;
        setMortgage(mortgageWithDeposit);
    }
    

    return(

        <>
            <h1>Mortgage Calculator</h1>
            <SalaryForm onSalarySubmit={calculateLoan}/>
            <LoanResult mortgage={mortgage} />
        </>
    )
}

export default CalculatorContainer;