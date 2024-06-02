// function largestSquare(A) {
//     const n = A.length;
//     let maxSquareSize = 0;

//     for (let i = 0; i < n; i++) {
//         let minHeight = A[i];
//         let maxPossibleSquare = 0;

//         for (let j = i; j < n; j++) {
//             minHeight = Math.min(minHeight, A[j]);
//             maxPossibleSquare = Math.min(minHeight, j - i + 1);
//             maxSquareSize = Math.max(maxSquareSize, maxPossibleSquare);
//         }
//     }

//     return maxSquareSize;
// }

// const A = [1, 2, 2, 2, 2, 4, 4, 5];
// console.log(largestSquare(A)); 

function largestSquare(A) {
    const n = A.length;
    let maxSquareSize = 0;

    for (let i = 0; i < n; i++) {
        let minHeight = A[i];
        let maxPossibleSquare = 0;

        for (let j = i; j < n; j++) {
            minHeight = Math.min(minHeight, A[j]);
            maxPossibleSquare = Math.min(minHeight, j - i + 1);
        }

        maxSquareSize = Math.max(maxSquareSize, maxPossibleSquare);
    }

    return maxSquareSize;
}

// Example usage
const A = [1, 2, 2, 4, 4, 4, 5, 5, 5, 5, 5];
console.log(largestSquare(A));  // Output should be 3

