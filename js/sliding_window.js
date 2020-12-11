// Given an array, find the average of all contiguous subarray of size ‘K’ in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
// arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]

const sub_arr = (arr, K) => {
    const results = [];
    for (let i = 0; i < arr.length; i++){
        if (i+K > arr.length){break;}
        let sum = 0;
        for (let j = i; j < i + K ; j++){
            sum += arr[j]
        }
        results.push(sum/K)
    }
    return results
}
// more efficient way of doing the same thing
const eff_sub_arr = (arr, K) => {
    const results = [];
    let start = 0,sum=0.0;
    for (let i = 0;i<arr.length;i++){
        // console.log("before sum: ", sum)
        sum +=arr[i]
        // console.log("sum: ", sum)
        if (i >= K -1 ){
            results.push(sum/K)
            sum -= arr[start]
            start += 1;
            // console.log("results: ", results)
            // console.log("after sum: ", sum)
        }
    }
    return results

}
console.log(eff_sub_arr([1, 3, 2, 6, -1, 4, 1, 8, 2],5))
