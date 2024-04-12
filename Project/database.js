const User = require("./models/user");
const Quote = require("./models/quote");
const Account = require("./models/account");
const mongoose = require("mongoose");
require("dotenv").config();

const PRICE = {
  price: "3.50",
};

const sampleUsers = [
  { username: 'user_alice123', fullname: 'Alice Adams', address1: '1001 First St', address2: '', city: 'Anytown', zipcode: '12345', state: 'CA' },
  { username: 'user_bob456', fullname: 'Bob Brown', address1: '2002 Second St', address2: '', city: 'Othertown', zipcode: '23456', state: 'NY' },
  { username: 'user_charlie789', fullname: 'Charlie Clark', address1: '3003 Third St', address2: '', city: 'Anothertown', zipcode: '34567', state: 'TX' },
  { username: 'user_david101', fullname: 'David Davis', address1: '4004 Fourth St', address2: '', city: 'Somewhere', zipcode: '45678', state: 'FL' },
  { username: 'user_emily202', fullname: 'Emily Evans', address1: '5005 Fifth St', address2: '', city: 'Elsewhere', zipcode: '56789', state: 'WA' },
  { username: 'user_frank303', fullname: 'Frank Foster', address1: '6006 Sixth St', address2: '', city: 'Nowhere', zipcode: '67890', state: 'CA' },
  { username: 'user_grace404', fullname: 'Grace Green', address1: '7007 Seventh St', address2: '', city: 'Everywhere', zipcode: '78901', state: 'NY' },
  { username: 'user_henry505', fullname: 'Henry Harris', address1: '8008 Eighth St', address2: '', city: 'Anywhere', zipcode: '89012', state: 'TX' }
];

const sampleAccounts = [
  { username: 'alice123', password: 'alicepassword123' },
  { username: 'bob456', password: 'bobpassword456' },
  { username: 'charlie789', password: 'charliepassword789' },
  { username: 'david101', password: 'davidpassword101' },
  { username: 'emily202', password: 'emilypassword202' },
  { username: 'frank303', password: 'frankpassword303' },
  { username: 'grace404', password: 'gracepassword404' },
  { username: 'henry505', password: 'henrypassword505' }
];
const sampleQuotes = [

  { username: 'quote_alice123', quote_id: 1, gallons: 100, address: '123 Main St, Anytown', date: new Date('2024-04-12'), price: 350 },
  { username: 'quote_bob456', quote_id: 2, gallons: 150, address: '456 Elm St, Othertown', date: new Date('2024-04-13'), price: 525 },
  { username: 'quote_charlie789', quote_id: 3, gallons: 120, address: '789 Oak St, Anothertown', date: new Date('2024-04-14'), price: 420 },
  { username: 'quote_david101', quote_id: 4, gallons: 80, address: '101 Pine St, Somewhere', date: new Date('2024-04-15'), price: 280 },
  { username: 'quote_emily202', quote_id: 5, gallons: 200, address: '202 Maple St, Elsewhere', date: new Date('2024-04-16'), price: 700 },
  { username: 'quote_frank303', quote_id: 6, gallons: 90, address: '303 Walnut St, Nowhere', date: new Date('2024-04-17'), price: 315 },
  { username: 'quote_grace404', quote_id: 7, gallons: 180, address: '404 Birch St, Everywhere', date: new Date('2024-04-18'), price: 630 },
  { username: 'quote_henry505', quote_id: 8, gallons: 110, address: '505 Cedar St, Anywhere', date: new Date('2024-04-19'), price: 385 }
];


class Database {
  /// Used to create the database, normally a url is a destination to connect to.
  constructor(url = "mongodb://localhost/cosc4353") {
    this.url = process.env.MONGO_URL || url;

    mongoose
      .connect(this.url, {})
      .then(() => console.log("MongoDB connected."))
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw new Error();
      });
  }
  async seedData() {
    try{
      await Account.insertMany(sampleAccounts);
      await User.insertMany(sampleUsers);
      await Quote.insertMany(sampleQuotes);

    } catch(err){
      console.error('Error seeding data:', err);
    }
  }

  // SELECT / Getters
  async get_account(username) {
    return Account.findOne({ username }).exec();
  }

  async get_user(username) {
    return User.findOne({ username }).exec();
  }

  async get_quote(username, quote_id) {
    return Quote.findOne({ username, quote_id }).exec();
  }

  async get_history(username) {
    return Quote.find({ username }).exec();
  }

  async get_price() {
    return PRICE;
  }

  // INSERT / Create
  async insert_account(account) {
    return account.save();
  }

  async insert_user(user) {
    return user.save();
  }

  async insert_quote(quote) {
    return quote.save();
  }

  // UPDATE
  async update_account(username, account) {
    return Account.findOneAndUpdate({ username }, account, {
      new: true,
    }).exec();
  }

  async update_user(username, user) {
    return User.findOneAndUpdate({ username }, user, {
      new: true,
    }).exec();
  }

  async update_quote(username, quote_id, quote) {
    return Quote.findOneAndUpdate({ username, quote_id }, quote, {
      new: true,
    }).exec();
  }
}

module.exports = Database;
