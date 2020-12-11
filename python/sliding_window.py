# Given an array, find the average of all contiguous subarray of size ‘K’ in it.
# Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
# arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]


def avg_of_arr(arr, K):
    result = []
    for i in range(len(arr) - K + 1):
        sum = 0.0
        for j in range(i, K + i):
            sum += arr[j]
        result.append(sum / K)
    return result


def main():
    res = avg_of_arr([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)
    print("Average of subarrays: ", str(res))


main()
