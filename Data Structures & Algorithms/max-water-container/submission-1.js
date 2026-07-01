class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length-1;
        let area = 0;
        let minHeight = 0;
        while(left<right){
            minHeight = Math.min(heights[left],heights[right]);
            const calculateArea = minHeight * (right - left);
                area = Math.max(area,calculateArea);
            if(minHeight === heights[left]){
                left++;
            }else{
                right--;
            }
        }
        return area;
    }
}
