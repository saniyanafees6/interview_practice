// Problem Statement #
//     Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
//
// Example 1:
//
// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
//     Example 2:
//
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

const sub_arr = (arr, K) => {
    const result = [];
    let sum = 0,
        start = 0,
        max = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        if (i >= K - 1){
            if (max < sum){
                max = sum;
            }
            result.push(sum);
            sum -= arr[start];
            start += 1;
        }
    }
    return max;
}

console.log(sub_arr([2, 1, 5, 1, 3, 2],3))