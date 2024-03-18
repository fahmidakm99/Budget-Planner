const reasonInput = document.querySelector('#id-reason');
const amountInput = document.querySelector('#id-amount');
const clearBtn = document.querySelector('#btn-clear');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expense-list');
const totalExpenses = document.querySelector('#totalexpenses');
// const alrtController = document.querySelector('ion-alert-controller');

const alerting= document.querySelector('ion-alert');


let totExpenses=0;

const clearfn = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

addBtn.addEventListener('click', () => {
    // console.log('It works');
    const eneteredReason = reasonInput.value;
    const eneteredAmount = amountInput.value;

    if (eneteredReason.trim().length <=0 ||
        eneteredAmount <=0 || 
        eneteredAmount.trim().length <=0) 
    {
        
        alerting.message = 'Please enter valid reason and amount... ';
        alerting.buttons = ['Okay'];
        document.body.appendChild(alerting);
        alerting.present();
        
        // alrtController
        //     .create({
        //     message: 'Please enter valid reason and amount... ', 
        //     header: 'Invalid inputs',
        //     buttons : ['Okay']
        // })
        // .then(alertElement => {
        //     alertElement.present();
        // });

      return;  
    }
    // console.log(eneteredReason, eneteredAmount);
    const newItem = document.createElement('ion-item');
    newItem.textContent = eneteredReason + ': $' + eneteredAmount;
    // expensesList.appendChild(newItem);
    expensesList.appendChild(newItem);

    totExpenses += +eneteredAmount;
    totalExpenses.textContent = totExpenses;
    clearfn();
});

clearBtn.addEventListener('click', clearfn);
