let gpa = document.querySelector("#gpa");
let cgpa = document.querySelector("#cgpa");
let array = [
  { value: "0.00", text: "Grade" },
  { value: "4.00", text: "A" },
  { value: "3.70", text: "A-" },
  { value: "3.30", text: "B+" },
  { value: "3.00", text: "B" },
  { value: "2.70", text: "B-" },
  { value: "2.30", text: "C+" },
  { value: "2.00", text: "C" },
  { value: "1.70", text: "C-" },
  { value: "1.00", text: "D" },
  { value: "0.00", text: "F" },
];
let calculate = "";
let add = "";
let count = 1;
let flag = 0;
let totalCredits = 0;
let gradePoint = 0;
// gpa.addEventListener("click", (e) => {
const gpaFunc = () => {
  document.getElementById("mainDiv").innerHTML = ` 
    <h1>GPA Calculator</h1>
    <div class="container" id="container">
    <div class="row">
      <div class=" col-1">
        #
      </div>
      <div class=" col-4">
        Subjects(optional)
      </div>
      <div class=" col-3">
       Credits
      </div>
      <div class=" col-3">
        Grade
      </div>
    </div>
    <hr>
    <!-- first row -->
    <div class="row">
    <div class="col-1">
      1
    </div>
    <div class="col-4">
      <input type="text" class="form-control subjectName" placeholder="subject" id="${count}subject" >
    </div>
    <div class="col-3">
      <input type="text" class="form-control" placeholder="1" id="${count}credits" >
    </div>
    <div class="col-3">
      <select class="form-select form-select-sm " aria-label=".form-select-sm example" id="${count}grade">
          <option selected>Grade</option>
          <option value="4.00">A</option>
          <option value="3.70">A-</option>
          <option value="3.30">B+</option>
          <option value="3.00">B</option>
          <option value="2.70">B-</option>
          <option value="2.30">C+</option>
          <option value="2.00">C</option>
          <option value="1.70">C-</option>
          <option value="1.00">D</option>
          <option value="0.00">F</option>
          
        </select>
    </div>
  </div>
  </div>
  <div class="row d-flex justify-content-center"  >
  <button class="my-4" id="add">+ ADD</button>
  </div>
  <div class="row row d-flex justify-content-center" >
  <button class="my-1" id="calculate">Calculate</button>
  <button class="my-1 mx-2" id="clear">Clear</button>
  </div>
  <div class="row row d-flex justify-content-center" >
  <button class="my-1 mx-2" id="back" onclick="location.reload()">Back</button>
  </div>
  `;
  add = document.getElementById("add");
  calculate = document.getElementById("calculate");
  clear = document.getElementById("clear");
  addFunc();
  calculateFunc();
  clearFunc();
};

const addFunc = () => {
  console.log("click");

  add.addEventListener("click", (e) => {
    count++;
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.setAttribute("class", "row mt-3");
    div.setAttribute("id", "div");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "col-1");
    div1.innerText = `${count}`;
    let div2 = document.createElement("div");
    div2.setAttribute("class", "col-4");
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control subjectName");
    input1.setAttribute("id", `${count}subject`);
    input1.setAttribute("placeholder", "subject");
    div2.appendChild(input1);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "col-3");
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control");
    input2.setAttribute("id", `${count}credits`);
    input2.setAttribute("placeholder", "1");
    div3.appendChild(input2);
    let div4 = document.createElement("div4");
    div4.setAttribute("class", "col-3");

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.setAttribute("class", "form-select form-select-sm ");
    selectList.setAttribute("id", `${count}grade`);
    div4.appendChild(selectList);
    //Create and append the options
    for (let i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i].value;
      option.text = array[i].text;
      selectList.appendChild(option);
    }
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    container.appendChild(div);
  });
};

//calculate
let credits = "";
let grade = "";
const calculateFunc = () => {
  calculate.addEventListener("click", (e) => {
    flag = 0;
    totalCredits = 0;
    gradePoint = 0;
    for (let i = 1; i <= count; i++) {
      credits = document.getElementById(`${i}credits`).value;
      totalCredits += parseInt(credits);
      grade = document.getElementById(`${i}grade`).value;
      gradePoint += parseFloat(credits) * parseFloat(grade);
      if (credits == "" || grade == "") {
        flag = 1;
        showWarning();
        setTimeout(function () {
          removeWarning();
        }, 3500);
        continue;
      }
    }
    if (flag == 0) {
      let totalGPA = gradePoint / totalCredits;

      console.log(totalGPA);
      let show = document.getElementById("show");
      show.innerHTML = `<h3> your GPA is : ${totalGPA} </h3> <br> <h4> your Total Credits are : ${totalCredits} </h4>`;
    }
  });
};
const clearFunc = () => {
  clear.addEventListener("click", (e) => {
    console.log("click");
    count = 1;
    gpaFunc();
    document.getElementById("show").innerHTML = "";
  });
};

