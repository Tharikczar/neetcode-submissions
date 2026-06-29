class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
         let i = 0;
        while(i<=numbers.length){
           for(let j = numbers.length -1;j>=i;j--){
               if(numbers[i]+numbers[j]=== target){
                   return [i+1,j+1]
               }
           }
           i++;
        }
        return []
    }
}
