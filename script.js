const taskinput = document.querySelector("#taskinput");
const tasklist = document.getElementById("tasklist");
const addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", function () {
  const li = document.createElement("li");
  const text = document.createTextNode(taskinput.value);
  const text2 = document.createTextNode("Task Not Completed!");
  
  const div1 = document.createElement("div1");
  const div2 = document.createElement("div2");
  div1.classList.add("butdiv1");
  div2.classList.add("butdiv2");

  const donebtn = document.createElement("button");
  donebtn.textContent = "Done";
  donebtn.classList.add("donebtn");

  donebtn.addEventListener("click", function () {
    li.classList.toggle("completed");
    text2.textContent="Task Completed!";
  });

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("deletebtn");

  deletebtn.addEventListener("click", function () {
    li.remove();
  });

  let editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.classList.add("editbtn");

  editbtn.addEventListener("click", function () {
    const newtask = document.createElement("input");
    newtask.classList.add("editinput");
    
    newtask.type = "text";
    newtask.value = text.textContent;
    div2.appendChild(newtask);
    editbtn.textContent = "Save";
    editbtn.addEventListener("click", function () {
      text.textContent = newtask.value;
      editbtn.textContent = "Edit";
      div2.remove();
    });
  });

  li.appendChild(text);
  li.appendChild(div1);
  div1.appendChild(text2);
  div1.appendChild(donebtn);
  div1.appendChild(deletebtn);
  div1.appendChild(editbtn);
  
  div1.appendChild(div2);

  tasklist.appendChild(li);
  taskinput.value = "";
});
