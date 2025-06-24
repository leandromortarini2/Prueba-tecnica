// solución.js
// Ejercicio técnico: ¿Dos números suman X?

// Versión 1
// Desarrollo rápido, sin optimización. Recorre todos los pares posibles.
function hasSumBrute(nums, requiredSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requiredSum) {
        return true;
      }
    }
  }
  return false;
}

// Versión 2 - Optimizada
// Usa un Set para guardar los elementos vistos.

function hasSumOptimized(nums, requiredSum) {
  const seen = new Set();

  for (const num of nums) {
    const complement = requiredSum - num;
    if (seen.has(complement)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

// Pruebas
console.log("Versión Bruta:");
console.log(hasSumBrute([1, 4, 3, 9], 8)); // false
console.log(hasSumBrute([1, 2, 4, 4], 8)); // true

console.log("Versión Optimizada:");
console.log(hasSumOptimized([1, 4, 3, 9], 8)); // false
console.log(hasSumOptimized([1, 2, 4, 4], 8)); // true
