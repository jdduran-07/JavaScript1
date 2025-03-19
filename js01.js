    // display alert good after
    //window.alert("good Afternoon");
    // declare the variable to hold the div element 
     let container = document.getElementById("container");
    // get ElementById is the method to locate the element by the ID
    // container is an HTML element, it is a div in this case
    // set the content of element
  
    container.innerHTML = "<p>This is the container place</p>";
   // change the color style into red
   container.style.color = "red"
   // add the new element p into the page
   document.write("<p>This is new paragraph</p>");

   //declare a variable to hold the header
    let header = document.getElementsByTagName("h1")[0];

    let footer = document.getElementsByTagName("h1")[1];

   // declare a variable to hold button element
   let btnClickMe = document.getElementByID ("btnClickMe");// using 1
  
   btnClickMe.onclick = function () {

   // window.alert("hello");
   header.style.color = "red";

   footer.style.color = "blue";

   container.style.visibility ="hidden";

   }
   //handle the mouse out event the header
   header.onmouseove = function () {
        header.style.color= "black";
   }
    //handle the mouse out event the header

    // declare a variable to work on the text input user name
    let username = document.getElementById("username");
    
    username.onchange = function () {
        container.innerHTML = username.value;
    }