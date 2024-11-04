import isSorted from "./isSorted.js";
import simpleSort from "./simpleSort.js";
window.addEventListener('load', init);

function init() {
    const random = [1,2,4,6,5,7,9,8,10]
    const actualRandom = [3, 5, 2, 6, 8, 1, 9, 7, 4]
    const sort1 = simpleSort(random);
    console.log(sort1);
    const sort2 = simpleSort(actualRandom);
    console.log(sort2);
}



// #region test functions
function testIsSOrted() {
    const perfectSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
    const sortedWithHoles = [1, 2, 4, 5, 7, 9, 11]
    const sortedWithHolesAndRepeats = [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12]
    const reversePerfectSorted = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    const random = [3, 5, 2, 6, 8, 1, 9, 7, 4]
    const almostSorted = [1, 2, 4, 4, 5, 3, 6, 7, 8]
    const oopsAllFours = [4, 4, 4, 4, 4, 4, 4, 4, 4]

    const sorted1 = isSorted(perfectSorted);
    console.log("Perfect sorted",sorted1);
    
    const sorted2 = isSorted(sortedWithHoles);
    console.log(sorted2);
    
    
    
    
    const sorted3 = isSorted(sortedWithHolesAndRepeats);
    console.log(sorted3);

    const sorted4 = isSorted(reversePerfectSorted);
    console.log(sorted4);

    const sorted5 = isSorted(random);
    console.log(sorted5);

    const sorted6 = isSorted(almostSorted);
    console.log(sorted6);

    const sorted7 = isSorted(oopsAllFours);
    console.log(sorted7);

    
}

