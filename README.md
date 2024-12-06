# Matematico
Un module Node.js open source pour résoudre divers problèmes mathématiques 🧮, incluant les opérations sur les matrices 🟩 et l'intégration numérique 🔢. Parfait pour les étudiants 🎓, les professionnels 💼, et les amateurs de mathématiques 📊.

# Description
Ce module Node.js permet d'effectuer diverses opérations sur les matrices, telles que l'addition, la soustraction, la multiplication, la transposition et le calcul du déterminant. Il peut également résoudre des problèmes d'intégration numérique en utilisant différentes méthodes, telles que la méthode de Simpson, la méthode rectangulaire et d'autres méthodes.

Le but de ce module n'est pas seulement de résoudre les problèmes mathématiques rencontrés à l'université, au quotidien ou ailleurs, mais aussi de vous aider à vérifier les résultats de vos opérations en intégrant Matematiko.

# Initialisation
Créer votre projet, puis rendre dans votre projet, un coup de npm init pour l'initialiser
```bash
$    mkdir nom_projet
$    cd nom_projet
$    npm init
```
Créer votre app
```bash
$    touch app.js
```

# Installation

Utilisez npm pour installer matematiko :

```bash
npm i matematico
```

# Dependencie (jest)
Pour les tests, npm pour installer jest
```bash
npm i jest
```

# Exemples d'utilisation

Voici quelques exemples d'utilisation du module matematico (dans votre app.js) :

```javascript
// Importation du module
const matematico = require('matematico');

// Création de matrices
const A = [
    [1, 2],
    [3, 4]
];
const B = [
    [5, 6],
    [7, 8]
];

// Multiplication de matrices
const product = matematico.matrix.multiplyMatrices(A, B);
console.log('Produit des matrices A et B :');
matematico.matrix.printMatrix(product);

// Transposition d'une matrice
const transposed = matematico.matrix.transposeMatrix(A);
console.log('Matrice transposée de A :');
matematico.matrix.printMatrix(transposed);

// Calcul du déterminant d'une matrice carrée
const det = matematico.matrix.determinant(A);
console.log('Déterminant de la matrice A :', det);

// Intégration numérique d'une fonction sur un intervalle
const f = x => x * x;
const integral = matematico.integration.trapezoidal(f, 0, 1, 100);
console.log('Intégrale de la fonction x^2 de 0 à 1 :', integral);
```

# Lancer votre app
```bash
$    node app.js
```

Updated on: 2024-12-06T04:53:53.987Z
Updated on: 2024-12-06T04:53:56.973Z
Updated on: 2024-12-06T04:53:59.987Z
Updated on: 2024-12-06T04:54:02.979Z
Updated on: 2024-12-06T04:54:05.974Z
Updated on: 2024-12-06T04:54:08.982Z
Updated on: 2024-12-06T04:54:11.976Z
Updated on: 2024-12-06T04:54:14.972Z
Updated on: 2024-12-06T04:54:17.975Z
Updated on: 2024-12-06T04:54:20.973Z