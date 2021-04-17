'use strict'
this.table = 'window table';

// this key inside function : solution 1 
const cleanTable1 = function(soap) {
    let that = this // add that
    const innerFunc = function(_soap) {
      console.log(`cleaning ${that.table} using ${soap}`)
    }
    innerFunc(soap)
};

/* //solution 2
const cleanTable1 = function(soap) {
  const innerFunc = (_soap) => { // change errow func
    console.log(`cleaning ${that.table} using ${soap}`)
  }
  innerFunc(soap)
};

//solution 3
const cleanTable1 = function(soap) {
  const innerFunc = function(_soap) { // change errow func
    console.log(`cleaning ${that.table} using ${soap}`)
  }
  innerFunc.call(this, soap)
};

//solution 4
const cleanTable1 = function(soap) {
  const innerFunc = function(_soap) { // change errow func
    console.log(`cleaning ${that.table} using ${soap}`)
  }
  innerFunc.bind(this)(soap)
}; */

this.garage = {
  table: 'garage table',
  cleanTable() {
    console.log(`cleaning ${this} window`)
  }
}

console.log(this.garage.table);

let johnsRoom = {
  table: 'Johns table'
}

//this key with constructor
let createRoom = function(name) {
  this.table = `${name}s table`
}

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');


console.log(johnsRoom.table)
console.log(this.garage.cleanTable())
cleanTable1.call(this, 'some soap')
//cleanTable()
cleanTable1.call(this.garage, 'some soap')
cleanTable1.call(johnsRoom, 'some soap')
