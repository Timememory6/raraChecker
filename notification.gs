function ProcessForm(formObject){
  const userProperties = PropertiesService.getUserProperties(); 
  try{
    rara_library.ProcessForm(userProperties, formObject);
  }catch(error){
    console.log(error)
    console.log("failed to getLastTime");
  }
}

function Interval(){
  console.log("interval")
  let lastTime;
  try{
    lastTime = rara_library.getLastTime(userProperties);
  }catch(error){
    console.log(error)
    console.log("failed to getLastTime");
  }

  try{
    rara_library.checkAll(fullUrl, lastTime, emailAddress);
  }catch(error){
    console.log(error)
    console.log("failed to checkAll");
  }

  try{
    rara_library.setLastTime(userProperties);
  }catch(error){
    console.log(error)
    console.log("failed to setLastTime");
  }
}

function Delete(){
  try{
    rara_library.Delete();
  }catch(error){
    console.log(error)
    console.log("failed to setLastTime");
  }
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function doPost() {
  return HtmlService.createTemplateFromFile('submitted').evaluate();
}


