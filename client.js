$(document).ready(onReady);

function onReady() {
    console.log('henlo');
    $('#submitEmployeeInfoButton').on('click', handleAddClick);
    $('table').on('click', '.deleteEmployee', handleDeleteClick);
}

function handleAddClick() {
    console.log('in handleAddClick');
    let firstNameIn = $('#firstNameInput').val();
    let lastNameIn = $('#lastNameInput').val();
    let idIn = $('#idNumberInput').val();
    let titleIn = $('#titleInput').val();
    let annualSalaryIn = $('#annualSalaryInput').val();
    let employeeRow = `<tr>
                <td>${firstNameIn}</td>
                <td>${lastNameIn}</td>
                <td>${idIn}</td>
                <td>${titleIn}</td>
                <td class="salaryColumn">${annualSalaryIn}</td>
                <td><button class="deleteEmployee">Delete</button></td>
            </tr>`
    $('tbody').append(employeeRow);

    //run addMonthlyCost function?? 
    let monthlyCost = addMonthlyCosts();

    monthlyCost = Number(monthlyCost) + Number(annualSalaryIn);

    console.log(monthlyCost);

    $('#monthlyCost').text(monthlyCost);

    //clear input values
    $('input').val('');

}

function handleDeleteClick() {
    console.log('in handleDeleteClick')
    $(this).closest('tr').remove();
}

//calculate value of all <td> in Annual Salary column
function addMonthlyCosts() {
    console.log('in addMonthlyCosts');

    // create array of all values with class .salaryColumn
    let salaryArray = [];
    let yearlySum = 0;
    $('.salaryColumn').each(function () {
        salaryArray.push($(this).text());
    });
    console.log(salaryArray);

    // The arr.map(Number) simply runs over all items in array, executes the Number function on every item and adds the result into a new array
    let  salaryArrayNumbers = salaryArray.map(Number);

    console.log(salaryArrayNumbers);
    //loop thru array and add values
    for (i = 0; i < salaryArrayNumbers.length; i++) {
        yearlySum = Number(yearlySum) + Number(salaryArrayNumbers[i]);
    }
    //return sum of all values 
    return yearlySum;





    // //the following code adapted from https://stackoverflow.com/questions/9293492/sum-all-values-for-table-column-based-on-class
    // //further research needed
    // let sum=0;
    // // iterate through each td based on class and add the values
    // $(".salaryColumn").each(function () {
    //     let value = $(this).text();
    //     // add only if the value is number
    //     if (!isNaN(value) && value.length != 0) {
    //         sum += parseFloat(value);
    //     }
    // });
    // ;
    // return sum;
    // //end adapted copy code 
}
//add total of annual salary column
//divide cost by 12
//display this number on the dom
//if it's over 20,000, display in red