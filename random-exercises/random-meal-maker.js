const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []  
    },

    get courseAppetizers() { return this._courses.appetizers; },
    set courseAppetizers(appetizer) { this._courses.appetizers.push(appetizer); },
    get courseMains() { return this._courses.mains; },
    set courseMains(main) { this._courses.mains.push(main); },
  
    get courseDesserts() { return this._courses.desserts; },
    set courseDesserts(dessert) { this._courses.desserts.push(dessert); },
  
    get courses(){ return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }},
  
    addDishCourse(courseName, dishName, dishPrice){
      let dish = {
        name: dishName,
        price: dishPrice
      }
      switch(courseName){
        case 'appetizers':
          this.courseAppetizers = dish;
          break;
        case 'mains':
          this.courseMains = dish;
          break;
        case 'desserts':
          this.courseDesserts = dish;
          break;
      }},
  
    getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
      },
  
    generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let bill =  appetizer.price + main.price + dessert.price;
      return `Coursemeal: ${appetizer.name} for appetizer, ${main.name} for the main dish, and ${dessert.name} for desert. Your total bill is at ${bill}.`
    }
    };
  
  menu.addDishCourse('mains', 'grilled salmon', 15);
  menu.addDishCourse('mains', 'xburger', 12);
  menu.addDishCourse('mains', 'bolognese lasagna', 20);
  
  menu.addDishCourse('appetizers', 'sweet potato fries', 5);
  menu.addDishCourse('appetizers', 'caesar salad', 5);
  menu.addDishCourse('appetizers', 'garlic bread bites', 6);
  
  menu.addDishCourse('desserts', 'oreo cheesecake', 12);
  menu.addDishCourse('desserts', 'decadent chocolate brownie', 6);
  menu.addDishCourse('desserts', 'strawberry ice cream', 3);
  
  //console.log(menu._courses);
  let meal = menu.generateRandomMeal();
  console.log(meal);
  