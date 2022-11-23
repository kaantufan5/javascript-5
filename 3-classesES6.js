

class Book {
    constructor(title,author,year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//? İnstance

const book1 = new Book("Kasagi", "Omer Seyfettin", 1920);
const book2 = new Book("Sinekli Bakkal", "H.Edip Adıvar", 1910);

console.log(book1);

//? Sub-Class tanimlamasi 
class Magazine extends Book {
    constructor(title, author, year, month) {
        //! Book'un constructor'i cagrildi
        super(title, author, year);//! Book'un prototype kopyalanmış oldu
        this.month = month;
    }
 }

 const mag1 = new Magazine("Kasagi", "Omer Seyfettin", 1940, "Nov");

 console.log(mag1);
 console.log(mag1.getSummary());