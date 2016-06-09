// Array Exercises

Array.prototype.myUniq = function() {
  let myUniqs = [];
  this.forEach(n => {
    if (myUniqs.indexOf(n) === -1) {
      myUniqs.push(n);
    };
  });
  return myUniqs;
};

Array.prototype.twoSum = function() {
  let pairs = [];

  for(let i = 0; i < this.length-1; i++) {
    for(let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i,j]);
      };
    };
  };
  return pairs;
};

Array.prototype.myTranspose = function() {
  let transposed = [];

  for (let i = 0; i < this[0].length; i++) {
    transposed.push([]);
  }

  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[0].length; j++) {
      transposed[j][i] = this[i][j];
    }
  }
  return transposed;
};

// Enumerable Exercises

Array.prototype.myTranspose2 = function() {
  let transposed = [];

  for (let i = 0; i < this[0].length; i++) {
    transposed.push([]);
  }

  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[0].length; j++) {
      transposed[j].push(this[i][j]);
    }
  }
  return transposed;
};

a = [[1,2,3],[4,5,6]]

Array.prototype.myEach = function(callback) {
  for( let i = 0; i < this.length; i++) {
    callback(this[i]);
  };
  return this;
};

[1,2,3,4].myEach( function(n) {console.log(n)} );

Array.prototype.myMap = function(callback) {
  let mappedArray = [];

  this.myEach( el => mappedArray.push(callback(el)) );
  return mappedArray;
}

testFunct = function (n) { return n * 2 }
[1,2,3,4].myMap( testFunct );
[1,2,3,4].myMap( function (n) {return n*2} );

Array.prototype.myInject = function(callback) {
  let sum = this[0];

  this.slice(1).myEach( el => sum = callback(sum, el) )
  return sum;
}

[1,2,3,4,5].myInject( function (sum, n) {return sum+n} );

// Iteration Exercises

Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for(let i=0; i < this.length-1; i++) {
      if (this[i] > this[i+1]) {
        let orig = this[i];
        this[i] = this[i+1];
        this[i+1] = orig;
        sorted = false;
      };
    };
  };

  return this;
};

String.prototype.subStrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length+1; j++) {
      let sub = this.slice(i,j);
      if (substrings.indexOf(sub) === -1) {
        substrings.push(sub);
      };
    };
  };
  return substrings;
};
"joy".subStrings();
"ababa".subStrings();

// Recursion exercises

range = function(start, end) {
  if (end < start) {
    return [];
  };
  let prevRange = range(start, end-1);
  prevRange.push(end);
  return prevRange;
};

range(1,5);

Array.prototype.recursiveSum = function() {
  if (this.length < 1) {
    return 0;
  } else if (this.length == 1) {
    return this[0];
  };
  prevSum = this.slice(1).recursiveSum();
  prevSum += this[0];
  return prevSum;
};

[1,2,3].recursiveSum()


exp = function(b, n) {
  if (n == 0) {
    return 1;
  }
  prev_exp = exp(b, n-1);
  prev_exp *= b;
  return prev_exp;
}

exp(2,3);
exp(3,5);

expFast = function(b, n) {
  if (n == 0) {
    return 1;
  }

  prev_exp = expFast(b, Math.floor(n/2));
  new_exp = prev_exp*prev_exp;

  if (n%2===1) {
    new_exp *= b;
  };
  return new_exp;
};
expFast(2, 3);
expFast(2,4);

fibonacci = function(n) {
  if (n<=2) {
    return [1,1].slice(0, n)
  }
  prev_fib = fibonacci(n-1);
  new_val = prev_fib[prev_fib.length-1] + prev_fib[prev_fib.length-2]
  prev_fib.push(new_val);
  return prev_fib;
}

bSearch = function(array, target) {
  if (array.length ===0 ) {
    return undefined;
  };
  let i = Math.floor(array.length/2);

  if (array[i] == target) {
    return i;
  } else if (array[i] < target) {
    let right = array.slice(i);
    let rResult = bSearch(right, target);
    if (rResult !== undefined) {
      return rResult + i;
    };
  } else {
    let left = array.slice(0, i);
    let lResult = bSearch(left, target);
    if (lResult !== undefined) {
      return lResult;
    };
  };
};

bSearch([1,2,3,4,7,9,11,15], 0);
bSearch([1,2,3,4,7,9,11,15], 1);
bSearch([1,2,3,4,7,9,11,15], 3);
bSearch([1,2,3,4,7,9,11,15], 11);
bSearch([1,2,3,4,7,9,11,15], 15);

function myMerge(arr1, arr2) {
  mergedArray = []
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArray.push(arr1[0]);
      arr1 = arr1.slice(1, arr1.length);
    } else {
      mergedArray.push(arr2[0]);
      arr2 = arr2.slice(1, arr2.length);
    };
  };
  mergedArray = mergedArray.concat(arr1).concat(arr2)
  return mergedArray;
};

merge([1,4,7], [2,4,6,9]);

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  };

  let i = Math.floor(array.length/2);
  let left = array.slice(0, i);
  let right = array.slice(i);

  let lSorted = mergeSort(left);
  let rSorted = mergeSort(right);
  let finalSorted = myMerge(lSorted, rSorted);
  return finalSorted;
};

mergeSort([1,6,0,4,2,8,4]);


function subSets(array) {
  if (array.length === 0) {
    return [[]];
  };

  let firstEl = array[0]
  let restArray = array.slice(1)
  let subs = subSets(restArray)
  let allSubs = subs.map( sub => sub.concat(firstEl)).concat(subs)
  return allSubs;
};

subSets([1,2,3]);
