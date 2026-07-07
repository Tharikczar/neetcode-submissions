class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    const map = new Map();

    for (let right = 0; right < s.length; right++) {

        // Add current character
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        // Update maximum frequency in the current window
        maxFreq = Math.max(maxFreq, map.get(s[right]));

        // If replacements needed exceed k, shrink window
        while ((right - left + 1) - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        // Update answer
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
