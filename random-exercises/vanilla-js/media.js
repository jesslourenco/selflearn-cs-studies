// PARENT CLASS
class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    /* Getters */
    get title(){ return this._title; }
    get isCheckedOut(){ return this._isCheckedOut; }
    get ratings(){ return this._ratings; }
  
    /* Setters */
    set isCheckedOut(value){ this._isCheckedOut = value; }
  
    /* Methods */
    getAverageRating(){
      let sum = this.ratings.reduce((sum,rating) => { 
        sum = sum + rating;
        return sum;
        });
      let avg = sum / this.ratings.length;
      return avg;
    }
  
    toggleCheckOutStatus(){ this._isCheckedOut == true ? this._isCheckedOut = false : this._isCheckedOut = true; }
  
    addRating(newRating){ this._ratings.push(newRating) }
  };
  
  //CHILD CLASSES
  class Book extends Media{
    constructor(title, bookAuthor, bookPages){
      super(title);
      this._bookAuthor = bookAuthor;
      this._bookPages = bookPages;
    }
    /* Getters */
    get bookAuthor(){ return this._bookAuthor; }
    get bookPages(){ return this._bookPages; }
  };
  
  class Movie extends Media{
    constructor(title, movieDirector, movieRunTime){
      super(title);
      this._movieDirector = movieDirector;
      this._movieRunTime = movieRunTime;
    }
    /* Getters */
    get movieDirector(){ return this._movieDirector; }
    get movieRunTime(){ return this._movieRunTime; }
  };
  
  const historyOfEverything = new Book( 'A Short History of Nearly Everything', 'Bill Bryson', 544 ); 
  console.log(`Book: ${historyOfEverything.title}`);
  historyOfEverything.toggleCheckOutStatus();
  console.log(`Checked out?: ${historyOfEverything.isCheckedOut}`);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(`Average rating: ${Math.round(historyOfEverything.getAverageRating())}\n`);
  
  const speed = new Movie( 'Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(`Movie: ${speed.title}`);
  console.log(`Checked out?: ${speed.isCheckedOut}`);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(`Average rating: ${Math.round(speed.getAverageRating())}`);
  
  
  