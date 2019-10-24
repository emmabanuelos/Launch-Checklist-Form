// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json) {
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${json[0].name}</li>
      <li>Diameter: ${json[0].diameter}</li>
      <li>Star: ${json[0].star}</li>
      <li>Distance from Earth: ${json[0].distance}</li>
      <li>Number of Moons: ${json[0].moons}</li>
   </ol>
   <img src="${json[0].image}">`
   
  let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
     
      // let pilotStatusName = document.getElementById("pilotStatus")
      // let copilotStatusName = document.getElementById("copilotStatus")
      // Number(fuelLevelInput.value);
      // Number(cargoMassInput.value);
      event.preventDefault();
      //  let readyForInput = true; //each time that the page refreshes, it goes back to true


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" || isNaN(cargoMassInput.value) || isNaN(fuelLevelInput.value) || !(isNaN(pilotNameInput.value)) || !(isNaN(copilotNameInput.value))) {
         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" ){
            event.preventDefault();
            alert("Ooops! All fields are required!");
         }
         // readyForInput = false //pull input ready in the tests make sure the input is false 
         if(!(isNaN(pilotNameInput.value))|| !(isNaN(copilotNameInput.value))){
            event.preventDefault();
            alert("Make Sure to Enter Valid Information for Each Field!")
         }

         if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {         
            alert("Make Sure to Enter Valid Information for Each Field!");
            // console.log(fuelLevelInput.value);  
            event.preventDefault();
            }

            }else{
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready!`
               document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameInput.value} is ready!`
               document.getElementById("faultyItems").style.visibility = "visible"
         
         if(fuelLevelInput.value <= 9999){
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch!`
            document.getElementById("fuelStatus").style.color = "red"
            document.getElementById("launchStatus").style.color = "red"
            // event.preventDefault();
         }
         if(cargoMassInput.value >= 10000 ){
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
            document.getElementById("cargoStatus").innerHTML = `Cargo weight too high for launch!`
            document.getElementById("cargoStatus").style.color = "red"
            document.getElementById("launchStatus").style.color = "red"
            // event.preventDefault();
   }
         else if(fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000){
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`
            document.getElementById("launchStatus").style.color = "green"
            event.preventDefault();
         }
      }});
         

         
         
        
               
})})})              
               
              
               
       

            
               
   
   //     if (readyForInput) {
   //       let pilotStatusVar = document.querySelector("#pilotStatus")
   //       let copilotStatusVar = document.querySelector("#copilotStatus")
   
   //       pilotStatusVar.textContent = `Pilot ${pilotNameInput.value} is ready`
   //       copilotStatusVar.textContent = `Co-pilot ${copilotNameInput.value} is ready`
   //       document.querySelector('#fuelStatus').textContent = 'Fuel level high enough for launch'
   //       document.querySelector('#cargoStatus').textContent = 'Cargo mass low enough for launch'
   
   //       let readyToLaunch = true
   //       let fuelLevel = Number(fuelLevelInput.value)
   //       if (fuelLevel < 10000) {
   //         let fuelStatusLi = document.querySelector("#fuelStatus")
   //         fuelStatusLi.textContent = "Not enough fuel for journey"
   
   //         document.querySelector('#launchStatus').textContent = 'Shuttle not ready'
   //         document.querySelector('#launchStatus').style.color = "red"
   
   //         let faultyItemsDiv = document.querySelector("#faultyItems")
   //         faultyItemsDiv.style.visibility = "visible"
   //         ReadyToLaunch = false
   //       }

   //       let cargoMassNumber = Number(cargoMassInput.value)

   //       if (cargoMassNumber > 10000) {
   //         document.querySelector('#launchStatus').textContent = 'Shuttle not ready'
   //         document.querySelector('#launchStatus').style.color = "red"
   //         document.querySelector('#cargoStatus').textContent = "Cargo mass too great for takeoff"
   //         let faultyItemsDiv = document.querySelector("#faultyItems")
   //         faultyItemsDiv.style.visibility = "visible"
   //         launchReady = false
   //       }

   //       if (readyToLaunch) {
   //         document.querySelector("#launchStatus").style.color = "green"
   //         document.querySelector('#launchStatus').textContent = 'Shuttle is ready for launch'
   //         let faultyItemsDiv = document.querySelector("#faultyItems")
   //         faultyItemsDiv.style.visibility = "visible"
   //       }
   
   //     }
   //   })
   
 
   // 

/* This block of code shows how to format the HTML once you fetch some planetary JSON! */
// this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
//    response.json().then(function(json) {
//    document.getElementById("missionTarget").innerHTML = `
//    <h2>Mission Destination</h2>
//    <ol>
//       <li>Name: ${json[2].name}</li>
//       <li>Diameter: ${json[2].diameter}</li>
//       <li>Star: ${json[2].star}</li>
//       <li>Distance from Earth: ${json[2].distance}</li>
//       <li>Number of Moons: ${json[2].moons}</li>
//    </ol>
//    <img src="${json[2].image}">`
