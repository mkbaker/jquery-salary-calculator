$(document).ready(onReady);

function onReady() {
    console.log('henlo');
    $('#submitEmployeeInfoButton').on('click', handleAddClick);
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

}