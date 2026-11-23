class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = [];
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                prefix[i] = 1;
                suffix[nums.length - i - 1] = 1;
            } else {
                prefix[i] = prefix[i - 1] * nums[i - 1];
                suffix[nums.length - i - 1] = nums[nums.length - i] * suffix[nums.length - i];
            }
        }
        const prodRes = Array.from(
            { length: nums.length },
            (_, index) => suffix[index] * prefix[index],
        );
        return prodRes;
    }
}
