
document.querySelector('button').addEventListener('click', function () {
    var randomNUmber = Math.floor(Math.random() * 100) + 1;

    const name1 = document.getElementById('name1').value;

    const name2 = document.getElementById('name2').value;

    alert(name1 + " and " + name2 + " has " + randomNUmber + "% chance to love each other!");

}); 