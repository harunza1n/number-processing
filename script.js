function min(arr) {
  //1. sort ascending => get first item

  // var i = arr.sort()
  // return i.slice(0, 1)

  // arr.sort(function (a, b) {
  //   return a - b
  // })
  // return arr[0]

  //2. Math.min
  return Math.min(...arr)

  //3. Array.reduce
  // return arr.reduce(function (a, b) {
  //   return (a < b ? a : b)
  // })
}

function max(arr) {
  //1. sort
  // arr.sort(function (a, b) {
  //   return b - a
  // })
  // return arr[0]


  //2. Math.max
  return Math.max(...arr)

  //3. reduce
  // return arr.reduce(function (a, b) {
  //   return (a > b ? a : b)
  // })

}

function mean(arr) {
  var jumlah = 0
  for (var i = 0; i < arr.length; i++) {
    jumlah += arr[i]
  }
  return Math.round(jumlah / arr.length)
  //Math.round berfungsi untuk membulatkan decimal
  //function returns the value of a number rounded to the nearest integer.
}

function odds(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result.push(arr[i])
    }
  }
  return result.join('-')
}

//   var odd = arr.filter(function getodd(m) {
//       return m % 2 === 1
//     })
//     .join('-')
//   return odd
// }

// var odd = arr.filter(function getodd(m) {
//     return m % 2 === 1
//   })
//   return odd.join('-')
// }


function evens(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i])
    }
  }
  return result.join('-')
}

//   var even = arr.filter(function getevens(n) {
//       return n % 2 === 0
//     })
//       return even.join('-')
// }

function numberProcessing(arr) {
  return 'Min: ' + min(arr) + ', Max: ' + max(arr) + ', Mean: ' + mean(arr) + ', Odds: ' + odds(arr) + ', Evens: ' + evens(arr)
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]))
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"