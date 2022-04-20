'use strict';

const { expect } = require('chai');

const palindromesWords = require('./palindrome-words.json');
const {palindromeChecker} = require('../index');

describe('Unit tests for palindrome checker', () => {
    it('When word is a valid palindrome', () => {
        expect(palindromeChecker.isPalindrome(palindromesWords[0])).to.be.true;
    });
}) 