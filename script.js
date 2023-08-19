let string ="";
let buttons = document.querySelectorAll(".buttons");
Array.from(buttons).forEach((button)=>{
  button.addEventListener("click",(e)=>{
    
    let ele = e.target.innerHTML;
    if(ele==="="){
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if(ele==="C"){
      string ="";
      document.querySelector("input").value = string;
    }
    // else if(ele==="^"){
    //   console.log(string);
    //   string +ele;
    //   document.querySelector("input").value = string;
      
    // }
    else{
      string = string + ele;
      document.querySelector("input").value = string;
    }
    

    

  })
})