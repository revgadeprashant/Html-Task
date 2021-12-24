document.body.style.background = "rgb(238, 174, 163)"
    //creating div
var maindiv = document.createElement('div');
maindiv.setAttribute("class", "container");
maindiv.style.textAlign = "center";
maindiv.style.marginTop = "23px";

//header
var h1 = document.createElement('h1');
h1.innerHTML = "Calculator";
h1.style.fontSize = "50px";
h1.style.fontFamily = "'Courier New', Courier, monospace"
maindiv.append(h1);


var caldiv = document.createElement('div');
caldiv.setAttribute("class", "calculator");
caldiv.style.border = " 4px solid #13695d";
caldiv.style.backgroundColor = "#ff99f7";
caldiv.style.padding = "23px";
caldiv.style.paddingTop = "50px";
caldiv.style.borderRadius = "53px";
caldiv.style.display = "inline-block"

//input
var input = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute("name", "screen");
input.setAttribute("id", "screen");
input.style.borderRadius = "21px";
input.style.border = "5px solid #244624";
input.style.fontSize = "34px";
input.style.height = "65px";
input.style.width = "456px";
input.style.paddingLeft = "15px";
input.style.marginBottom = "30px";

caldiv.append(input);
maindiv.append(caldiv);

//table
var table = document.createElement('table');
table.style.margin = "auto";


//row 1
var tr1 = document.createElement('tr');
var td = document.createElement('td');
var button = document.createElement('button');
button.innerHTML = "(";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = ")";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "C";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "%";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);
tr1.append(td);

//row2
var tr2 = document.createElement('tr');
var td = document.createElement('td');
var button = document.createElement('button');
button.innerHTML = "7";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "8";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "9";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);

var button = document.createElement('button');
button.innerHTML = "+";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);
tr2.append(td);

//row3
var tr3 = document.createElement('tr');
var td = document.createElement('td');
var button = document.createElement('button');
button.innerHTML = "4";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "5";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "6";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);

var button = document.createElement('button');
button.innerHTML = "-";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);
tr3.append(td);

//row4
var tr4 = document.createElement('tr');
var td = document.createElement('td');
var button = document.createElement('button');
button.innerHTML = "1";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "2";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "3";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);

var button = document.createElement('button');
button.innerHTML = "X";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);
tr4.append(td);

//row5
var tr5 = document.createElement('tr');
var td = document.createElement('td');
var button = document.createElement('button');
button.innerHTML = ".";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "0";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);


var button = document.createElement('button');
button.innerHTML = "/";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);

var button = document.createElement('button');
button.innerHTML = "=";
button.style.borderRadius = "20px";
button.style.fontSize = "40px";
button.style.background = "rgb(61, 60, 60)";
button.style.width = "102px";
button.style.height = "90px";
button.style.margin = "6px";
button.style.color = "white"
td.append(button);
tr5.append(td);

table.append(tr1, tr2, tr3, tr4, tr5);
caldiv.append(table);
document.body.append(maindiv);


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}