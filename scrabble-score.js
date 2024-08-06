// an object "table" that stores all the letters as it and 
// its worth of points as the value, used by a loop primarily.

export const pointsTable = {
	A: 1,
	B: 3,
	C: 3,
	D: 2,
	E: 1,
	F: 4,
	G: 2,
	H: 4,
	I: 1,
	J: 8,
	K: 5,
	L: 1,
	M: 3,
	N: 1,
	O: 1,
	P: 3,
	Q: 10,
	R: 1,
	S: 1,
	T: 1,
	U: 1,
	V: 4,
	W: 4,
	X: 8,
	Y: 4,
	Z: 10
};

// Plan:
// 1. Use split("") on a string to break the word into an array of individual letters.
// 2. Create a loop that goes through each letter one by one.
// 3. For each letter, find out how many points it is worth using the pointsTable above.
// 4. Create a score variable and add the points for each letter to this score variable.

export function calculateScrabbleScore(word) {
	// this splits up the word in to an array of letters
	const letters = word.toUpperCase().split("");

	// a variable to keep track and modify the score
	let score = 0;

	letters.forEach((letter) => {
		const letterPoints = pointsTable[letter];

		if (letterPoints === undefined) {
			throw new Error(`Non standard character (${letter}) in given word`);
		}

		score += letterPoints
	})

	// return the score after the loop is done.

	return score;
}
