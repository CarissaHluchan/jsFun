const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(petsData) {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    // var orangeKittes = [];
    // for (var i = 0; i < kitties.length; i++) {
    //   if (kitties[i].color === 'orange') {
    //     orangeKittes.push(kitties[i].name)
    //   }
    // }

    //or

    // kitties.forEach((kitty) => {
    //   if (kitty.color === 'orage') {
    //     orangeKitties.push(kitty.name)
    //   }
    // })

    //or

    // const orangeKitties = kitties.filter((kitty) => {
    //   return kitty.color === 'orange'
    // })

    // const namesOfOrangeKitties = orangeKitties.map((kitty) => {
    //   return kitty.name
    // })


    // or

    // const orangeKitties = kitties.filter((kitty) => {
    //   return kitty.color === 'orange'
    // }).map((kitty) => {
    //   return kitty.name
    // })

    //or

    // const orangeKitties = kitties.filter((kitty) => kitty.color . . .)

    //or

    // let ornageKitties = kitties.reduce((kittyCorral, kitty) => {
    //   if (kitty.color === 'orange') {
    //     kittyCorral.push(kitty.name)
    //   }
    //   return kittyCorral
    // }, [])

    /* CODE GOES HERE */

    // pseudocode:
    // search for only the orage cas (filter)
    // will return an array of 2 cat objects
    // return an array of 2 names (map)

    const orangeKitties = petsData.filter((cat) => {
      return cat.color === 'orange';
    });

    const orangeKittyNames = orangeKitties.map((cat) => {
      return cat.name;
    });

    return orangeKittyNames;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(pets) {
    // Sort the kitties by their age

    /* CODE GOES HERE */
    const sortedPets = pets.sort((a, b) => {
      return b.age - a.age
    })

    return sortedPets
    //pseudocode:
    // - sort the cat by age: we need to iterate, look at each kitty's age
    // - return an array equal in length just in a different order (map?)
    //     - still need to return an array -> maybe map
    // - array will be sorted form highest age to lowest
    // - use .sort() method -> how does that work?
    // - ex function compareNumber(a, b) {
    //      return (a-b)}
    
    // */

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    /*pseudocode:
    - iterate through kitties by age -> maybe forEach or map
    - increase age by one
    - ruturn the array with increase age

   /* CODE GOES HERE */
    const petsGrowUp = []
    pets.forEach((pet) => {
      pet.age += 2;
      petsGrowUp.push(pet)
    });
    return petsGrowUp;
  }
}
// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    /* CODE GOES HERE */
    const newMods = mods.map((mod) => ({
      mod: mod.mod,
      studentsPerInstructor: (mod.students/mod.instructors)
    }));
    return newMods
    // Annotation:
    // Write your annotation here as a comment
    // pesudocode:
    // math: studentsPerInstructor is 27/3 or students/instructors
    // method: maybe .map() return an array of objects the same length
    // assign the map to a new object
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    /* CODE GOES HERE */
    const cakeStock = cakes.map((cake) => ({
      flavor: cake.cakeFlavor,
      inStock: cake.inStock,
    }))
    // console.log(cakeStock)
    return cakeStock
    // Annotation:
    // Write your annotation here as a comment
   // pseudocode:
   // return array that is the same legth with less key value pairs
   // .map() ?
   // iterate over cakes
   // return cakeFalavor and inStok
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    /* CODE GOES HERE */

    const inStockCakes = cakes.filter((cake) => {
      if (cake.inStock > 0) {
        return cake
      }
    })
    // console.log(inStockCakes)
    return inStockCakes
    // Annotation:
    // Write your annotation here as a comment
    // iterate over cakes
    // find instock > 0
    // return a new array
    // maybe filter????
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */
    const inventory = cakes.reduce((acc, cake) => {
      acc += cake.inStock
      return acc
    }, 0)
    // console.log(inventory)
    return inventory
    // Annotation:
    // Write your annotation here as a comment
    // iterate over each cake
    // find instock add that number to tatal
    // return the total
    // .reduce() or .forEach
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    const cakeToppings = cakes.reduce((acc, cake) => {
      cake.toppings.forEach(topping => {
        if (!acc.includes(topping)) {
            acc.push(topping)}
    })
      return acc
    }, [])
    console.log(cakeToppings)
    return cakeToppings
    // let allCakeToppings = [];
    // const cakeToppings = cakes.forEach((cake) => {
    //   if (!allCakeToppings.includes(cake.toppings))
    // })

    // const toppings = cakes.filter((cake) => {
    //   let cakeToppings = [];
    //   if (!cakeToppings.includes(cake.toppings)) {
    //     cakeToppings.push(cake.toppings)
    //   }
    //   return cakeToppings
    // })
    // console.log(toppings)
    // return toppings

    // Annotation:
    // Write your annotation here as a comment

    // iterate over cakes
    // look at toppings 
    // put all nonduplicate topping into a new array
    // return the new array
    // .fiter() with a conditional to look for duplicates
    //   if (!acc.includes(activity)) {
    //   acc.push(activity)
    // }
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    /* CODE GOES HERE */
    const feOnly = classrooms.filter((classroom) => {
      return classroom.program === 'FE';
    })
    return feOnly;
    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // iterate over classrooms.program that is FE
    // put them in a new array 
    // use .filter()

  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    /* CODE GOES HERE */

    // const totalCapacity = classrooms.reduce((acc, classroom) => {
    //   if (classroom.program === 'FE') {
    //     acc.feCapacity += classroom.capacity
    //   } else if (classroom.program === 'BE') {
    //     acc.beCapacity += classroom.capacity
    //   }
    //   return acc
    // }, {feCapacity: 0, beCapacity: 0})
    // return totalCapacity

    // or

    const totalCapacity = classrooms.reduce((acc, classroom) => {
      if(!acc.feCapacity) acc.feCapacity = 0
      if(classroom.program === 'FE') acc.feCapacity += classroom.capacity
      
      if(!acc.beCapacity) acc.beCapacity = 0;
      if(classroom.program === 'BE') acc.beCapacity += classroom.capacity

      return acc
    }, {})
    return totalCapacity


    // const beOnly = classrooms.filter((classroom) => {
    //   return classroom.program === 'BE';
    // });

    // const totalBECapacity = beOnly.reduce((acc, classroom) => {
    //   acc += classroom.capacity
    //   return acc;
    // }, 0);

    // const feOnly = classrooms.filter((classroom) => {
    //   return classroom.program === 'FE';
    // });

    // const totalFECapacity = feOnly.reduce((acc, classroom) => {
    //   acc += classroom.capacity
    //   return acc;
    // }, 0);

    // const totalCapacity = {
    //   feCapacity: totalFECapacity,
    //   beCapacity: totalBECapacity
    // }
    // return totalCapacity


    // const capacityTotal = classrooms.reduce((acc, classroom) => {
    //   if (classroom.program === 'FE') {
    //     return acc += classroom.capacity
    //   }
    //   if (classroom.program === 'BE') {
    //     return acc += classroom.capacity
    //   }
    //   return acc
    // }, {})
    // return capacityTotal

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // iterate over all FE and all BE add the total capacity 
    // using a counter maybe .reduce() to a new object 

  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */
    const byCapacity = classrooms.sort((a, b) => {
      return a.capacity - b.capacity
    })
    return byCapacity
    // Annotation:
    // Write your annotation here as a comment
    //psudeocode:
    // take classroom use .sort() decending order a-b?
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(books, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    /* CODE GOES HERE */
    const averageTemp = weather.map((location) => {
      return (location.temperature.high + location.temperature.low)/2;
    });
    // console.log(averageTemp)
    return averageTemp

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // return a new array containing the average 
    // temperature for all locations maybe .map()
    // math: (47+33)/2
      // (location.temperature.high + location.temperature.low)/2
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    /* CODE GOES HERE */
    const sunnyLocations = weather.filter((location) => {
      return location.type.includes('sunny'); 
    });
    // console.log(sunnyLocations)
    const sunnySentences = sunnyLocations.map((location) => {
      return `${location.location} is ${location.type}.`;
    })
    // console.log(sunnySentences)
    return sunnySentences;
    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // find sunny and mostly sunny locations maybe .filter() then .map()
      // callback return a new array of elements that 
      // pass the conditional defined
    // return a new array saying location is sunny
      // `${weather.location} is ${weather.type}.`
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    /* CODE GOES HERE */
    const humidities = weather.sort((a, b) => {
     return b.humidity - a.humidity;
    })
    return humidities[0];
    // const humidities = weather.map((location) => ({
    //   humitity: location.humidity,
    // }))
    // console.log(humidities)

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // use .sort() to find highest humidity

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    /* CODE GOES HERE */
    const parks = nationalParks.reduce((acc, park) => {
      if (park.visited) {
        acc.parksVisited.push(park.name)
      } else {
        acc.parksToVisit.push(park.name)
      }
      return acc;
    }, {parksToVisit: [], parksVisited: []})
  //  console.log(parks)
    return parks

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // want to use .reduce()
    // use a conditional
    // how to access this boolean property if (visted === true) {}
    // code challenge: solve with forEach
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state 
    // and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    /* CODE GOES HERE */
    const parkInEachState = nationalParks.map((park) => ({
      [park.location]: park.name 
    }))
    return parkInEachState
    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // iterate through each park
    // map? the location and name of park to a new array of objects
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    /* CODE GOES HERE */
    const parkActivities = nationalParks.reduce((acc, park) => {
     park.activities.forEach((activity) => {
      if (!acc.includes(activity)) {
        acc.push(activity)
      }
     })
      return acc;
    }, [])
    return parkActivities

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // iterate over all activities
    // put activies into a new array
    // do not put activity into the array if it is already there
    // maybe use .reduce()?
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    /* CODE GOES HERE */
    let totalBeers = 0;
    const beers = breweries.forEach((brewery) => {
      totalBeers += brewery.beers.length
    })
    return totalBeers;

    // Annotation:
    // Write your annotation here as a comment
    // psedocode:
    // - iterate over each beer in each brewery
    // - count the legnth of the objects inside beers
    // - add those beers to the total count
    // - return the final count as a number
    // - forEach or reduce

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    /* CODE GOES HERE */
    const breweryAndBeerCount = breweries.map((brewery) => ({
      name: brewery.name,
      beerCount: brewery.beers.length
    }))
    // console.log(breweryAndBeerCount)
    return breweryAndBeerCount;

    // Annotation:
    // Write your annotation here as a comment
    //psedocode:
    // .map() or .reduce()
    // can use map to return an object
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5


    /* CODE GOES HERE */
  const findBrewery = breweries.filter((brewery) => {
    return brewery.name === breweryName;
  })
  // console.log('findBrewery',findBrewery)
  const breweryBeerCount = findBrewery.reduce((beerCount, sum) => {
    beerCount += sum.beers.length;
    return beerCount;
  }, 0)
  return breweryBeerCount;
    // Annotation:
    // Write your annotation here as a comment
    // pusedocode:
    // - brewery name: breweries.name
    // - beer count: breweries.beers.length
    // - search by beer name maybe .filter()
    // - navigate to beers and count the objects maybe .reduce()

  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    /* CODE GOES HERE */
    const findBeers = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach((beer) => {acc.push(beer)});
      return acc;
    }, []);
    // console.log(findBeers)
    const highestABV = findBeers.sort((a, b) => {
      return b.abv -a.abv;
    })
    return highestABV[0];
    // Annotation:
    // Write your annotation here as a comment
     // pusedocode:
     // find ABV: breweries.beers[i].abv maybe .reduce() then .sort()
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    /* CODE GOES HERE */
    // console.log(boardGames[type])
    const boardGameType = boardGames[type]
    const boardGameNames = boardGameType.map(game => {
      return game.name
    })
    // console.log(boardGameNames)
    return boardGameNames
    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // function takes in an argument 'type': the strings strategy childrens party
    // how do I access the value in an object?
      // . or bracet notation
    // iterate over the boardGames names inside the array inside the object
    // put into 3 sepearte arrays maybe .map()
    // maybe object.keys() or .values()
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    /* CODE GOES HERE */
    const gameBoardTypes = boardGames[type]
    const boardGameNames = gameBoardTypes.map(game => {
      return game.name
    })
   const sortName = boardGameNames.sort()
   return sortName
    // Annotation:
    // Write your annotation here as a comment

    // pusedocode:
    // access the value of the object
    // .map to new array
    // then .sort
    // *** SORT NOTE: cannot use (a, b) if using the default setting!!!!!
      // o memorize this, remember that (a, b) => a - b 
      // sorts numbers in ascending order.
      // If omitted, the array elements are converted to strings, 
      // then sorted according to each character's Unicode 
      // code point value.
      // ****
  },


  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

    /* CODE GOES HERE */
    // const gameType = boardGames[type];
    // console.log(gameType)

    const highestRatedGame = boardGames[type].sort((a, b) => {
      return b.rating - a.rating
    })
    return highestRatedGame[0];

    // Annotation:
    // Write your annotation here as a comment
    // pseudocode:
    // maybe use .find() or reduce?
    // sort array by ratting
    // return array at 0
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    //  const gameType = boardGames[type];
    // console.log(gameType)

    const averageRating = boardGames[type].reduce((acc, game) => {
      (acc += game.rating) 
      return acc
    }, 0)
    return averageRating / boardGames[type].length
    // Annotation:
    // Write your annotation here as a comment
    //pseudocode:
    // what is being refered to as the score? maybe rating??
    // iterate over the game rattings
    // add the rattings (use acc?)
    // divide by the length
    // return a number
    // maybe reduce
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */
    //  const gameType = boardGames[type];
    // console.log(gameType)
    // const maxPalyerNum = boardGames[type].maxPlayers;
    // console.log('max players: ', maxPalyerNum)
    // console.log(maximumPlayers)

    const gameByMaxPlayers = boardGames[type].filter((game) => {
      if (game.maxPlayers === maximumPlayers) {
        return game
      }
    })
   const totalRating = gameByMaxPlayers.reduce((acc, game) => {
      acc += game.rating
      return acc
    }, 0)
    return totalRating / gameByMaxPlayers.length

    // console.log(gameByMaxPlayers)
    // const averageRating = boardGames[type].reduce((acc, gameByMaxPlayers) => {
    //   acc += gameByMaxPlayers.rating
    //   return acc
    // }, 0)
    // return averageRating / gameByMaxPlayers.length

    // Annotation:
    // Write your annotation here as a comment
    //pseudocode:
    // iterate over the games 
    // find all the games with maxplayers at (2, 4, 8) = maximumPlayers
    // add them up 
    // return the average (/length)
    //maybe .filter then .reduce 
    //can I do this with .forEach???
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.
 
    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.
 
    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
