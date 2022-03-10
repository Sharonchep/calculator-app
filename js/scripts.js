  function date(){
    let male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  let female=["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama"];
  let gender=document.getElementById("gender").value;
  console.log(gender)


  let day= document.getElementById("day").value; 
  let month= document.getElementById("month").value; 
  let year= document.getElementById("year").value;
  let input=month+"/"+  day+"/"+year
  let date=new Date(input).getDay();
  let submit=["Born on Sunday","Born on Monday","Born on Tuesday","Born on Wednesday","Born Thursday","Born on Friday","Born on Saturday"];
  console.log(date)
  document.getElementById("output").textContent = submit[date];
  
  if (day<=0 ||day >31){
  alert("date should not exceed 1-31");
  } 
  if (month<=0||month>12){
    alert("month should not exceed 1-12");
  }  

   else{
  let d=submit[date];
  if (gender==="female"){
    let submit=["Akosua","Adwao","Abenaa","Akua","Yaa","Afua","Ama"];
    document.getElementById("output1").textContent = submit[date];
    console.log(female[d]);
  }
  if(gender==="male"){
  let submit=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  document.getElementById("output1").textContent = submit[date];
  console.log(male[d]);
  }
}
}

  



