// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
     
      let pilotStatusName = document.getElementById("pilotstatus")
      let copilotStatusName = document.getElementById("copilotStatus")
      
      let inputReady = true;


      if (pilotNameInput.value === "" || pilotNameInput.value === "" || fuelLevel.value === "" || cargoMass.value === "" ) {
         alert("All fields are required!");
         inputReady = false
         
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
