function transportFee(shift){
    if(shift === "morning"){
      return "R20";
    }else if(shift === "afternoon") {
      return "R10"
    }else if(shift === "night") {
      return "Free"
    }
    else{
      return ""
    }
  }
  
  console.log(transportFee("afternoon"))