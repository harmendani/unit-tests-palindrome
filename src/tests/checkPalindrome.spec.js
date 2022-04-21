'use strict';

const { expect } = require('chai');

const palindromesWords = require('./palindrome-words.json');
const notPalindromesWords = require('./not-palindrome-words.json');
const { palindromeChecker } = require('../index');

describe('Unit tests for palindrome checker', () => {
    context('When word is a valid palindrome', () => {
        it('Rotator is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[0])).to.be.true;
        });
        it('bob is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[1])).to.be.true;
        });
        it('madam is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[2])).to.be.true;
        });
        it('mAlAyAlam is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[3])).to.be.true;
        });
        it('1 is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[4])).to.be.true;
        });
        it('Able was I, ere I saw Elba is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[5])).to.be.true;
        });
        it('Madam I’m Adam is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[6])).to.be.true;
        });
        it('Step on no pets. is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[7])).to.be.true;
        });
        it('Top spot! is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[8])).to.be.true;
        });
        it('02/02/2020 is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(palindromesWords[9])).to.be.true;
        });
    });
    context('When word is not a palindrome', ()=>{
        it('xyz is not a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[0])).to.be.false;
        });
        it('elephant is not a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[1])).to.be.false;
        });
        it('Country is not a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[2])).to.be.false;
        });
        it('Top . post! is not a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[3])).to.be.false;
        });
        it('Wonderful-fool is not a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[4])).to.be.false;
        });
        it('Wild imagination!”**** is a palindrome', () => {
            expect(palindromeChecker.isPalindrome(notPalindromesWords[5])).to.be.false;
        });
    });
}) 