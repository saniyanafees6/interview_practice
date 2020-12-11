# Problem Statement
#
# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any
# contiguous subarray of size ‘k’.


# Example 1:
#
# Input: [2, 1, 5, 1, 3, 2], k=3
# Output: 9
# Explanation: Subarray with maximum sum is [5, 1, 3].


# Example 2:
#
# Input: [2, 3, 4, 1, 5], k=2
# Output: 7
# Explanation: Subarray with maximum sum is [3, 4].


def sub_arr(arr, K):
    result = []
    sum = 0
    start = 0
    max = 0
    for i in range(len(arr)):
        sum += arr[i]
        if i >= K - 1:
            if max < sum:
                max = sum
            result.append(sum)
            sum -= arr[start]
            start += 1
    return max


def main():
    print(sub_arr([2, 3, 4, 1, 5], 2))


main()
