



let students = [

    {nome: "Alef", nota1: 7, nota2: 8},
    {nome: "john", nota1: 6, nota2: 8},
    {nome: "Sabrina", nota1: 3, nota2: 5},
    {nome: "Bianca", nota1: 0, nota2: 4}
]

function averageCalc(student) { 
    return (student.nota1 + student.nota2) / 2
}

const approvalAverage = 7

for (let student of students) {
    let average = averageCalc(student)

    if(average >= approvalAverage) {
        alert(`Parabéns ${student.nome}! Você passou no concurso!
        \nSua média foi de ${average}`)
    } else {
        alert(`Não foi dessa vez ${student.nome}, Mas não desanime e tente novamente!
        \nSua média foi de ${average}`)
    }
}