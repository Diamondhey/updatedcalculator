let name; // Filtering and reducer on 105'th and 112'th lines
let price; // object on 154'th line
let loveletter; // let there and const on 105'th line
let result; // conditionals everywhere
let tprice = []; // logical operators 164'th line
let chbx = 0; //function composition 105'th line
var t_res; // ES6 template string (`Like this ${variable}) 172'th line
var skill_counter = []; // arrow function 112'th line
var reputation_counter = []; // for loop 98'th line
var id_counter = ["age1", "age2", "age3"];

document.getElementById("title").innerHTML = "Calculator of bride price"; // <=== DOM manipulations with HTML: 6, 7 and 83 - lines
document.getElementById("button").value = "Calculate price"; // <== DOM manipulation with HTML
document.getElementById("window").style.backgroundColor = "wheat"; // <========= this one - DOM manipulation with CSS

function firstCal() {
  //function
  var select = document.getElementById("education");
  var value = select.options[select.selectedIndex].value;

  if (value == 1.5) {
    result = value;
  }

  if (value == 1.2) {
    result = value;
  }

  if (value == 1.05) {
    result = value;
  }

  if (value == 0.9) {
    result = value;
  }

  tprice[0] = result;

  console.log(tprice[0]);
}

function secondCal() {
  var select = document.getElementById("family");
  var value = select.options[select.selectedIndex].value;

  if (value == 2) {
    result = value;
  }

  if (value == 1.5) {
    result = value;
  }

  if (value == 1.2) {
    result = value;
  }

  tprice[1] = result;
  console.log(tprice[1]);
}

function thirdCal() {
  var select = document.getElementById("caste");
  var value = select.options[select.selectedIndex].value;

  if (value == 100) {
    result = parseInt(value);
  }

  if (value == 50) {
    result = parseInt(value);
  }

  if (value == 20) {
    result = parseInt(value);
  }

  if (value == 10) {
    result = parseInt(value);
  }

  if (value == -50) {
    result = parseInt(value);
  }

  tprice[2] = result;
  console.log(tprice[2]);
}

function checkboxCal(item) {
  if (filteration(item) == true) {
    skill_counter.push(parseFloat(item.value));
  } else {
    for (var i = 0; i < skill_counter.length; ++i) {
      if (skill_counter[i] == item.value) {
        skill_counter.splice(i, 1);
      }
    }
  }

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  tprice[3] = skill_counter.reduce(reducer);

  console.log(tprice[3]);
}

const filteration = (item) => {
  return item.checked;
};

function getRadioValue() {
  id_counter.forEach(function (count) {
    if (document.getElementById(count).checked == true) {
      tprice[4] = document.getElementById(count).value;
    }
  });

  console.log(tprice[4]);
}

function lastCal(reputation) {
  if (filteration(reputation) == true) {
    reputation_counter.push(parseFloat(reputation.value));
  } else {
    for (var i = 0; i < reputation_counter.length; ++i) {
      if (reputation_counter[i] == reputation.value) {
        reputation_counter.splice(i, 1);
      }
    }
  }

  console.log(reputation_counter);
}

function clickButton() {
  if (
    document.getElementById("uname").value == "" ||
    document.getElementById("startingbid").value == ""
  ) {
    alert("Please input bride`s name and starting bid!");
  } else {
    name = document.getElementById("uname").value;
    price = Number(startingbid.value);
    loveletter = document.getElementById("l_letter").value;

    t_res = (price * tprice[0] * tprice[1] + tprice[2] + tprice[3]) * tprice[4];

    for (var i = 0; i < reputation_counter.length; i++) {
      if (reputation_counter[i] < 0) {
        t_res = t_res + reputation_counter[i];
      } else {
        t_res = t_res * reputation_counter[i];
      }
    }
    let human = {
      h_name: name,
      h_price: t_res,
      h_lletter: loveletter,
    };
    console.log(human);

    document.getElementById(
      "number"
    ).innerHTML = `Your price for ${human.h_name} is ${human.h_price}$, Your message is - "${human.h_lletter}" `;
  }
}
document.querySelector("#button").addEventListener("click", clickButton);
