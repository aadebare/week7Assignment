const numbers = [12,34,76,123,56,8,2,988,90,345]



max = Math.max(...numbers)
min = Math.min(...numbers)
even = numbers.every(num => num % 2 === 0)
index = numbers.indexOf(76)
divisible =numbers.filter(num=>num%2===0)
join = numbers.join('')
order2 = numbers.slice().reverse()






console.log(max)
console.log(min)
console.log(numbers)
console.log(index)
console.log(divisible)
console.log(join)
console.log(order2)

