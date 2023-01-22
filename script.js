const inputBox2 = document.getElementById('input2');
const inputBox1 = document.getElementById('input1');
const selectBox1 = document.getElementById('select1');
const selectBox2 = document.getElementById('select2');

const calculateWeight = () => {
    inputValue = +inputBox1.value
    // milligram to gram
    if (selectBox1.value == "milligrams" && selectBox2.value == "grams") {
        calcValue = (inputValue * (0.001));
        inputBox2.value = calcValue;
    };
    // gram to milligram
    if (selectBox1.value == "grams" && selectBox2.value == "milligrams") {
        calcValue = (inputValue * (1000));
        inputBox2.value = calcValue;
    };
    // milligrams to centigrams
    if (selectBox1.value == "milligrams" && selectBox2.value == "centigrams") {
        calcValue = (inputValue * (0.1));
        inputBox2.value = calcValue;
    };
    // centigrams to milligrams
    if (selectBox1.value == "centigrams" && selectBox2.value == "milligrams") {
        calcValue = (inputValue * (10));
        inputBox2.value = calcValue;
    };
    // milligrams to kilograms
    if (selectBox1.value == "milligrams" && selectBox2.value == "kilograms") {
        calcValue = (inputValue * (0.000001));
        inputBox2.value = calcValue;
    };
    // kilograms to milligrams
    if (selectBox1.value == "kilograms" && selectBox2.value == "milligrams") {
        calcValue = (inputValue * (1000000));
        inputBox2.value = calcValue;
    };
    // milligrams to metricTonnes
    if (selectBox1.value == "milligrams" && selectBox2.value == "metricTonnes") {
        calcValue = (inputValue * (0.000000001));
        inputBox2.value = calcValue;
    };
    // metricTonnes to milligrams
    if (selectBox1.value == "metricTonnes" && selectBox2.value == "milligrams") {
        calcValue = (inputValue * (1000000000));
        inputBox2.value = calcValue;
    };
    // milligram to ounces
    if (selectBox1.value == "milligrams" && selectBox2.value == "ounces") {
        calcValue = (inputValue * (0.000035));
        inputBox2.value = calcValue;
    };
    // ounces to milligram
    if (selectBox1.value == "ounces" && selectBox2.value == "milligrams") {
        calcValue = (inputValue * (28349.52));
        inputBox2.value = calcValue;
    };
    // centigrams to grams
    if (selectBox1.value == "centigrams" && selectBox2.value == "grams") {
        calcValue = inputValue * (0.01)
        inputBox2.value = calcValue
    };
    // grams to centigrams
    if (selectBox1.value == "grams" && selectBox2.value == "centigrams") {
        calcValue = inputValue * (100)
        inputBox2.value = calcValue
    };
    //centigrams to kilograms
    if (selectBox1.value == "centigrams" && selectBox2.value == "kilograms") {
        calcValue = inputValue * (0.00001)
        inputBox2.value = calcValue
    };
    //kilograms to centigrams
    if (selectBox1.value == "kilograms" && selectBox2.value == "centigrams") {
        calcValue = inputValue * (100000)
        inputBox2.value = calcValue
    };
    //centigrams to metricTonnes
    if (selectBox1.value == "centigrams" && selectBox2.value == "metricTonnes") {
        calcValue = inputValue * (0.00000001)
        inputBox2.value = calcValue
    };
    //metricTonnes to centigrams
    if (selectBox1.value == "metricTonnes" && selectBox2.value == "centigrams") {
        calcValue = inputValue * (100000000)
        inputBox2.value = calcValue
    };
    // centigrams to ounces
    if (selectBox1.value == "centigrams" && selectBox2.value == "ounces") {
        calcValue = inputValue * (0.000353)
        inputBox2.value = calcValue
    };
    // ounces to centigrams
    if (selectBox1.value == "ounces" && selectBox2.value == "centigrams") {
        calcValue = inputValue * (2834.952)
        inputBox2.value = calcValue
    };
    // grams to kilograms
    if (selectBox1.value == "grams" && selectBox2.value == "kilograms") {
        calcValue = inputValue * (0.001)
        inputBox2.value = calcValue
    };
    // kilograms to grams
    if (selectBox1.value == "kilograms" && selectBox2.value == "grams") {
        calcValue = inputValue * (1000)
        inputBox2.value = calcValue
    };
    // grams to metricTonnes
    if (selectBox1.value == "grams" && selectBox2.value == "metricTonnes") {
        calcValue = inputValue * (0.000001)
        inputBox2.value = calcValue
    };
    // metriTonnes to grams
    if (selectBox1.value == "metricTonnes" && selectBox2.value == "grams") {
        calcValue = inputValue * (1000000)
        inputBox2.value = calcValue
    };
    // grams to ounces
    if (selectBox1.value == "grams" && selectBox2.value == "ounces") {
        calcValue = inputValue * (0.035274)
        inputBox2.value = calcValue
    };
    // ouncs to grams
    if (selectBox1.value == "ounces" && selectBox2.value == "grams") {
        calcValue = inputValue * (28.34952)
        inputBox2.value = calcValue
    };
    // kilograms to metricTonnes
    if (selectBox1.value == "kilograms" && selectBox2.value == "metricTonnes") {
        calcValue = inputValue * (0.001)
        inputBox2.value = calcValue
    };
    // metricTonnes to kilograms
    if (selectBox1.value == "metricTonnes" && selectBox2.value == "kilograms") {
        calcValue = inputValue * (1000)
        inputBox2.value = calcValue
    };
    //kilograms to ounces
    if (selectBox1.value == "kilograms" && selectBox2.value == "ounces") {
        calcValue = inputValue * (35.27396)
        inputBox2.value = calcValue
    };
    //ounces to kilograms
    if (selectBox1.value == "ounces" && selectBox2.value == "kilograms") {
        calcValue = inputValue * (0.02835)
        inputBox2.value = calcValue
    };
    // metricTonnes to ounces
    if (selectBox1.value == "metricTonnes" && selectBox2.value == "ounces") {
        calcValue = inputValue * (35273.96)
        inputBox2.value = calcValue
    };
    // ounces to metricTonnes
    if (selectBox1.value == "ounces" && selectBox2.value == "metricTonnes") {
        calcValue = inputValue * (0.000028)
        inputBox2.value = calcValue
    };

    // from a unit to same unit
    if (selectBox1.value === selectBox2.value) {
        inputBox2.value = inputValue
    }

    // if input is empty inputBox2 will be empty
    if (inputValue == "") {
        inputBox2.value = ""
    }
    
}

