const number = 5;

const output = document.getElementById("output");

const newP = document.createElement('p');
newP.textContent = `The number is ${number}`;
output.appendChild(newP);

let placeholderData = JSON.parse(localStorage.getItem("data")) || [];

if (placeholderData.length > 0) {
    placeholderData.forEach(element => {
        ListCreator(element.age, element.name)
    });
}

function ListCreator(age, userName) {
    if (age >= 18) {
        const newP = document.createElement('p');
        newP.textContent = `You are eligible to drink ${userName}`;
        output.appendChild(newP);
    } else {
        const newP = document.createElement('p');
        newP.textContent = `You are not eligible to drink ${userName}`;
        output.appendChild(newP);
    }
}

function EligibilityToDrink() {
    const age = document.getElementById("age").value;
    const userName = document.getElementById("userName").value;

    ListCreator(age, userName);

    placeholderData.push({
        "name": userName,
        "age": age
    })

    localStorage.setItem("data", JSON.stringify(placeholderData));
}