function calculateTax(income, expenses) {
    if(0>income || 0>expenses){
        return 'Invalid Input';
    }

    else if(income<expenses){
        return 'Invalid Input';
    }

    else{
        const tax=(income-expenses)*0.20;
        return tax;
    }
}

const tax = calculateTax(34000, 1753);
console.log(tax);
