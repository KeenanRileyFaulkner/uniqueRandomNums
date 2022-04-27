// Write your code below this line.

//create sorted array with vals from 1 through max random "lucky" number desired
const nums = [];
const MAX_RANDOM_NUMBER = 10;
for(let i = 0; i < MAX_RANDOM_NUMBER; ++i) {
    nums.push(i + 1);
}

//generate lucky nums with no repeats unless numPicks is greater than MAX_RANDOM_NUM
//each number generates in constant time
//algorithm performs in O(numPicks)
//no need to traverse answer array to check previous picks
function generateLuckyNums(numPicks) {
    //set variable to final index of array
    let maxIndex = nums.length - 1;
    let answer = [];

    //for every pick
    //-if the maxIndex var is less than zero, reset it (number of picks is bigger than MAX_RANDOM_NUM)
    //-pick a random number between 0 and maxIndex
    //-swap the value of the nums array at that random number with the value of the nums array at the maxIndex
    //-add that value to the answer array
    //-decrement max index
    for(let i = 0; i < numPicks; ++i) {
        if(maxIndex < 0) {
            maxIndex = nums.length - 1;
        }

        let pickedIndex = Math.floor(Math.random() * (maxIndex + 1));
        let temp = nums[maxIndex];
        nums[maxIndex] = nums[pickedIndex];
        nums[pickedIndex] = temp;
        answer.push(nums[maxIndex]);
        maxIndex--;
    }

    return answer;
}