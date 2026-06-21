class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let modifiedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
         let j = modifiedStr.length - 1;
         while(i<modifiedStr.length/2 && j>=modifiedStr.length/2){
            if(modifiedStr[i] !== modifiedStr[j]){
                return false
            }
            i++;
            j--;
         }
         return true;                   
    }
}
