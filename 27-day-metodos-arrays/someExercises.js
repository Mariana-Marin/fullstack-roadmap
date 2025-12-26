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
// SOME EXERCISES
// -----------------------------------------------------------------------------

// 1. Exercise: Any Long Books?
// Function Name: hasLongBooks
// Instruction: Use .some() to check if there is at least one book with more than 600 pages.
// Example Output: true
// Hint: `book.pages > 600`

function hasLongBooks(books) {
  return books.some((book) => {
    return book.pages > 600;
  });
}

//console.log(hasLongBooks(bookCollection));

// 2. Exercise: Any Old Books?
// Function Name: hasOldBooks
// Instruction: Use .some() to check if there is any book published before the year 1900.
// Example Output: true
// Hint: `book.publicationYear < 1900`

function hasOldBooks(books) {
  return books.some((book) => {
    return book.publicationYear < 1900;
  });
}

console.log(hasOldBooks(bookCollection));

// 3. Exercise: Any Horror Books?
// Function Name: hasHorrorBooks
// Instruction: Use .some() to check if any book has the genre "Horror".
// Example Output: true
// Hint: `book.genre.includes("Horror")`

function hasHorrorBooks(books) {
  return books.some((book) => {
    return book.genre.includes("Horror");
  });
}
console.log(hasHorrorBooks(bookCollection));

// 4. Exercise: Any Unavailable Books?
// Function Name: hasUnavailableBooks
// Instruction: Use .some() to check if there is any book that is currently NOT available.
// Example Output: true
// Hint: `book.isAvailable === false`

function hasUnavailableBooks(books) {
  return books.some((book) => {
    return !book.isAvailable;
  });
}

console.log(hasUnavailableBooks(bookCollection));

// 5. Exercise: Any Perfect Ratings?
// Function Name: hasPerfectRating
// Instruction: Use .some() to check if any book has a rating score of 5.0 from any source.
// Example Output: false (highest is usually 4.9)
// Hint: `book.ratings.some(r => r.score === 5.0)`

function hasPerfectRating(books) {
  return books.some((book) =>
    book.ratings.some((r) => {
      return r.score === 5;
    })
  );
}
console.log(hasPerfectRating(bookCollection));

// 6. Exercise: Any Book with "Magic"?
// Function Name: hasMagicKeyword
// Instruction: Use .some() to check if any book includes the keyword "magic".
// Example Output: true
// Hint: `book.keywords.includes("magic")`

function hasMagicKeyword(books) {
  return books.some((book) => {
    return book.keywords.includes("magic");
  });
}

console.log(hasMagicKeyword(bookCollection));

// 7. Exercise: Any Book by Stephen King?
// Function Name: hasStephenKing
// Instruction: Use .some() to check if there is any book written by "Stephen King".
// Example Output: false
// Hint: `book.author === "Stephen King"`

function hasStephenKing(books) {
  
  return books.some((book) => {
    return book.author.includes("Stephen King");
  });
}

console.log(hasStephenKing(bookCollection));

// 8. Exercise: Any Book with 0 Chapters?
// Function Name: hasZeroChapters
// Instruction: Use .some() to check if there is any book with 0 chapters (like poetry).
// Example Output: true
// Hint: `book.chapters === 0`

function hasZeroChapters(books) {
  return books.some((book) => {
    return book.chapters === 0;
  });
}

console.log(hasZeroChapters(bookCollection));

// 9. Exercise: Any Low Rated Book?
// Function Name: hasLowRatedBook
// Instruction: Use .some() to check if there is any book with a "Goodreads" score below 3.5.
// Example Output: false (lowest is usually around 3.51)
// Hint: `book.ratings.find(r => r.source === "Goodreads").score < 3.5`

function hasLowRatedBook(books) {
  
  return books.some((book) => {
    return book.ratings.score < 3.5;
  });
}

console.log(hasLowRatedBook(bookCollection));

// 10. Exercise: Any Future Book?
// Function Name: hasFutureBook
// Instruction: Use .some() to check if there is any book published in the year 2025 or later.
// Example Output: false
// Hint: `book.publicationYear >= 2025`

function hasFutureBook(books) {
  return books.some((book) => {
    return book.publicationYear >= 2025;
  });
}

console.log(hasFutureBook(bookCollection));
