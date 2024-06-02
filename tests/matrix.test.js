const { addMatrices, multiplyMatrices, soustractMatrices, transposeMatrix, printMatrix, isMatrix, determinant } = require('../src/matrix');

/**
 * Teste l'addition de matrices.
 */
test('addition de matrices', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const B = [
        [5, 6],
        [7, 8]
    ];
    const result = addMatrices(A, B);
    expect(result).toEqual([
        [6, 8],
        [10, 12]
    ]);

    // Affichage du résultat de l'addition
    printMatrix(result);
});

/**
 * Teste la soustraction de matrices.
 */
test('soustraction de matrices', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const B = [
        [5, 6],
        [7, 8]
    ];
    const result = soustractMatrices(A, B);
    expect(result).toEqual([
        [-4, -4],
        [-4, -4]
    ]);

    // Affichage du résultat de la soustraction
    printMatrix(result);
});

/**
 * Teste la multiplication de matrices.
 */
test('multiplication de matrices', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const B = [
        [5, 6],
        [7, 8]
    ];
    const result = multiplyMatrices(A, B);
    expect(result).toEqual([
        [19, 22],
        [43, 50]
    ]);

    // Affichage du résultat de la multiplication
    printMatrix(result);
});

/**
 * Teste la transposition de matrices.
 */
test('transposition de matrices', () => {
    const A = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    const result = transposeMatrix(A);
    expect(result).toEqual([
        [1, 4],
        [2, 5],
        [3, 6]
    ]);

    // Affichage du résultat de la transposition
    printMatrix(result);
});

/**
 * Teste la vérification de matrice valide.
 */
test('vérification de matrice valide', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    expect(isMatrix(A)).toBe(true);

    const B = [
        [1, 2],
        [3]
    ];
    expect(isMatrix(B)).toBe(false);
});

/**
 * Teste la gestion des erreurs pour l'addition de matrices.
 */
test('gestion des erreurs pour addition de matrices', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const B = [
        [5, 6, 7],
        [8, 9, 10]
    ];
    expect(() => addMatrices(A, B)).toThrow("Les dimensions des matrices doivent être égales et valides");
});

/**
 * Teste la gestion des erreurs pour la multiplication de matrices.
 */
test('gestion des erreurs pour multiplication de matrices', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const B = [
        [5, 6],
        [7, 8],
        [9, 10]
    ];
    expect(() => multiplyMatrices(A, B)).toThrow("Le nombre de colonnes de A doit être égal au nombre de lignes de B et matrices doivent être valides");
});

/**
 * Teste le calcul du déterminant d'une matrice.
 */
test('calcul du déterminant d\'une matrice', () => {
    const A = [
        [1, 2],
        [3, 4]
    ];
    const result = determinant(A);
    expect(result).toBe(-2);
});
