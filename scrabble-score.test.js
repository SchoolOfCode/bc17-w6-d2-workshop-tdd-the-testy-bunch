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