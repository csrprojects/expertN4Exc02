
// Define users array
let users = [];

// Function to get user data
function getUser() {
    let check = true;

    while (check) {
        let user = {};
        user.name = prompt("Informe o nome do aluno: ");
        user.grade1 = parseFloat(prompt("Informe a primeira nota: "));
        user.grade2 = parseFloat(prompt("Informe a segunda nota: "));
        users.push(user);

        check = confirm("Você deseja adicionar mais um aluno?");
    }
}

// Function to calculate the average
function getAverage(user) {
    let average = (user.grade1 + user.grade2) / 2;
    return average;
}

// Function to get the result
function getResult(user) {
    let approved = false;
    let average = getAverage(user);
    if ( average >= 7) {
        approved = true;
    }
    return [approved, average];
}

// Function to display the result
function displayResult() {
    for (let i = 0; i < users.length; i++) {
        let result = getResult(users[i]);

        alert(` A média do(a) Aluno(a) ${users[i].name} é: ${result[1]}\n${result[0] ? 
                `Parabéns, ${users[i].name} você foi aprovado(a) no concurso` : 
                `Não foi desta vez, ${users[i].name}! Tente novamente!`
            }`);
    }
}

getUser();
displayResult();

