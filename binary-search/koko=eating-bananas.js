// 875. Koko Eating Bananas
// Medium
// https://leetcode.com/problems/koko-eating-bananas/description/

//* Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
//* Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has
//* less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
//* Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

//* Return the minimum integer k such that she can eat all the bananas within h hours.


/**
 * * Example 1:
 * * Input: piles = [3,6,7,11], h = 8
 * * Output: 4

* * Example 2:
* * Input: piles = [30,11,23,4,20], h = 5
* * Output: 30

*/

//! my explanation
// i need to find the minimum eating speed that allows Koko to eat all the bananas within H hours
// since the eating speed that allows Koko to finish the bananas in H hours lies within a range
// (minimum speed of 1 and maximum speed being the largest pile since she can eat the largest pile in one hour at most),
// i can use binary search to efficiently find the minimum speed.

function minEatingSpeed(piles, H) {
  let left = 1;
  let right = Math.max(...piles);

  while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (canEatAllBananas(piles, mid, H)) {
          right = mid;
      } else {
          left = mid + 1;
      }
  }
  return left;
}

function canEatAllBananas(piles, speed, H) {
  let hoursNeeded = 0;
  for (let pile of piles) {
      hoursNeeded += Math.ceil(pile / speed);
  }
  return hoursNeeded <= H;
}
