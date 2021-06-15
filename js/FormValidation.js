window.addEventListener('DOMContentLoaded', (event) => {
    save()
});
 
//UC-3 To create EmployeePayroll Object on Save
const save = () => {
    try {
        let addressData = createAddress();
        createAndUpdateStorage(addressData);

    } catch (e) {
        console.log(e);
        return;
    }
}

const createAddress = () => {
    let addressData = new Address();
    addressData.fullName = getInputValueId('#fullname');
    addressData.address = getInputValueId('#address');
    addressData.city = getInputValueId('#city');
    addressData.state = getInputValueId('#state');
    addressData.zip = getInputValueId('#zip');
    addressData.phone = getInputValueId('#phone');
    console.log(employeePayrollData);

    return employeePayrollData;
}

const getInputValueId = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked) {
            setItem.push(item.value);
        }
    });
    return setItem;
}

const setTextValue = (id, value) => {
    let element = document.querySelector(id);
    element.textContent = value;
}

//UC-4 To save Employee Payroll Object to Local Storage
const createAndUpdateStorage = (data) => {
    let dataList = JSON.parse(localStorage.getItem("AddressList"));

    if (dataList != undefined) {
        dataList.push(data);
    }
    else {
        dataList = [data];
    }

    localStorage.setItem("AddressList", JSON.stringify(dataList));
    alert("data stored with name : " + data.name);
}
