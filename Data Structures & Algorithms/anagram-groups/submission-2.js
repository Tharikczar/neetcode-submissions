class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let sortedArr = strs.map((item)=> item.split("").sort().join(""));

let sort = new Map();
for(let i=0;i<sortedArr.length;i++){
    if(sort.has(sortedArr[i])){
         sort.get(sortedArr[i]).push(strs[i]);
    }else{
        sort.set(sortedArr[i],[strs[i]])
    }
}

// for(let indices of sort.values()){
//      for (let i = 0; i < indices.length; i++) {
//         indices[i] = strs[indices[i]];
//     }
// }
return [...sort.values()];
}
}