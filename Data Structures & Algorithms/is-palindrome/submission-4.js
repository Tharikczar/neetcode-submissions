class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        const isAlphaNumeric = (ch) => /[a-zA-Z0-9]/.test(ch);

        while (left < right) {

            while (left < right && !isAlphaNumeric(s[left])) {
                left++;
            }

            while (left < right && !isAlphaNumeric(s[right])) {
                right--;
            }

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;                 
    }
}
