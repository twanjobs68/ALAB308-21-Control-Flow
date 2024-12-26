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

// const plantArea = "circle"; //Type of Area plant lives is a circular area
const plantAreaRadius = 5; //5 inches in radius for plant area
const minPlantSpace = 0.8; // square meters of space for each plant
const startingPlantNum = 20; //original number of plants
const pi = 3.1415; // PI

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
let areaInSquaredMeters = pi * plantAreaRadius * plantAreaRadius; //Calculate circular Area in Square Meters- The space the current 20 plants live in.
console.log(areaInSquaredMeters);
const areaSquaredFormatted = areaInSquaredMeters.toFixed(2); //Format area by 2 decimals using the toFixed method that converst the numnber to a string and then rounds to 2 decimal places.
//the number specified in the parenthesis for the toFixed method can be changed to account for the number of decimal places desired to be displayed.
console.log(
  "Area of garden in Squared Meters Formated with 2 decimal points is ",
  areaSquaredFormatted
);

// 3. Each plant requires a minimum space of 0.8 square meters.
//lets find out the number of plants I can plant in my little space by dividing the space 1 plant needs into the area that I have available
let totalNumberOfPlantsInGarden = Math.floor(
  areaInSquaredMeters / minPlantSpace); //Math.floor function is used to round down the number to a whole number

//area of garden divided by the minimum plants in the garden
let totalNumberOfPlantsInGardenRounded = Math.round(
  totalNumberOfPlantsInGarden
);
console.log(
  `Total number of plants that you can plant in the garden that is ${areaSquaredFormatted} meters in size is ${totalNumberOfPlantsInGardenRounded}`);
console.log("Plants will double in volume each week.");

//Calculations to check plant growth after each weeks using Math.pow function
function plantGrowth(week1) {
  //The plants will doublele in number every week
  console.log("The original number of plants in the garden is ", startingPlantNum);
  let growthOfPlant = startingPlantNum * Math.pow(2, week1); //number of plants in garden after 1 week
  console.log(
    "Number of Plants growing in the garden after " + week1 + " weeks is ",
    growthOfPlant
  );

  //Calculate how much space is used by current number of plants in the garden by checking if 100% of garden space is used
  let gardenSpace = (growthOfPlant / totalNumberOfPlantsInGarden) * 100;
  console.log(
    "Total space used in the garden after " +
      week1 +
      " week(s) with " +
      growthOfPlant +
      " plants in the garden is ",
    gardenSpace.toFixed(2) + " squared Meters"
  );

  //lets decide what to do based on the following objectives
  //B-Pruned, to stop them from exceeding the capacity of the garden.
  //   - PRUNE ONLY IF plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
  // C. Monitored, if they are growing at an acceptable rate.
  //    - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
  // D. Planted, if there is room to plant more plants.
  //    - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden
    try {
          if (gardenSpace > 80) {
             console.log("Too many flowers in the garden. TIME TO PRUNE!!");

        } else if (gardenSpace >= 50 && gardenSpace <= 80) {
            console.log("We will need to montor the plants growth for the next" + week1 + " weeks.");

        } else if (gardenSpace < 50) {

             console.log("Time to plant!!");

        } else {
              console.log("Garden is bare!  What are you waiting on to plant more flowers???");
         }
    } catch (error){
            console.log(error, "check garden space!");
        }
    
}
//Change the week number to check for plant growth for the first 3 weeks
plantGrowth(1); //first week of plant growth
plantGrowth(2); //second week of plant growth
plantGrowth(3); //third week of plant growth
//***************************************** */
console.log(" End of Part 1"); // Constants
//**************************************** */

console.log("Part 2 - Thinking Bigger");
//Objective
//Using the logic you have already created, determine:
//The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
//If the space remained circular, what would be the radius of this expanded garden?

const plantAreaRadius2 = 5; //5 inches in radius for plant area
const minPlantSpace2 = 0.8; //square meters of space
const startingPlantNum2 = 100; //original number of plants in garden
const PI2 = 3.1415; //PI

