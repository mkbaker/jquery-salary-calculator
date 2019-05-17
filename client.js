$(document).ready(onReady);

function onReady() {
    console.log('henlo');
    $('#submitEmployeeInfoButton').on('click', handleAddClick);
    $('table').on('click', '.deleteEmployee', handleDeleteClick);
}

function handleAddClick(){
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
                <td>${annualSalaryIn}</td>
                <td><button class="deleteEmployee">Delete</button></td>
            </tr>`
    $('tbody').append(employeeRow);
    //clear input values
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}

function handleDeleteClick(){
    console.log('in handleDeleteClick')
    $(this).closest('tr').remove();
}