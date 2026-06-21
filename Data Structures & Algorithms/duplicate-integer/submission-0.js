class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let uniqueNum = new Set([]);
        for(let i=0;i<nums.length;i++){
            if(uniqueNum.has(nums[i])){
                return true;
            }else{
                uniqueNum.add(nums[i]);
            }
        }
        return false;
    }
}