const calculateWeightReverse = () => {
    inputValue = +inputBox2.value
    // gram to milligram
    if (selectBox2.value == "milligrams" && selectBox1.value == "grams") {
        calcValue = (inputValue * (0.001));
        inputBox1.value = calcValue;
    };
    // milligram to gram
    if (selectBox2.value == "grams" && selectBox1.value == "milligrams") {
        calcValue = (inputValue * (1000));
        inputBox1.value = calcValue;
    };
    // centigrams to milligrams
    if (selectBox2.value == "milligrams" && selectBox1.value == "centigrams") {
        calcValue = (inputValue * (0.1));
        inputBox1.value = calcValue;
    };
    // milligrams to centigrams
    if (selectBox2.value == "centigrams" && selectBox1.value == "milligrams") {
        calcValue = (inputValue * (10));
        inputBox1.value = calcValue;
    };
    // kilograms to milligrams
    if (selectBox2.value == "milligrams" && selectBox1.value == "kilograms") {
        calcValue = (inputValue * (0.000001));
        inputBox1.value = calcValue;
    };
    // milligrams to kilograms
    if (selectBox2.value == "kilograms" && selectBox1.value == "milligrams") {
        calcValue = (inputValue * (1000000));
        inputBox1.value = calcValue;
    };
    // metricTonnes to milligrams
    if (selectBox2.value == "milligrams" && selectBox1.value == "metricTonnes") {
        calcValue = (inputValue * (0.000000001));
        inputBox1.value = calcValue;
    };
    // milligrams to metricTonnes
    if (selectBox2.value == "metricTonnes" && selectBox1.value == "milligrams") {
        calcValue = (inputValue * (1000000000));
        inputBox1.value = calcValue;
    };
    // ounces to milligrams
    if (selectBox2.value == "milligrams" && selectBox1.value == "ounces") {
        calcValue = (inputValue * (0.000035));
        inputBox1.value = calcValue;
    };
    // milligrams to ounces
    if (selectBox2.value == "ounces" && selectBox1.value == "milligrams") {
        calcValue = (inputValue * (28349.52));
        inputBox1.value = calcValue;
    };
    // grams to centigrams
    if (selectBox2.value == "centigrams" && selectBox1.value == "grams") {
        calcValue = inputValue * (0.01)
        inputBox1.value = calcValue
    };
    // centigrams to grams
    if (selectBox2.value == "grams" && selectBox1.value == "centigrams") {
        calcValue = inputValue * (100)
        inputBox1.value = calcValue
    };
    //kilograms to centigrams
    if (selectBox2.value == "centigrams" && selectBox1.value == "kilograms") {
        calcValue = inputValue * (0.00001)
        inputBox1.value = calcValue
    };
    //centigrams to kilograms
    if (selectBox2.value == "kilograms" && selectBox1.value == "centigrams") {
        calcValue = inputValue * (100000)
        inputBox1.value = calcValue
    };
    //metricTonnes to centigrams
    if (selectBox2.value == "centigrams" && selectBox1.value == "metricTonnes") {
        calcValue = inputValue * (0.00000001)
        inputBox1.value = calcValue
    };
    //centigrams to metricTonnes
    if (selectBox2.value == "metricTonnes" && selectBox1.value == "centigrams") {
        calcValue = inputValue * (100000000)
        inputBox1.value = calcValue
    };
    // ounces to centigrams
    if (selectBox2.value == "centigrams" && selectBox1.value == "ounces") {
        calcValue = inputValue * (0.000353)
        inputBox1.value = calcValue
    };
    // centigrams to ounces
    if (selectBox2.value == "ounces" && selectBox1.value == "centigrams") {
        calcValue = inputValue * (2834.952)
        inputBox1.value = calcValue
    };
    // kilograms to grams
    if (selectBox2.value == "grams" && selectBox1.value == "kilograms") {
        calcValue = inputValue * (0.001)
        inputBox1.value = calcValue
    };
    // grams to kilograms
    if (selectBox2.value == "kilograms" && selectBox1.value == "grams") {
        calcValue = inputValue * (1000)
        inputBox1.value = calcValue
    };
    // metricTonnes to grams
    if (selectBox2.value == "grams" && selectBox1.value == "metricTonnes") {
        calcValue = inputValue * (0.000001)
        inputBox1.value = calcValue
    };
    // grams to metricTonnes
    if (selectBox2.value == "metricTonnes" && selectBox1.value == "grams") {
        calcValue = inputValue * (1000000)
        inputBox1.value = calcValue
    };
    // ounces to grams
    if (selectBox2.value == "grams" && selectBox1.value == "ounces") {
        calcValue = inputValue * (0.035274)
        inputBox1.value = calcValue
    };
    // grams to ounces
    if (selectBox2.value == "ounces" && selectBox1.value == "grams") {
        calcValue = inputValue * (28.34952)
        inputBox1.value = calcValue
    };
    // metricTonnes to kilograms
    if (selectBox2.value == "kilograms" && selectBox1.value == "metricTonnes") {
        calcValue = inputValue * (0.001)
        inputBox1.value = calcValue
    };
    // kilograms to metricTonnes
    if (selectBox2.value == "metricTonnes" && selectBox1.value == "kilograms") {
        calcValue = inputValue * (1000)
        inputBox1.value = calcValue
    };
    //ounces to kilograms
    if (selectBox2.value == "kilograms" && selectBox1.value == "ounces") {
        calcValue = inputValue * (35.27396)
        inputBox1.value = calcValue
    };
    //kilograms to ounces
    if (selectBox2.value == "ounces" && selectBox1.value == "kilograms") {
        calcValue = inputValue * (0.02835)
        inputBox1.value = calcValue
    };
    // ounces to metricTonnes
    if (selectBox2.value == "metricTonnes" && selectBox1.value == "ounces") {
        calcValue = inputValue * (35273.96)
        inputBox1.value = calcValue
    };
    // metricTonnes to ounces
    if (selectBox2.value == "ounces" && selectBox1.value == "metricTonnes") {
        calcValue = inputValue * (0.000028)
        inputBox1.value = calcValue
    };

    // from a unit to same unit
    if (selectBox2.value === selectBox1.value) {
        inputBox1.value = inputValue
    }

    // if input is empty inputBox1 will be empty
    if (inputValue == "") {
        inputBox1.value = ""
    }
    
}


// on input in first inputbox => calculate result
inputBox1.oninput = () => {
    calculateWeight();
}

// on input in second inputbox => calculate result
inputBox2.oninput = () => {
    calculateWeightReverse();
}


// on selection of unit in first selection box => calculate result
selectBox1.onchange = () => {
    calculateWeight();
};

// on selection of unit in second selection box => calculate result
selectBox2.onchange = () => {
    calculateWeight();
};
