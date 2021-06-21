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
let calculate="";
let add = "";
let count = 1;
let totalCredits=0;
let gradePoint=0;
// gpa.addEventListener("click", (e) => {
  const mainFunc=()=>{
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
    selectList.setAttribute('class' ,"form-select form-select-sm ");
    selectList.setAttribute('id' ,`${count}grade`);
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
const calculateFunc=()=>{
calculate.addEventListener('click',(e)=>{
    for(let i=1;i<=count;i++)
    {
        let credits=document.getElementById(`${i}credits`).value;
        totalCredits+=parseInt(credits);
         let grade=document.getElementById(`${i}grade`).value;
         gradePoint +=(parseFloat(credits)*parseFloat(grade))    
    }
    let totalGPA= gradePoint/totalCredits;
    // console.log(totalCredits);
    // console.log(gradePoint);
    console.log(totalGPA);
    let show=document.getElementById('show');
   show.innerHTML=`<h3> your GPA is : ${totalGPA} </h3> <br> <h4> your Total Credits are : ${totalCredits} </h4>`
})
}
const clearFunc=()=>{
  clear.addEventListener('click',(e)=>{
    console.log('click');
    count=1;
    mainFunc();
    document.getElementById('show').innerHTML="";
  })

}







// cgpa.addEventListener('click',(e)=>{
//     console.log('cgpa');

// })