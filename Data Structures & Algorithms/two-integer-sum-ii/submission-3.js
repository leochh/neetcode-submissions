class Solution {
    /* hash map */
    twoSum(numbers, target) { // 1-indexed
        const map = {};
        for(let i=0; i<numbers.length; i++) {
            const compl = target - numbers[i];
            if(map[compl]!== undefined) {
                return [map[compl]+1, i+1];
            }
            map[numbers[i]] = i;
        }
        return [];
    }
}
