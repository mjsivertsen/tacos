const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"

const changeName = ( id, newObjectName ) => {
    let taco = tacos.find((taco) => taco.id == id);
    return {...taco, name: newObjectName };
};

let changeNameTaco = changeName ( 2, "changed" );
console.log(changeNameTaco)


// success!  Mostly?  Should it have the same id?



// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)

const returnHTML = (taco) => (
 `<p> I love ${taco.name} tacos the most! </p>`
);

console.log(returnHTML(taco2))

//success!




// write a function that takes an tacoOBJ and return formatted price with .00 

const priceFormat = (taco) => (
 taco.price.toFixed(2)
);

console.log(priceFormat(taco1))

// success!





// create a new array where all of the prices is formatted with .00

const formattedPrice = (tacos) => {
  let decimalTacos = tacos.map(priceFormat);
  return decimalTacos;
};

console.log(formattedPrice(tacos))

const tacoObjectsWithFormattedPrices = (tacos) => {
  return tacos.map((taco) => {
    return {...taco, price: priceFormat(taco)};
  });
};

console.log(tacoObjectsWithFormattedPrices(tacos))

// success!




// write a function that takes an array and logs each item in the array
// hint forEach

const getTacoInfo = (tacos) => {
  return tacos.forEach((taco) => {
    console.log(`${taco.id}. ${taco.name} tacos  Price: $${priceFormat(taco)} Reviews: ${taco.about}`)
  });
};

getTacoInfo(tacos)

//success!





// use the find method to return the object with id:1

const findTaco = (id) => {
let taco = tacos.find((taco) => taco.id == id);
return {...taco}
}

console.log(findTaco(1))

//success!



// return a new array with all prices greater than 19
const findExpensiveTacos = (tacos) => {
  return tacos.filter((taco) => (taco.price > 19));
  };

console.log(findExpensiveTacos(tacos))

//success!


// return a new array with a 'about' key where it is a combo of
// name price and about

const bigAbout = (tacos) => {
  return tacos.map((taco) => {
    return {...taco, about: `${taco.name} ${taco.price} ${taco.about}`};
  });
};

console.log(bigAbout(tacos))

///CRUD

// don't change tacos array or change objects
// can hard code data (Don't need to get it from the users)

// READ (array of obj to array of html) 

const fakeJSX = (taco) => {
  return `<h1>${taco.id}. ${taco.name} tacos </h1>
  <h2>$ ${taco.price} </h2> 
  <p>${taco.about} </p>`
};

let htmlTacos = tacos.map(fakeJSX);
console.log(htmlTacos);

//success I think!  The string version of HTML, and it has the weird /n for the line breaks...


// Update (update a taco) 

const updatedTaco = (id, newName, newPrice, newAbout) => {
  let taco = tacos.find((taco) => taco.id == id);
  return {...taco, name: newName, price: newPrice, about: newAbout};
};

tofu = updatedTaco(1, "tofu", 18, "A bit spongey")
console.log(tofu)

//success!  Veganized!

// Remove (delete a taco)

const deleteTaco = (id) => {
  return tacos.filter((taco) => {
    return taco.id !== id;
  });
 };

 console.log(deleteTaco(1))

 const deleteTacoByName = (name) => tacos.filter((taco) => taco.name !== name);

console.log(deleteTacoByName("carne asada"))

//success!  In two ways!


// Create (add a taco) 

const addTaco = (tacos, newid, newName, newPrice, newAbout) => {
  let taco = {id: newid, name: newName, price: newPrice, about: newAbout};
  return [...tacos, taco];
};

console.log(addTaco(tacos, 4, "potato", 15, "Spendid!"))

//success!

// bonus use reduce to return the sum of prices in tacos array
const tacoSum = (tacos) => {
  return tacos.reduce((tacoAccum, taco) => {
    return tacoAccum + taco.price;
  }, 0);
};

console.log(tacoSum(tacos))

//success!

// bonus do in rails

// bonus create you own