let areaInSquaredMeters2 = PI2 * plantAreaRadius * plantAreaRadius; //Calculate Area in of the circle in Square Meters-*the space the current 100 plants live in.
console.log(areaInSquaredMeters2);

const areaSquaredFormatted2 = areaInSquaredMeters2.toFixed(2); //Format area by 2 decimals using the toFixed method that converst the numnber to a string and then rounds to 2 decimal places.
//the number specified in the parenthesis for the toFixed method can be changed to account for the number of decimal places desired to be displayed.
console.log(
  "Original Area of garden with 100 plants, in Squared Meters Formated with 2 decimal points is ", areaSquaredFormatted2 );

// 3. Each plant requires a minimum space of 0.8 square meters.
//lets find out the number of plants I can plant in my little area by dividing the space 1 plant needs into the area that I have available
let totalNumberOfPlantsInGarden2 = Math.floor(areaInSquaredMeters2 / minPlantSpace2); 
console.log(totalNumberOfPlantsInGarden2); //Math.floor function is used to round down the number to a whole number

//area if garden divided by the minimum plants in the garden
let totalNumberOfPlantsInGardenRounded2 = Math.round(totalNumberOfPlantsInGarden2);
console.log(  `Total number of plants that you can plant in the garden that is ${areaSquaredFormatted2} 
    meters in size is ${totalNumberOfPlantsInGardenRounded}`);
   console.log("Plants will double in volume each week!");
   
//Calculations to check plant growth after each week using Math.pow function
function plantGrowth2(week10) {
  //The plants will double in number each week
  let growthOfPlant2 = startingPlantNum2 * Math.pow(2, week10); //calculate number of plants in garden after weeks 9 and 10
  console.log(
    "Number of Plants growing in the garden after " + week10 + " weeks is ",
    growthOfPlant2
  );

  //Calculate how much space is used by current number of plants in the garden by checking if 100% of garden space is used
  let gardenSpace2 = (growthOfPlant2 / totalNumberOfPlantsInGarden2) * 100;
  console.log(
    "Total space used in the garden after " + week10 + " week(s) with " + growthOfPlant2 + " plants in the garden is ", gardenSpace2.toFixed(2) + " squared Meters");
  
  //lets decide what to do based on the following objectives
  //B-Pruned, to stop them from exceeding the capacity of the garden.
  //   - PRUNE ONLY IF plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
  // C. Monitored, if they are growing at an acceptable rate.
  //    - This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
  // D. Planted, if there is room to plant more plants.
  //    - This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
  console.log(
    "Total radius of garden for " + totalNumberOfPlantsInGarden2 + " plants would be " + gardenSpace2.toFixed(2) + " square meters.");
  console.log("Additional amount of space needed in the garden for " + totalNumberOfPlantsInGarden2 + "is ");

  if (gardenSpace2 > 80) {
    console.log("Too many flowers in the garden. TIME TO PRUNE!!");

  } else if (gardenSpace2 >= 50 && gardenSpace2 <= 80) {
    console.log(
      "We will need to montor the plants growth for the next" +
        week10 +
        " weeks."
    );
  } else if (gardenSpace2 < 50) {
    console.log("Time to plant!!");
  } else {
    console.log(
      "Garden is almost bare!  What are you waiting on to plant more flowers???"
    );
  }

  const additionalSpace2 = gardenSpace2 - areaInSquaredMeters;
  console.log(
    "additional space needed for 100 plants if no pruning is done for 10 weeks is ",
    additionalSpace2.toFixed(2) + " squared meters."
  );
  
}


//Change the week number to check for plant growth for each week
// plantGrowth2(1); //week 1 of plant growth
// plantGrowth2(2); //week 2 of plant growth
// plantGrowth2(3); //week 3 of plant growth
// plantGrowth2(4); //week 4 of plant growth
// plantGrowth2(5); //week 5 of plant growth
// plantGrowth2(6); //week 6 of plant growth
// plantGrowth2(7); //week 7 of plant growth
// plantGrowth2(8); //week 8 of plant growth
// plantGrowth2(9); //week 9 of plant growth
plantGrowth2(10);//week 10 of plant growth//***************************************** */
console.log(" End of Part 2"); // Constants
//**************************************** */
