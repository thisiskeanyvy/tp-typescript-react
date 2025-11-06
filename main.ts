// PARTIE 1 - Fonctions pures et effets de bord
// Exercice 1 - Fonction pure vs impure

let counter = 0;

// 1. Fonction pure
function add(a: number, b: number): number {
	return a + b;
}

// 2. Fonction impure
function increment(): number {
	counter++;
	return counter;
}

// 3. Observer la différence en exécutant plusieurs fois chaque fonction
console.log("=== Partie 1 - Fonctions pures et impures ===");
console.log("Fonction pure add(1, 2):", add(1, 2));
console.log("Fonction pure add(1, 2) à nouveau:", add(1, 2)); // Toujours 3

console.log("Fonction impure increment():", increment());
console.log("Fonction impure increment() à nouveau:", increment()); // Résultat différent
console.log("Counter après deux appels:", counter);

/*
Pourquoi add est-elle prévisible ?
  → add prévisible car elle ne dépend que des 2 variables a et b et ne modifie
    aucun état externe la portée de a et b est locale. Mêmes entrées, elle retourne toujours le même résultat.
Pourquoi increment ne l'est pas ?
  → increment pas prévisible car elle modifie une variable globale counter.
    Chaque appel = résultat différent selon l'état actuel de counter.
*/

// PARTIE 2 - Immutabilité
// Exercice 2 - Mettre à jour sans muter

const student = { name: "Léo", grade: 14 };

function updateGrade(student: { name: string; grade: number }, newGrade: number): { name: string; grade: number } {
	return { ...student, grade: newGrade };
}

console.log("\n=== Partie 2 - Immutabilité ===");
const updatedStudent = updateGrade(student, 20);
console.log("Étudiant mis à jour:", updatedStudent);
console.log("Étudiant original (non modifié):", student); // Toujours 14

// PARTIE 3 - Fonctions d'ordre supérieur
// Exercice 3 - Appliquer plusieurs fois

function applyNTimes(f: (x: number) => number, n: number, x: number): number {
	let result = x;
	for (let i = 0; i < n; i++) {
		result = f(result);
	}
	return result;
}

const double = (x: number) => x * 2;

console.log("\n=== Partie 3 - Fonctions d'ordre supérieur ===");
console.log("applyNTimes(double, 3, 1):", applyNTimes(double, 3, 1)); // 8

// PARTIE 4 - map, filter, reduce

const numbers = [1, 2, 3, 4, 5, 6];

// Exercice 4.1 - Filtrer et transformer

// 1. Garder uniquement les nombres pairs
// 2. Les multiplier par 2
// 3. Calculer leur somme
// En une seule ligne utilisant filter, map, puis reduce

console.log("\n=== Partie 4 - map, filter, reduce ===");
const result4_1 = numbers
	.filter(x => x % 2 === 0)
	.map(x => x * 2)
	.reduce((acc, x) => acc + x, 0);
console.log("Exercice 4.1 - Résultat:", result4_1); // 24

// Exercice 4.2 - Somme moyenne et produit

// Fonction sum utilisant reduce
function sum(arr: number[]): number {
	return arr.reduce((acc, x) => acc + x, 0);
}

// Fonction average qui utilise sum
function average(arr: number[]): number {
	if (arr.length === 0) return 0;
	return sum(arr) / arr.length;
}

// Fonction product qui multiplie tous les éléments
function product(arr: number[]): number {
	return arr.reduce((acc, x) => acc * x, 1);
}

console.log("Exercice 4.2 - Somme:", sum(numbers));
console.log("Exercice 4.2 - Moyenne:", average(numbers));
console.log("Exercice 4.2 - Produit:", product(numbers));

// PARTIE 5 - Autres fonctions de liste

const users = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 15 },
	{ name: "Charlie", age: 30 },
	{ name: "Diana", age: 17 },
];

console.log("\n=== Partie 5 - Autres fonctions de liste ===");

// Exercice 5.1 - find
// Trouver le premier utilisateur majeur avec find
const firstAdult = users.find(user => user.age >= 18);
console.log("Exercice 5.1 - Premier majeur:", firstAdult);

// Exercice 5.2 - some / every
// Vérifier s'il y a au moins un mineur (some)
const hasMinor = users.some(user => user.age < 18);
console.log("Exercice 5.2 - Y a-t-il un mineur ?", hasMinor);

// Vérifier si tous les utilisateurs ont plus de 10 ans (every)
const allOver10 = users.every(user => user.age > 10);
console.log("Exercice 5.2 - Tous ont plus de 10 ans ?", allOver10);

// Exercice 5.3 - includes
// Créer un tableau names = users.map(u => u.name)
const names = users.map(u => u.name);
console.log("Exercice 5.3 - Noms:", names);
console.log("Exercice 5.3 - 'Alice' présent ?", names.includes("Alice"));
console.log("Exercice 5.3 - 'Eve' présent ?", names.includes("Eve"));

// Exercice 5.4 - flatMap
const usersWithHobbies = [
	{ name: "Alice", hobbies: ["climbing", "yoga"] },
	{ name: "Bob", hobbies: ["gaming"] },
	{ name: "Charlie", hobbies: ["reading", "hiking"] },
];

// Utiliser flatMap pour obtenir une liste unique de tous les hobbies
const allHobbies = usersWithHobbies.flatMap(user => user.hobbies);
console.log("Exercice 5.4 - Tous les hobbies:", allHobbies);

// Exercice 5.5 - sort et slice
// Trier les utilisateurs par âge croissant, sans modifier la liste d'origine
// Puis récupérer les 2 plus jeunes
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);
console.log("Exercice 5.5 - Liste originale (non modifiée):", users);
console.log("Exercice 5.5 - Liste triée:", sortedByAge);
console.log("Exercice 5.5 - 2 plus jeunes:", twoYoungest);

// PARTIE 6 - Bonus - Cas concret
type User = { name: string; age: number; country: string };

const data: User[] = [
	{ name: "Alice", age: 25, country: "France" },
	{ name: "Bob", age: 15, country: "France" },
	{ name: "Charlie", age: 30, country: "Spain" },
	{ name: "Diana", age: 22, country: "France" },
];

console.log("\n=== Partie 6 - Bonus - Cas concret ===");

// 1. Récupérer les adultes français
const frenchAdults = data.filter(user => user.country === "France" && user.age >= 18);
console.log("1. Adultes français:", frenchAdults);

// 2. Extraire leurs noms
const namesOfFrenchAdults = frenchAdults.map(user => user.name);
console.log("2. Noms des adultes français:", namesOfFrenchAdults);

// 3. Les trier par âge décroissant
const sortedByAgeDesc = [...frenchAdults].sort((a, b) => b.age - a.age);
console.log("3. Triés par âge décroissant:", sortedByAgeDesc);

// 4. Calculer la moyenne d'âge
const averageAge = frenchAdults.length > 0
	? frenchAdults.reduce((sum, user) => sum + user.age, 0) / frenchAdults.length
	: 0;
console.log("4. Moyenne d'âge des adultes français:", averageAge);

// Version en chaîne (tout en une fois)
const result = data
	.filter(user => user.country === "France" && user.age >= 18)
	.map(user => user.name)
	.sort((a, b) => {
		const userA = data.find(u => u.name === a)!;
		const userB = data.find(u => u.name === b)!;
		return userB.age - userA.age;
	});

console.log("\nVersion chaînée - Noms triés par âge décroissant:", result);