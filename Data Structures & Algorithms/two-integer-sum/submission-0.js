class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let twoSum = new Map();
        for(let i=0;i<nums.length;i++){
            const remainingVal = target-nums[i];
            if(twoSum.has(remainingVal)){
                return [twoSum.get(remainingVal),i];
            }
            twoSum.set(nums[i],i)
        }
        return [];
    }
    

}
