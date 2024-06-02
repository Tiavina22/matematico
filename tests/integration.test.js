const {trapezoidal, simpson, midpoint, gaussianQuadrature, rectangular} = require('../src/integration')

/**
 * Teste la méthode des trapèzes pour l'intégration numérique.
 */
test('Méthode des trapèzes', () => {
    /**
     * Fonction à intégrer : x^2 sur [0, 1], dont l'intégrale est 1/3.
     * @param {number} x - La variable d'intégration.
     * @returns {number} La valeur de la fonction à x.
     */
    const f = (x) => x * x;
    const result = trapezoidal(f, 0, 1, 100);
    // Vérifie que le résultat est proche de 1/3 avec une précision de 2 décimales.
    expect(result).toBeCloseTo(1/3, 2);
});

/**
 * Teste la méthode de Simpson pour l'intégration numérique.
 */
test('Méthode de Simpson', () => {
    /**
     * Fonction à intégrer : x^2 sur [0, 1], dont l'intégrale est 1/3.
     * @param {number} x - La variable d'intégration.
     * @returns {number} La valeur de la fonction à x.
     */
    const f = (x) => x * x;
    const result = simpson(f, 0, 1, 100);
    // Vérifie que le résultat est proche de 1/3 avec une précision de 2 décimales.
    expect(result).toBeCloseTo(1/3, 2);
});

/**
 * Teste la méthode du point milieu pour l'intégration numérique.
 */
test('Méthode du point milieu', () => {
    /**
     * Fonction à intégrer : x^2 sur [0, 1], dont l'intégrale est 1/3.
     * @param {number} x - La variable d'intégration.
     * @returns {number} La valeur de la fonction à x.
     */
    const f = (x) => x * x;
    const result = midpoint(f, 0, 1, 100);
    // Vérifie que le résultat est proche de 1/3 avec une précision de 2 décimales.
    expect(result).toBeCloseTo(1/3, 2);
});

/**
 * Teste la méthode de la quadrature gaussienne pour l'intégration numérique.
 */
test('Méthode de la quadrature gaussienne', () => {
    /**
     * Fonction à intégrer : x^2 sur [0, 1], dont l'intégrale est 1/3.
     * @param {number} x - La variable d'intégration.
     * @returns {number} La valeur de la fonction à x.
     */
    const f = (x) => x * x;
    const result = gaussianQuadrature(f, 0, 1, 3);
    // Vérifie que le résultat est proche de 1/3 avec une précision de 2 décimales.
    expect(result).toBeCloseTo(1/3, 2);
});

/**
 * Teste la méthode rectangulaire pour l'intégration numérique.
 */
test('Méthode rectangulaire', () => {
    /**
     * Fonction à intégrer : x^2 sur [0, 1], dont l'intégrale est 1/3.
     * @param {number} x - La variable d'intégration.
     * @returns {number} La valeur de la fonction à x.
     */
    const f = (x) => x * x;
    const result = rectangular(f, 0, 1, 100);
    // Vérifie que le résultat est proche de 1/3 avec une précision de 2 décimales.
    expect(result).toBeCloseTo(1/3, 2);
});