const showWarning = () => {
  console.log("show");
  document.getElementById("container").innerHTML +=
    "<p  class='red' id='warn'>Please Fill information</p>";
};

function removeWarning() {
  let id = document.getElementById("warn");
  id.remove();
}

//=======================================================================================
//CGPA
const cgpaFunc = () => {
  console.log("cgpa");
  document.getElementById("mainDiv").innerHTML = `
    <h1>CGPA Calculator</h1>
    <div class="container" id="container">
    <div class="row">
      <div class=" col-4">
        Semester
      </div>
      <div class=" col-4">
        Credits
      </div>
      <div class=" col-4">
       GPA
      </div>
     
    </div>
    <hr>
    <div class="row">
    <div class="col-4">
    <input type="text" class="form-control subjectName" placeholder="Semester ${count}"disabled >
    </div>
    <div class="col-4">
      <input type="text" class="form-control subjectName" placeholder="credits" id="${count}credits" >
    </div>
    <div class="col-4">
      <input type="text" class="form-control" placeholder="GPA"  id="${count}gpa" >
    </div>
    </div>
    <div class="row mt-2">
    <div class="col-4">
    <input type="text" class="form-control subjectName" placeholder="Semester ${
      count + 1
    }"disabled >
    </div>
    <div class="col-4">
      <input type="text" class="form-control subjectName" placeholder="credits" id="${
        count + 1
      }credits" >
    </div>
    <div class="col-4">
      <input type="text" class="form-control" placeholder="GPA"  id="${
        count + 1
      }gpa" >
    </div>
    </div>
    </div>
    <div class="row d-flex justify-content-center"  >
    <button class="my-4" id="add">+ ADD</button>
    </div>
    <div class="row row d-flex justify-content-center" >
    <button class="my-1" id="calculate">Calculate</button>
    <button class="my-1 mx-2" id="clear">Clear</button>
    </div>
    <div class="row row d-flex justify-content-center" >
    <button class="my-1 mx-2" id="back" onclick="location.reload()">Back</button>
    </div>
    `;
  count++;
  add = document.getElementById("add");
  calculate = document.getElementById("calculate");
  clear = document.getElementById("clear");
  cgpaAddFunc();
   cgpaCalculateFunc();
   cgpaClearFunc();
};

const cgpaAddFunc = () => {
  console.log("click");

  add.addEventListener("click", (e) => {
    console.log("click add");

    count++;
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.setAttribute("class", "row mt-3");
    div.setAttribute("id", "div");
    let div1 = document.createElement("div");
    div1.setAttribute("class", "col-4");
    let input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control");
    input1.setAttribute("id", `${count}semester`);
    input1.setAttribute("placeholder", `Semester ${count}`);
    input1.setAttribute("disabled", true);
    div1.appendChild(input1);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "col-4");
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control ");
    input2.setAttribute("id", `${count}credits`);
    input2.setAttribute("placeholder", "Credits");
    div2.appendChild(input2);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "col-4");
    let input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("class", "form-control ");
    input3.setAttribute("id", `${count}gpa`);
    input3.setAttribute("placeholder", "GPA");
    div3.appendChild(input3);

    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    container.appendChild(div);
  });
};

//Calculate CGPA
let tcredits = 0;
let tgpa = 0;
const cgpaCalculateFunc = () => {
  calculate.addEventListener("click", (e) => {
    flag = 0;
    totalCredits = 0;
    gradePoint = 0;
    for (let i = 1; i <= count; i++) {
      tcredits = document.getElementById(`${i}credits`).value;
      totalCredits += parseInt(tcredits);
      tgpa = document.getElementById(`${i}gpa`).value;
      gradePoint += parseFloat(tcredits) * parseFloat(tgpa);
      if (tcredits == "" || tgpa == "") {
        flag = 1;
        showWarning();
        setTimeout(function () {
          removeWarning();
        }, 3500);
        continue;
      }
    }
    if (flag == 0) {
      let CGPA = gradePoint / totalCredits;

      console.log(CGPA);
      let show = document.getElementById("show");
      show.innerHTML = `<h3> your CGPA is : ${CGPA} </h3> <br> <h4> your Total Credits are : ${totalCredits} </h4>`;
    }
  });
};

const cgpaClearFunc = () => {
  clear.addEventListener("click", (e) => {
    console.log("click");
    count = 1;
    cgpaFunc();
    document.getElementById("show").innerHTML = "";
  });
};