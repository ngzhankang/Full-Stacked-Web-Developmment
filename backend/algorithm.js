/** 
 ** title: the correct performance problem
 ** problem: to get the performanceId, the startTime and the endTime of the performance that is related to the festivalId when inputted
 ** in the process, check if the performances clash with one another or not, if it does rearrange, and if not possible, drop it.
**/

const database = require("./database");

// catch error here
async function compute (festivalId) {
    try{return { error: null, result: await selectPerformanceByFestivalId(festivalId)}} 
    catch (error) {return { error, result: null };}
} 

// 1. selectPerformance to correctly select set of performance for computation
async function selectPerformanceByFestivalId(festivalId) {
    const performances = await database.getPerformanceByFestivalId(festivalId)
    const l = performances.length;  //length of performances
    const selectedPerformance = []; //create a new array selectedPerformance
    for (let i = 0; i < l; i++) {   //iterate through all the festivalId
        selectedPerformance.push(performances[i]);  //push filtered performance into the array
    };
    return selectedPerformance; //return the array
};

// 2. sortPerformance to sort performance by increasing order of their finishing time
async function sortPerformanceByFinishTime(endTime) {
    const filteredPerformance = await selectPerformanceByFestivalId;  //do a await to let the previous function execute first before continuing
    const storeArray = []   //create a new array to reorder the stuff again
    console.log(filteredPerformance)
    for (i = 0; i < filteredPerformance.length; i++) {  //do a for loop to go thru each selected performance
        if (filteredPerformance.endTime[i] < filteredPerformance.endTime[i + 1]) {
            storeArray.push(filteredPerformance.endTime[i]);// store it into a new array
        };
        console.log(filteredPerformance[i])

        // console.log(storeArray);
    };
    // return storeArray
};
// // 3. selectedPerformances to maintain a list of selected performance
// const selectedPerformances = [];

// // 4. iteratePerformance to iterate through each of the sorted performance
// for (...) {
//     const performance = sortedSelectedPerformance[i];
//     if (doesNotClash(selectedPerformance, performance)) {
//         // 4a add
//         selectedPerformances.push(performance);
//     }
// }


// export modules
module.exports = {
    compute
}