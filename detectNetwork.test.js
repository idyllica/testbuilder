/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;


 for (var prefix = 40; prefix <= 49; prefix ++) {
  (function(prefix) {
    var tempTest = '00000000000';
    it('returns the type Visa when the detectNetwork function is given an argument with a prefix of ' + prefix + ' and a length of 13', function () {
      assert(detectNetwork(prefix + tempTest) === 'Visa');
    })
  })(prefix)
 }

 for (var prefix = 40; prefix <= 49; prefix ++) {
  (function(prefix) {
    var tempTest = '00000000000000';
    it('returns the type Visa when the detectNetwork function is given an argument with a prefix of ' + prefix + ' and a length of 16', function () {
      assert(detectNetwork(prefix + tempTest) === 'Visa');
    })
  })(prefix)
 }

  for (var prefix = 40; prefix <= 49; prefix ++) {
  (function(prefix) {
    var tempTest = '00000000000000000';
    it('returns the type Visa when the detectNetwork function is given an argument with a prefix of ' + prefix + ' and a length of 19', function () {
      assert(detectNetwork(prefix + tempTest) === 'Visa');
    })
  })(prefix)
 }
})

describe('MasterCard', function () {
  var expect = chai.expect;

  for (var prefix = 51; prefix <= 55; prefix++) {
    (function (prefix) {
      var tempTest = '00000000000000';
      it ('returns the type MasterCard when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(prefix + tempTest)).to.equal('MasterCard')
      });
    })(prefix)
  }
})

describe('Discover', function () {

  var expect = chai.expect;

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6500000000000000')).to.equal('Discover');
  })

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6500000000000000000')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011000000000000')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011000000000000000')).to.equal('Discover');
  });
  

for (var prefix = 644; prefix <= 649; prefix++) {
  (function (prefix) {
    var tempTest = '0000000000000';
    it ('returns the type Discover when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 16', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('Discover');
    });
  })(prefix)
}
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function (prefix) {
      var tempTest = '0000000000000000';
      it('returns the type Discover when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(prefix + tempTest)).to.equal('Discover');
      });
    })(prefix)
  }
})
 
describe('China UnionPay', function () {
  var expect = chai.expect;

for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function (prefix) {
    var tempTest  = '0000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 624; prefix <= 626; prefix++) {
  (function (prefix) {
    var tempTest  = '0000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 16', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

 for (var prefix = 6282; prefix <= 6288; prefix++) {
  (function (prefix) {
    var tempTest  = '000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 16', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function (prefix) {
    var tempTest  = '00000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 17', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 624; prefix <= 626; prefix++) {
  (function (prefix) {
    var tempTest  = '00000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 17', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

 for (var prefix = 6282; prefix <= 6288; prefix++) {
  (function (prefix) {
    var tempTest  = '0000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 17', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function (prefix) {
    var tempTest  = '000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 18', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 624; prefix <= 626; prefix++) {
  (function (prefix) { 
    var tempTest  = '000000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 18', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

 for (var prefix = 6282; prefix <= 6288; prefix++) {
  (function (prefix) {
    var tempTest  = '00000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 18', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function (prefix) {
    var tempTest  = '0000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 19', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

for (var prefix = 624; prefix <= 626; prefix++) {
  (function (prefix) {
    var tempTest  = '0000000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 19', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

 for (var prefix = 6282; prefix <= 6288; prefix++) {
  (function (prefix) {
    var tempTest  = '000000000000000';
    it('returns the type China UnionPay when the detectNetwork function is given an argument with the prefix of ' + prefix + ' and a length of 19', function () {
      expect (detectNetwork(prefix + tempTest)).to.equal('China UnionPay');
    });
  })(prefix)
 }

})

describe('Switch', function () {
  var expect = chai.expect;

  var switchPrefixes = [4903, 4905, 4911, 4936, 6333, 6759];

  for (var prefix = 0; prefix < switchPrefixes.length; prefix++) {
    (function(prefix) {
      var tempTest = '000000000000';
      it('returns the type Switch when the detectNetwork function is given an argument with a prefix of ' + switchPrefixes[prefix] + ' and a length of 16', function () {
        expect(detectNetwork(switchPrefixes[prefix] + tempTest)).to.equal('Switch');
      });
    })(prefix)
  }

    for (var prefix = 0; prefix < switchPrefixes.length; prefix++) {
    (function(prefix) {
      var tempTest = '00000000000000';
      it('returns the type Switch when the detectNetwork function is given an argument with a prefix of ' + switchPrefixes[prefix] + ' and a length of 18', function () {
        expect(detectNetwork(switchPrefixes[prefix] + tempTest)).to.equal('Switch');
      });
    })(prefix)
  }

  for (var prefix = 0; prefix < switchPrefixes.length; prefix++) {
    (function(prefix) {
      var tempTest = '000000000000000';
      it('returns the type Switch when the detectNetwork function is given an argument with a prefix of ' + switchPrefixes[prefix] + ' and a length of 19', function () {
        expect(detectNetwork(switchPrefixes[prefix] + tempTest)).to.equal('Switch');
      });
    })(prefix)
  }

  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641820000000000')).to.equal('Switch');
  });

 it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182000000000000')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641820000000000000')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331100000000000')).to.equal('Switch');
  });

 it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110000000000000')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331100000000000000')).to.equal('Switch');
  });

})

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

var maestroPrefixes = [5018, 5020, 5038, 6304];

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '00000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 12', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 13', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '0000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 14', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '00000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 15', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '000000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 16', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '0000000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 17', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '00000000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 18', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}

for (var prefix = 0; prefix < maestroPrefixes.length; prefix++) {
  (function(prefix) {
    var tempTest = '000000000000000';
    it('returns the type Maestro when the detectNetwork function is given an argument with a prefix of ' + maestroPrefixes[prefix] + ' and a length of 19', function () {
      expect(detectNetwork(maestroPrefixes[prefix] + tempTest)).to.equal('Maestro');
    });
  })(prefix)
}
})
