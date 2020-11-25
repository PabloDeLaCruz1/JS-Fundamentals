function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      //string x is redefined and it has function level scope 
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
      //const has block level scope
      const x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
      //var has function level scope, so an error is thrown when 
      //it finds x was defined in the function body. 
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      //let has block level scope (same as const)
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
  }
  
  function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
      //no error here cus its block level scope
      let x = 'in block';  
      console.log(x);
    }
    //error here because we already declared x in this scope (line 43)
    let x = 'out of block again';
    console.log(x);
  }


