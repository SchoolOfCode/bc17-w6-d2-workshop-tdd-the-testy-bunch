import { pointsTable, calculateScrabbleScore } from "./scrabble-score";
import { expect, test } from "vitest";

test("A should be rewarded 1 point", () => {
	expect(calculateScrabbleScore("A")).toBe(1);
})

test("Test every letter to be reward its correct points", () => {
	let allLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	]

	allLetters.forEach((letter) => {
		expect(calculateScrabbleScore(letter)).toBe(pointsTable[letter])
	})
})

test("Test the word `dog`, it should be worth 5 points", () => {
	expect(calculateScrabbleScore("dog")).toBe(5);
})

test("Test the word `café`, it should fail, it is not a standard a-z letter", () => {
	expect(() => {
		expect(calculateScrabbleScore("café"))
	}).toThrowError("Non standard character (É) in given word")
})

// plan 
// measure the length of the word string
// if string >= 7 ,  then + 50 points to the word point total

test("Test the word `puppies`, it should be worth 13 + 50 bonus points", () => {
	expect(calculateScrabbleScore("puppies")).toBe(63);
})