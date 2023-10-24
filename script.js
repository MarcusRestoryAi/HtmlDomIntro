console.log("Script");

const persons = [];

function editParagraf() {
    //Ändra värdet i paragraf
    document.getElementById("paragraf").innerText = "Denna paragraf har blivit uppdaterad!";
}

//Skapa en funktion för btnAlert
document.getElementById("btnAlert").addEventListener("click", () => {
    const userName = document.getElementById("name").value;

    alert(`Hejsan ${userName}`);

    //Skapa ett nytt obejkt av Person klassen och spara i array
    persons.push( new Person(userName) );

    let output = "";
    //Skapa en ForEachLoop som skriver ut namnen på alla personer
    persons.forEach((person) => {
        output += person.toString();
    })
    document.getElementById("usersNames").innerHTML = output;
});

//Gör Inputfält till Blue när musen hover över fältet
document.getElementById("name").addEventListener("mouseover", () => {
    document.getElementById("name").style.backgroundColor = "Green";
})
document.getElementById("name").addEventListener("mouseout", () => {
    document.getElementById("name").style.backgroundColor = "White";
})