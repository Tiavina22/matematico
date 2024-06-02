/**
 * Addition de matrices.
 * @param {number[][]} A - La première matrice.
 * @param {number[][]} B - La deuxième matrice.
 * @returns {number[][]} La somme des matrices A et B.
 * @throws {Error} Les dimensions des matrices doivent être égales et valides.
 */
function addMatrices(A, B) {
    // Vérification des dimensions
    if (!isMatrix(A) || !isMatrix(B) || A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Les dimensions des matrices doivent être égales et valides");
    }

    // Addition des éléments des matrices A et B
    return A.map((row, i) => row.map((val, j) => val + B[i][j]));
}

/**
 * Soustraction de matrices.
 * @param {number[][]} A - La première matrice.
 * @param {number[][]} B - La deuxième matrice.
 * @returns {number[][]} La différence des matrices A et B.
 * @throws {Error} Les dimensions des matrices doivent être égales et valides.
 */
function soustractMatrices(A, B) {
    // Vérification des dimensions
    if (!isMatrix(A) || !isMatrix(B) || A.length !== B.length || A[0].length !== B[0].length) {
        throw new Error("Les dimensions des matrices doivent être égales et valides");
    }

    // Soustraction des éléments des matrices A et B
    return A.map((row, i) => row.map((val, j) => val - B[i][j]));
}

/**
 * Multiplication de matrices.
 * @param {number[][]} A - La première matrice.
 * @param {number[][]} B - La deuxième matrice.
 * @returns {number[][]} Le produit des matrices A et B.
 * @throws {Error} Le nombre de colonnes de A doit être égal au nombre de lignes de B et matrices doivent être valides.
 */
function multiplyMatrices(A, B) {
    // Vérification des dimensions
    if (!isMatrix(A) || !isMatrix(B) || A[0].length !== B.length) {
        throw new Error("Le nombre de colonnes de A doit être égal au nombre de lignes de B et matrices doivent être valides");
    }

    // Multiplication des matrices A et B
    return A.map((row, i) =>
        B[0].map((_, j) =>
            row.reduce((sum, elm, k) => sum + (elm * B[k][j]), 0)
        )
    );
}

/**
 * Transposition de matrices.
 * @param {number[][]} A - La matrice à transposer.
 * @returns {number[][]} La matrice transposée.
 * @throws {Error} L'entrée doit être une matrice valide.
 */
function transposeMatrix(A) {
    // Vérification que l'entrée est une matrice valide
    if (!isMatrix(A)) {
        throw new Error("L'entrée doit être une matrice valide");
    }

    // Transposition de la matrice A
    return A[0].map((_, colIndex) => A.map(row => row[colIndex]));
}

/**
 * Calcule le déterminant d'une matrice carrée.
 * @param {number[][]} matrix - La matrice carrée dont on souhaite calculer le déterminant.
 * @returns {number} Le déterminant de la matrice.
 * @throws {Error} La matrice doit être carrée pour calculer son déterminant.
 */
function determinant(matrix) {
    // Vérification que la matrice est carrée
    if (!isSquareMatrix(matrix)) {
        throw new Error("La matrice doit être carrée pour calculer son déterminant");
    }

    // Cas des matrices 1x1
    if (matrix.length === 1) {
        return matrix[0][0];
    }

    // Cas des matrices 2x2
    if (matrix.length === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    }

    // Calcul récursif pour les matrices de taille supérieure à 2x2
    let det = 0;
    for (let i = 0; i < matrix.length; i++) {
        // Calcul du cofacteur
        const cofactor = matrix[0][i] * determinant(minor(matrix, 0, i));
        // Ajout ou soustraction du terme selon la parité de i
        det += (i % 2 === 0 ? 1 : -1) * cofactor;
    }
    return det;
}

/**
 * Retourne la sous-matrice obtenue en retirant la ligne i et la colonne j de la matrice.
 * @param {number[][]} matrix - La matrice d'origine.
 * @param {number} i - L'indice de la ligne à retirer.
 * @param {number} j - L'indice de la colonne à retirer.
 * @returns {number[][]} La sous-matrice obtenue.
 */
function minor(matrix, i, j) {
    return matrix.filter((row, rowIndex) => rowIndex !== i)
                 .map(row => row.filter((_, colIndex) => colIndex !== j));
}

/**
 * Vérifie si une matrice est carrée.
 * @param {number[][]} matrix - La matrice à vérifier.
 * @returns {boolean} true si la matrice est carrée, sinon false.
 */
function isSquareMatrix(matrix) {
    const numRows = matrix.length;
    return numRows > 0 && matrix.every(row => row.length === numRows);
}

/**
 * Vérifie si une entrée est une matrice valide.
 * @param {any} matrix - L'entrée à vérifier.
 * @returns {boolean} Vrai si l'entrée est une matrice valide, sinon faux
 */
function isMatrix(matrix){
    // Une matrice est un tableau de tableaux où chaque sous-tableau a la même longueur
    return Array.isArray(matrix) && matrix.length > 0 && matrix.every(row => Array.isArray(row) && row.length === matrix[0].length);
}

/**
 * Affiche une matrice sous forme de tableau.
 * @param {number[][]} matrix - La matrice à afficher.
 * @throws {Error} L'entrée n'est pas une matrice valide.
 */
function printMatrix(matrix) {
    // Vérification que l'entrée est une matrice valide
    if (!isMatrix(matrix)) {
        throw new Error("L'entrée n'est pas une matrice valide");
    }

    // Affichage de la matrice sous forme de tableau
    console.table(matrix);
}

// Export des fonctions et de la fonction de vérification de matrice
module.exports = {
    addMatrices,
    multiplyMatrices,
    soustractMatrices,
    transposeMatrix,
    printMatrix,
    isMatrix,
    determinant 
};
