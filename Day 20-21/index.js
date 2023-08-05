const type = document.querySelector(".input-type");
const expenseName = document.querySelector(".input-expense-name");
const amt = document.querySelector(".input-amount");
const submit = document.querySelector("#submit");
const showExpenseTable = document.querySelector(".show-expense-table");
const expenses = [];

const addExpense = ()=> {
  if(expenseName.value==="" || amt.value==="")
  {
    alert("Please enter all the fields");
    return;
  }
    const expense = {
      type: type.value,
      expenseName: expenseName.value,
      amt: amt.value,
    }
    expenses.push(expense);
    showExpense() 
}

const deleteExpense = (index)=> {
  expenses.splice(index,1);
  showExpense();
}

const showExpense = ()=> {
  showExpenseTable.innerHTML=``;
  expenses.forEach((expense,index) => {
    showExpenseTable.innerHTML += `
    <div class="show-expense-item">
    <div>${expense.type}</div>
    <div>${expense.amt}</div>
    <div>${expense.expenseName}</div>
    <div onclick="deleteExpense(${index})">Delete</div>
    </div>
    ` 
  })
}

submit.addEventListener("click",addExpense)