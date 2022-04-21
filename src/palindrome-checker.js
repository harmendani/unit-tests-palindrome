'use strict';

module.exports = {
    isPalindrome: function (word) {
        let result = true;
        word = word.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\s\{\}\[\]\\\/]/gi, '').toLowerCase();
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
