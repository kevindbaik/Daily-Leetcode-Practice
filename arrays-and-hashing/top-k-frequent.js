// 347. Top K Frequent Elements
// Medium
// https://leetcode.com/problems/top-k-frequent-elements/description/

//*Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
/**
 * * Example 1:
 * * Input: nums = [1,1,1,2,2,3], k = 2
 * * Output: [1,2]

* * Example 2:
* * Input: nums = [1], k = 1
* * Output: [1]

* * Constraints:
* * 1 <= nums.length <= 105
* * -104 <= nums[i] <= 104
* * k is in the range [1, the number of unique elements in the array].
* * It is guaranteed that the answer is unique.
*/

function topKFrequent(nums, k) {
  // Count frequencies
  const frequencyMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (frequencyMap[num] === undefined) {
      frequencyMap[num] = 1;
    } else {
      frequencyMap[num]++;
    }
  }

  // Create an array of frequencies
  // Initialize the array with empty arrays to hold the numbers with that frequency
  const frequencyArray = Array(nums.length + 1).fill().map(() => []);
  for (const num in frequencyMap) {
    const freq = frequencyMap[num];
    frequencyArray[freq].push(parseInt(num));
  }

  // Select the top k elements
  const result = [];
  for (let i = frequencyArray.length - 1; i >= 0 && result.length < k; i--) {
    if (frequencyArray[i].length > 0) {
      for (let j = 0; j < frequencyArray[i].length && result.length < k; j++) {
        result.push(frequencyArray[i][j]);
      }
    }
  }

  return result;
}

function topKFrequent(nums, k) {
  // Count the frequency of each element
  const frequencyMap = new Map();
  nums.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  // Convert map to array and sort based on frequency
  const sortedArray = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);

  // Extract the top k elements
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }

  return result;
}
