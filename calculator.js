function equivalentCheck() { //This allows the last value to remain in view until other buttons are pressed.
    if (parseInt(document.getElementById('equivalent').value))  {

        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;

    }
}


function input(x) {


    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0)
    {
        document.getElementById('result').value = y * 10 + x; //Mulitply the text input by 10 and add the value of x.
    }
    else { //If decimal is true


        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if (decimalCount == 1) {

            x *= 0.1; //We are using maths to place the decimal point.
            document.getElementById('result').value = y + x;
        }
        else {

            document.getElementById('result').value += x;
        }

        document.getElementById('decimalVar').value = decimalCount + 1;
    }

}

function decimalPoint () {
    if (document.getElementById('decimalVar').value == 0) { //This fuction prevents mulitple decimal points.
        document.getElementById('decimalVar').value = 1;
        }

        if (parseInt(document.getElementById('operation').value)) { //If this is an empty string, it will return false.
            document.getElementById('result').value = 0;
        }

}


function operandCheck() {
    if(document.getElementById('operand').value == "") {

        document.getElementById('operand').value = document.getElementById('result').value;

        document.getElementById('equivalent').value = 1;
    }
    else {
        operatorCheck ();
    }
}

function operatorCheck() {

    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);
    let operation = parseInt(document.getElementById('operation').value);

    if (isNaN(a) || isNaN(b)) { // Added check for valid numbers
        return;
    }


    switch (operation) {

        case 1: //addition
            a += b;
            break;

        case 2: //subtraction
            a -= b;
            break;

        case 3: //multiplication
            a *= b;
            break;

        case 4: //division
            if (b === 0) { // Added division by zero check
                alert("Cannot divide by zero!");
                allClear();
                return;
            }
            a /= b;
            break;

    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}





function operators(x) {

    operandCheck();

    document.getElementById('operation').value = x;

}



function equals() {

    operators(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value ="";
    document.getElementById('equivalent').value = 1;
}



function allClear() {

    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operation').value = 0;
    document.getElementById('equivalent').value = 0;
    document.getElementById('decimalVar').value = 0; // Reset decimalVar
}


function plusminus() {
    let x = parseFloat(document.getElementById('result').value);
    if (!isNaN(x)) { // Added check for valid number
        document.getElementById('result').value = -x;
    }
}

function percent() {

    let x = parseFloat(document.getElementById('result').value);
    if (!isNaN(x)) { // Added check for valid number
        document.getElementById('result').value = x / 100;
    }
}

function square() {

    let x = parseFloat(document.getElementById('result').value);
    if (!isNaN(x)) { // Added check for valid number
        document.getElementById('result').value = x * x;
    }
}


// Fixed decimalPoint function
function decimalPoint() {
    if (!document.getElementById('result').value.includes('.')) {
        document.getElementById('decimalVar').value = 1;
        if (document.getElementById('result').value === '') {
            document.getElementById('result').value = '0.';
        } else if (parseInt(document.getElementById('operation').value)) {
            document.getElementById('result').value = '0.';
            document.getElementById('operation').value = 0;
        } else {
            document.getElementById('result').value += '.';
        }
    }
}