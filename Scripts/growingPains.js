//  Task
// Create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision.
//  You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
// Here is the information you have been given:
// 1. The area in which the plants are contained is circular, with a radius of 5 meters.
//       Notes for INCHES -
//             1 meter = 39.3701 inches
//             -5 meters × 39.3701 inches/meter = 196.8505 inches.
//       Final Answer:
//          5 meters = 196.85 inches (approximately).
//
//       NOTES for YARDS -
//             1 meter = 1.09361 yards
//        Final Answer:
//        5 meters ≈ 5.47 yards.
//
// 2. The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
//                                  Area = PIr^2 = the area of the circle is approximately 78.54 square meters(
//A = πr2 3.1415 × 5 = 3.1415 × 2 5= 78.5375(rounded to 78.54)

//                                 pi is 3.1415
//                                 radius is 5 meters
// 3. Each plant requires a minimum space of 0.8 square meters.
// 4. The area is starting with 20 plants.
// 5. The plants double in number every week.
//
//----PREDICTIONS---
// Using this information, your objectives are to:
// A. Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// B-Pruned, to stop them from exceeding the capacity of the garden.
//   - PRUNE ONLY IF plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// C. Monitored, if they are growing at an acceptable rate.
//    - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// D. Planted, if there is room to plant more plants.
//    - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// E. Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const plantArea = "circle"; //Type of Area plant lives is a circular area
const plantAreaRadius = 5; //5 inches in radius for plant area
const minPlantSpace = 0.8;
let startingPlantNum = 20;
const PI = 3.1415;

// 2. The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
//                                  Area = PIr^2 = the area of the circle is approximately 78.54 square meters(
//       Notes for INCHES -
//             1 meter = 39.3701 inches
//             -5 meters × 39.3701 inches/meter = 196.8505 inches.
//       Final Answer:
//          5 meters = 196.85 inches (approximately).
//
//       NOTES for YARDS -
//             1 meter = 1.09361 yards
//        Final Answer:
//        5 meters ≈ 5.47 yards.
let areaInSquaredMeters = PI * plantAreaRadius * plantAreaRadius; //Calculate Area in Square Meters, of the space the current 20 plants live in.
console.log(areaInSquaredMeters);
const areaSquaredFormatted = areaInSquaredMeters.toFixed(2); //Format area by 2 decimals using the toFixed method that converst the numnber to a string and then rounds to 2 decimal places.
//the number specified in the parenthesis for the toFixed method can be changed to account for the number of decimal places desired to be displayed.
console.log(
  `Area in Squared Meters Formated with 2 decimal points is  ${areaSquaredFormatted}.`
);

// 3. Each plant requires a minimum space of 0.8 square meters.
//lets find out the number of plants I can plant in my little area
let totalNumberOfPlantsInGarden = areaInSquaredMeters / minPlantSpace;
let totalNumberOfPlantsInGardenRounded = Math.round(
  totalNumberOfPlantsInGarden
);
console.log(
  `Total number of plants that you can plant in a garden that is ${areaSquaredFormatted} meters in size is ${totalNumberOfPlantsInGardenRounded}`
);

//Calculations to check plant growth after 1 week using Math.pow function
function plantGrowth(week3) {
  //The plants will triple in number each week
  let growthOfPlant = startingPlantNum * Math.pow(3, week3); //plant growth after 3 weeks
  console.log(
    "Number of Plants growing in the garden after " + week3 + " weeks is ",
    growthOfPlant
  );

  //Calculate how much space is used by current number of plants in the garden by checking if 100% of garden space is used
  let gardenSpace = (growthOfPlant / startingPlantNum) * 100;
  console.log(
    "Total space used in the garden after " +
      week3 +
      " week(s) with " +
      growthOfPlant +
      " plants in the garden is ",
    gardenSpace + " squared Meters"
  );

  //lets decide what to do based on the following objectives
  //B-Pruned, to stop them from exceeding the capacity of the garden.
  //   - PRUNE ONLY IF plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
  // C. Monitored, if they are growing at an acceptable rate.
  //    - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
  // D. Planted, if there is room to plant more plants.
  //    - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
  if (gardenSpace > 80){
    console.log("Too many flowers in the garden. TIME TO PRUNE!!");
  } else if(gardenSpace >= 50 && gardenSpace <= 80){
    console.log("We will need to montor the plants growth for the next" + week3 + " weeks.");
  }else if (gardenSpace < 50){
    console.log("Time to plant!!");
  }else{
    console.log("Garden is almost bare!  What are you waiting on to plant more flowers???")
  }

}
//Change the week number to check for plant growth for the first 3 weeks
plantGrowth(1); //first week of plant growth
plantGrowth(2);//second week of plant growth
plantGrowth(3);//third week of plant growth
//***************************************** */
