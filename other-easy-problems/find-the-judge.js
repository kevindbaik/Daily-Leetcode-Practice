// 997. Find The Town Judge
// Easy
// https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22

//* In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
//* If the town judge exists, then:
//* The town judge trusts nobody.
//* Everybody (except for the town judge) trusts the town judge.
//* There is exactly one person that satisfies properties 1 and 2.
//* You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
//* Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

/**
 * * Example 1:
 * * Input: n = 3, trust = [[1,3],[2,3]]
 * * Output: 3

* * Example 2:
* * Input: n = 3, trust = [[1,3],[2,3],[3,1]]
* * Output: -1

*/

// my first solution
var findJudge = function(n, trust) {
  const trustHash = {}
  for(let i = 1; i <= n; i++) {
      trustHash[i] = [0, 0]
                   // [incoming trust, outgoing trust]
  }

   for(const [a, b] of trust) {
       trustHash[a][0]++
       trustHash[b][1]++
   }

   for(let i = 1; i <= n; i++) {
       if(trustHash[i][1] === n - 1 && trustHash[i][0] === 0) return i
   }

   return -1;
};
