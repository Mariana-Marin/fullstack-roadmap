const bookCollection = [
  {
    title: "Dune",
    author: "Frank Herbert",
    isbn: "978-0441172719",
    publicationYear: 1965,
    genre: ["Science Fiction", "Epic", "Adventure"],
    pages: 412,
    publisher: {
      name: "Chilton Books",
      location: "Philadelphia",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.25 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "The story of Paul Atreides, whose family assumes control of the desert planet Arrakis, the only source of the universe's most vital resource, 'the spice'.",
    chapters: 30,
    keywords: [
      "desert planet",
      "ecology",
      "politics",
      "religion",
      "giant worms",
    ],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0141439518",
    publicationYear: 1813,
    genre: ["Classic", "Romance", "Social Satire"],
    pages: 279,
    publisher: {
      name: "T. Egerton, Whitehall",
      location: "London",
    },
    isAvailable: false,
    ratings: [
      { source: "Goodreads", score: 4.27 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A classic novel chronicling the emotional development of Elizabeth Bennet, who learns the error of judging by first impressions and comes to appreciate Mr. Darcy.",
    chapters: 61,
    keywords: ["regency england", "marriage", "class", "manners", "wit"],
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    publicationYear: 1949,
    genre: ["Dystopian", "Political Fiction", "Science Fiction"],
    pages: 328,
    publisher: {
      name: "Secker & Warburg",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.17 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "Winston Smith struggles to survive in a totalitarian regime where truth is propaganda and surveillance is constant.",
    chapters: 24,
    keywords: ["totalitarianism", "surveillance", "doublethink", "big brother"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0061120084",
    publicationYear: 1960,
    genre: ["Southern Gothic", "Bildungsroman", "Social Drama"],
    pages: 324,
    publisher: {
      name: "J.B. Lippincott & Co.",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.29 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "Narrated by the young Scout Finch, the novel examines racial injustice in the American South through the eyes of her father, lawyer Atticus Finch.",
    chapters: 31,
    keywords: ["racism", "innocence", "justice", "alabama", "childhood"],
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isbn: "978-0062316097",
    publicationYear: 2011,
    genre: ["Non-Fiction", "History", "Anthropology"],
    pages: 464,
    publisher: {
      name: "Harper",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.37 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "A comprehensive look at the history of humanity, from the evolution of archaic human species to the twenty-first century's challenges.",
    chapters: 20,
    keywords: [
      "human evolution",
      "cognitive revolution",
      "historical analysis",
      "agriculture",
    ],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "978-0345339683",
    publicationYear: 1937,
    genre: ["Fantasy", "Adventure", "Children's Literature"],
    pages: 310,
    publisher: {
      name: "George Allen & Unwin",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.28 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "The tale of Bilbo Baggins, a hobbit who is recruited by Gandalf the wizard and a company of dwarves to steal treasure guarded by the dragon Smaug.",
    chapters: 19,
    keywords: ["middle-earth", "dragons", "elves", "quest", "riddles"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    isbn: "978-0142437247",
    publicationYear: 1851,
    genre: ["Adventure", "Gothic", "Classic"],
    pages: 624,
    publisher: {
      name: "Harper & Brothers",
      location: "New York",
    },
    isAvailable: false,
    ratings: [
      { source: "Goodreads", score: 3.51 },
      { source: "Amazon", score: 4.3 },
    ],
    summary:
      "The narrative of the obsessed Captain Ahab and his pursuit of Moby Dick, a giant white sperm whale.",
    chapters: 135,
    keywords: [
      "whaling",
      "obsession",
      "sea adventure",
      "symbolism",
      "vengeance",
    ],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    publicationYear: 1925,
    genre: ["Classic", "Tragedy", "Modernist"],
    pages: 180,
    publisher: {
      name: "Charles Scribner's Sons",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.93 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "Narrated by Nick Carraway, the story of the mysterious millionaire Jay Gatsby and his unrequited love for the married Daisy Buchanan.",
    chapters: 9,
    keywords: [
      "jazz age",
      "american dream",
      "wealth",
      "illusion",
      "long island",
    ],
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isbn: "978-0553380163",
    publicationYear: 1988,
    genre: ["Non-Fiction", "Science", "Cosmology"],
    pages: 256,
    publisher: {
      name: "Bantam Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.09 },
      { source: "Amazon", score: 4.7 },
    ],
    summary:
      "An explanation of cosmology for the non-specialist reader, covering concepts like the Big Bang, black holes, and time travel.",
    chapters: 12,
    keywords: ["black holes", "relativity", "universe", "quantum mechanics"],
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    isbn: "978-0307387899",
    publicationYear: 2006,
    genre: ["Post-Apocalyptic", "Literary Fiction", "Horror"],
    pages: 287,
    publisher: {
      name: "Alfred A. Knopf",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.95 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A father and his son journey across a post-apocalyptic landscape, trying to maintain their humanity while carrying a fire against the darkness.",
    chapters: 15,
    keywords: ["survival", "father-son", "dystopia", "bleak", "ashes"],
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    isbn: "978-0060883287",
    publicationYear: 1967,
    genre: ["Magical Realism", "Epic", "Latin American Literature"],
    pages: 417,
    publisher: {
      name: "Harper Perennial",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.1 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "The multi-generational story of the Buendía family, whose patriarch founds the mythical town of Macondo.",
    chapters: 20,
    keywords: ["macondo", "buendía", "solitude", "incest", "cyclical time"],
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    isbn: "978-0756404741",
    publicationYear: 2007,
    genre: ["Fantasy", "High Fantasy", "Adventure"],
    pages: 662,
    publisher: {
      name: "DAW Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.55 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "The first volume in the Kingkiller Chronicle, telling the story of Kvothe, an infamous adventurer, musician, and arcanist.",
    chapters: 96,
    keywords: ["magic", "music", "coming of age", "university", "arcane"],
  },
  {
    title: "Where the Sidewalk Ends",
    author: "Shel Silverstein",
    isbn: "978-0060256678",
    publicationYear: 1974,
    genre: ["Poetry", "Children's Literature"],
    pages: 176,
    publisher: {
      name: "HarperCollins",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.39 },
      { source: "Amazon", score: 4.9 },
    ],
    summary:
      "A collection of whimsical and sometimes profound poems and drawings.",
    chapters: 0, // Poetry books often don't have traditional chapters
    keywords: ["humor", "rhyme", "imagination", "childhood"],
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    isbn: "978-0679724777",
    publicationYear: 1992,
    genre: ["Dark Academia", "Mystery", "Literary Fiction"],
    pages: 559,
    publisher: {
      name: "Alfred A. Knopf",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.07 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A group of eccentric classics students at a Vermont college become involved in a murder.",
    chapters: 10,
    keywords: ["classics", "vermont", "murder", "cult", "greek tragedy"],
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    isbn: "978-0345539434",
    publicationYear: 1980,
    genre: ["Non-Fiction", "Science", "Astronomy"],
    pages: 384,
    publisher: {
      name: "Random House",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.41 },
      { source: "Amazon", score: 4.8 },
    ],
    summary:
      "An exploration of science and the universe, originally published alongside the famous television series.",
    chapters: 13,
    keywords: ["space", "stars", "evolution", "pale blue dot"],
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    isbn: "978-0307454546",
    publicationYear: 2005,
    genre: ["Mystery", "Thriller", "Crime"],
    pages: 656,
    publisher: {
      name: "Norstedts Förlag",
      location: "Stockholm",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.14 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the disappearance of a woman from a wealthy family decades earlier.",
    chapters: 35,
    keywords: ["sweden", "hacking", "journalism", "family secrets"],
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    isbn: "978-1451629173",
    publicationYear: 1961,
    genre: ["Satire", "War Fiction", "Black Comedy"],
    pages: 453,
    publisher: {
      name: "Simon & Schuster",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.02 },
      { source: "Amazon", score: 4.5 },
    ],
    summary:
      "A satirical look at the absurdity of war through the eyes of Yossarian, a U.S. Army Air Force bombardier in World War II.",
    chapters: 42,
    keywords: ["world war ii", "absurdism", "military bureaucracy", "pilot"],
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "978-0062315007",
    publicationYear: 1988,
    genre: ["Philosophical Fiction", "Adventure"],
    pages: 208,
    publisher: {
      name: "HarperOne",
      location: "San Francisco",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.9 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A shepherd boy named Santiago travels from Spain to the Egyptian desert in search of a treasure.",
    chapters: 2, // Divided into "Part One" and "Part Two"
    keywords: ["personal legend", "destiny", "treasure", "egyptian desert"],
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    isbn: "978-0141439471",
    publicationYear: 1818,
    genre: ["Gothic", "Science Fiction (early)", "Horror"],
    pages: 280,
    publisher: {
      name: "Lackington, Hughes, Harding, Mavor & Jones",
      location: "London",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 3.82 },
      { source: "Amazon", score: 4.4 },
    ],
    summary:
      "Victor Frankenstein, a scientist, creates a grotesque yet sentient creature in an unorthodox scientific experiment.",
    chapters: 24,
    keywords: ["monster", "creation", "mad scientist", "revenge", "geneva"],
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    isbn: "978-1451673312",
    publicationYear: 1953,
    genre: ["Dystopian", "Science Fiction"],
    pages: 158,
    publisher: {
      name: "Ballantine Books",
      location: "New York",
    },
    isAvailable: true,
    ratings: [
      { source: "Goodreads", score: 4.0 },
      { source: "Amazon", score: 4.6 },
    ],
    summary:
      "A firefighter named Guy Montag is tasked with burning books in a future where intellectual thought is suppressed.",
    chapters: 3,
    keywords: [
      "censorship",
      "firefighter",
      "books",
      "future society",
      "media saturation",
    ],
  },
];

// -----------------------------------------------------------------------------
// SPREAD AND REST EXERCISES
// -----------------------------------------------------------------------------

// 1. Exercise: Clone Collection
// Function Name: cloneCollection
// Instruction: Use the spread operator `...` to create a shallow copy of the `bookCollection` array.
// Example Output: A new array identical to the original.
// Hint: `const newArray = [...bookCollection]`

function cloneCollection(collection) {
  const newCollection = [...collection];
  return newCollection;
}

console.log(cloneCollection(bookCollection));

// 2. Exercise: Merge Arrays
// Function Name: mergeBookArrays
// Instruction: Create a new array containing all books from `bookCollection` plus a new dummy book object. Use spread to combine them.
// Example Output: [ ...allBooks, { title: "New Book", ... } ]
// Hint: `const merged = [...bookCollection, newBook]`

// 3. Exercise: Add Keywords (Spread)
// Function Name: addKeywords
// Instruction: Create a function that takes a book object and an array of new keywords. Return a NEW book object with the new keywords added to the existing ones using spread.
// Example Output: { ...book, keywords: [...book.keywords, "new", "tags"] }
// Hint: Use spread inside the object literal AND inside the array literal.

// 4. Exercise: Update Book Details (Spread)
// Function Name: updateBook
// Instruction: Create a function that takes a book object and a new `pages` value. Return a NEW book object with the updated pages, keeping all other properties the same.
// Example Output: { title: "Dune", pages: 500, ... } (Original had 412)
// Hint: `return { ...book, pages: newPages }`

// 5. Exercise: Combine Two Books' Keywords
// Function Name: combineKeywords
// Instruction: Create a function that takes two book objects. Return a single array containing all keywords from both books, combined using spread.
// Example Output: ["desert planet", ..., "regency england", ...]
// Hint: `[...book1.keywords, ...book2.keywords]`

// 6. Exercise: Rest Parameter (Sum Pages)
// Function Name: sumPages
// Instruction: Create a function that accepts ANY number of book objects as arguments using the rest operator `...books`. Return the total pages of all passed books.
// Example Output: sumPages(book1, book2, book3) -> 1000
// Hint: `function sumPages(...books) { return books.reduce(...) }`

// 7. Exercise: Destructuring with Rest (Array)
// Function Name: getFirstAndRest
// Instruction: Use array destructuring with the rest operator to assign the first book to a variable `firstBook` and all other books to a variable `otherBooks`.
// Example Output: firstBook = { title: "Dune" ... }, otherBooks = [ { title: "Pride..." } ... ]
// Hint: `const [firstBook, ...otherBooks] = bookCollection`

// 8. Exercise: Destructuring with Rest (Object)
// Function Name: removeSensitiveInfo
// Instruction: Create a function that takes a book object. Use object destructuring with rest to return a new object containing everything EXCEPT the `ratings` property.
// Example Output: { title: "Dune", ... } (No ratings property)
// Hint: `const { ratings, ...publicInfo } = book; return publicInfo;`

// 9. Exercise: Spread for Math
// Function Name: getMaxPages
// Instruction: Create an array of all page counts from the collection (using map). Then use the spread operator to pass these numbers to `Math.max()` to find the highest page count.
// Example Output: 662
// Hint: `Math.max(...pageCounts)`

// 10. Exercise: Merge Settings (Default Pattern)
// Function Name: createBookWithDefaults
// Instruction: Create a function that takes a partial book object (e.g., just title and author). Merge it with a `defaultSettings` object (e.g., { isAvailable: true, chapters: 10 }) using spread, so the passed values override defaults if present.
// Example Output: { isAvailable: true, chapters: 10, title: "My Book", author: "Me" }
// Hint: `return { ...defaultSettings, ...userBook }`

