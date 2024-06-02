/**
 * Calcule l'intégrale d'une fonction f(x) sur l'intervalle [a, b] en utilisant la méthode des trapèzes.
 * @param {Function} f La fonction à intégrer.
 * @param {number} a La borne inférieure de l'intervalle.
 * @param {number} b La borne supérieure de l'intervalle.
 * @param {number} n Le nombre de sous-intervalles pour la discrétisation.
 * @returns {number} L'approximation de l'intégrale.
 */
function trapezoidal(f, a, b, n) {
    // Vérification des arguments
    if (typeof f !== 'function' || typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error("Les arguments ne sont pas valides");
    }

    // Calcul de la largeur de chaque trapèze
    const h = (b - a) / n;
    // Initialisation de la somme
    let sum = 0.5 * (f(a) + f(b));
    // Sommation des valeurs intermédiaires
    for (let i = 1; i < n; i++) {
        sum += f(a + i * h);
    }
    // Multiplication par la largeur pour obtenir l'approximation de l'intégrale
    return sum * h;
}

/**
 * Calcule l'intégrale d'une fonction f(x) sur l'intervalle [a, b] en utilisant la méthode de Simpson.
 * @param {Function} f La fonction à intégrer.
 * @param {number} a La borne inférieure de l'intervalle.
 * @param {number} b La borne supérieure de l'intervalle.
 * @param {number} n Le nombre de sous-intervalles pour la discrétisation (doit être pair).
 * @returns {number} L'approximation de l'intégrale.
 */
function simpson(f, a, b, n) {
    // Vérification des arguments
    if (typeof f !== 'function' || typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number' || !Number.isInteger(n) || n <= 0 || n % 2 !== 0) {
        throw new Error("Les arguments ne sont pas valides");
    }

    // Calcul de la largeur de chaque sous-intervalle
    const h = (b - a) / n;
    // Initialisation de la somme
    let sum = f(a) + f(b);
    // Sommation des valeurs intermédiaires
    for (let i = 1; i < n; i++) {
        sum += f(a + i * h) * (i % 2 === 0 ? 2 : 4);
    }
    // Multiplication par la largeur et division par 3 pour obtenir l'approximation de l'intégrale
    return (sum * h) / 3;
}

/**
 * Calcule l'intégrale d'une fonction f(x) sur l'intervalle [a, b] en utilisant la méthode du point milieu.
 * @param {Function} f La fonction à intégrer.
 * @param {number} a La borne inférieure de l'intervalle.
 * @param {number} b La borne supérieure de l'intervalle.
 * @param {number} n Le nombre de sous-intervalles pour la discrétisation.
 * @returns {number} L'approximation de l'intégrale.
 */
function midpoint(f, a, b, n) {
    // Vérification des arguments
    if (typeof f !== 'function' || typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error("Les arguments ne sont pas valides");
    }

    // Calcul de la largeur de chaque sous-intervalle
    const h = (b - a) / n;
    // Initialisation de la somme
    let sum = 0;
    // Sommation des valeurs de la fonction au point milieu de chaque sous-intervalle
    for (let i = 0; i < n; i++) {
        const midPoint = (a + h / 2) + i * h;
        sum += f(midPoint);
    }
    // Multiplication par la largeur pour obtenir l'approximation de l'intégrale
    return sum * h;
}

/**
 * Calcule l'intégrale d'une fonction f(x) sur l'intervalle [a, b] en utilisant la méthode de la quadrature gaussienne.
 * @param {Function} f La fonction à intégrer.
 * @param {number} a La borne inférieure de l'intervalle.
 * @param {number} b La borne supérieure de l'intervalle.
 * @param {number} n Le nombre de points de quadrature (doit être 2 ou 3).
 * @returns {number} L'approximation de l'intégrale.
 */
function gaussianQuadrature(f, a, b, n) {
    // Vérification des arguments
    if (typeof f !== 'function' || typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number' || !Number.isInteger(n) || (n !== 2 && n !== 3)) {
        throw new Error("Les arguments ne sont pas valides");
    }

    // Définition des points et des poids de quadrature gaussienne
    const nodes = [-0.7745966692, 0, 0.7745966692];
    const weights = [0.5555555556, 0.8888888889, 0.5555555556];
    // Calcul de la largeur de chaque sous-intervalle
    const h = (b - a) / n;
    // Initialisation de la somme
    let sum = 0;
    // Sommation des valeurs de la fonction pondérées par les poids de quadrature gaussienne
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nodes.length; j++) {
            const x = (a + h / 2) + i * h + (h / 2) * nodes[j];
            sum += weights[j] * f(x);
        }
    }
    // Multiplication par la largeur et division par 2 pour obtenir l'approximation de l'intégrale
    return sum * h / 2;
}

/**
 * Calcule l'intégrale d'une fonction f(x) sur l'intervalle [a, b] en utilisant la méthode rectangulaire.
 * @param {Function} f La fonction à intégrer.
 * @param {number} a La borne inférieure de l'intervalle.
 * @param {number} b La borne supérieure de l'intervalle.
 * @param {number} n Le nombre de sous-intervalles pour la discrétisation.
 * @returns {number} L'approximation de l'intégrale.
 */
function rectangular(f, a, b, n) {
    // Vérification des arguments
    if (typeof f !== 'function' || typeof a !== 'number' || typeof b !== 'number' || typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error("Les arguments ne sont pas valides");
    }

    // Calcul de la largeur de chaque sous-intervalle
    const h = (b - a) / n;
    // Initialisation de la somme
    let sum = 0;
    // Sommation des valeurs de la fonction à chaque extrémité de chaque sous-intervalle
    for (let i = 0; i < n; i++) {
        const x = a + i * h;
        sum += f(x);
    }
    // Multiplication par la largeur pour obtenir l'approximation de l'intégrale
    return sum * h;
}

module.exports = {
    trapezoidal,
    simpson,
    midpoint,
    gaussianQuadrature,
    rectangular
};
