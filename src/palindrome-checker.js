'use strict';

module.exports = {
    isPalindrome: function (word) {
        console.log(word);
        let result = true;
        word = word.toLowerCase().trim();
        if (word.length > 1) {
            for (let i = 0; i <= word.length; i++) {
                if (word.charAt(i) !== word.charAt((word.length - 1) - i)) {
                    result = false;
                    break;
                }
            }
        }
        return result;
    }
};
