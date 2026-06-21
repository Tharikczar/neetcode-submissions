class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arrValue = new Map();
        for(let i=0;i<s.length;i++){
            if(arrValue.has(s[i])){
                const count =  arrValue.get(s[i]);
                arrValue.set(s[i],count + 1)
            }else{
                arrValue.set(s[i],1)
            }
        }
        for(let i=0;i<t.length;i++){
            if(arrValue.has(t[i])){
                const count =  arrValue.get(t[i]);
                arrValue.set(t[i],count - 1)
            }else{
                return false;
            }
        }
        return  [...arrValue.values()].every((item)=>item === 0);
    }
}
