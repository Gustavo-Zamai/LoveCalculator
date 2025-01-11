
document.querySelector('button').addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
 
    if (randomNumber > 90) {
        message = "to love each other. You are Soulmates!";
    }
    else if (randomNumber < 90 && randomNumber > 70) {
        message = "to love each other. You are look good together!";
    }
    else if (randomNumber < 70 && randomNumber > 40) {
        message = "to love each other. This could work!";
    }
    else {
        message = "to love each other. Don't worry, you will be great friends at least!";
    }
    
    var name1 = document.getElementById('name1').value;
 
    var splitedName1 = name1.slice(0, name1.length);
    var name1 = splitedName1.charAt(0).toUpperCase() + splitedName1.slice(1);


    var name2 = document.getElementById('name2').value;

    var splitedName2 = name2.slice(0, name2.length);
    var name2 = splitedName2.charAt(0).toUpperCase() + splitedName2.slice(1);

    alert(name1 + " & " + name2 + " has " + randomNumber + "% " + message);

});

