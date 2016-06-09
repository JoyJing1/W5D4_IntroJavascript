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
