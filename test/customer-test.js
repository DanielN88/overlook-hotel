import chai from 'chai';
const expect = chai.expect;
import { customers, rooms, bookings, updatedBookings } from './sampleData.js'
import Customer from '../src/classes/customer.js'
import Hotel from '../src/classes/hotel.js'

describe('Customer', () => {
    let customer;
    let hotel;
    let calendar

    beforeEach(() => {
        customer = new Customer(1, "Leatha Ullrich")
        hotel = new Hotel(customers, rooms, bookings)
        calendar = "04-25-2022"
    });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should store an id', () => {
    expect(customer.id).to.equal(1);
  });

  it('should store a name', () => {
    expect(customer.name).to.equal("Leatha Ullrich");
  });

  it('should have an empty array to store user bookings', () => {
    expect(customer.userBookings).to.be.an("array");
  });

  it('should have an empty array to store user rooms', () => {
    expect(customer.userRooms).to.be.an("array");
  });

  it('should return all user specific bookings', () => {
    expect(customer.updateBookings(bookings)).to.deep.equal( [{
        id: '5fwrgu4i7k55hl6t8',
        userID: 1,
        date: '2022/02/05',
        roomNumber: 12
      }]);
  });

  it('should return all user specific rooms', () => {
      customer.updateBookings(bookings)
    expect(customer.updateRooms(rooms)).to.deep.equal( [     {
        "number": 12,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "twin",
        "numBeds": 2,
        "costPerNight": 172.09
        }]);
  });
  
  it('should return total cost for all users booked rooms', () => {
    customer.updateBookings(bookings)
    customer.updateRooms(rooms)
  expect(customer.calculateTotal()).to.equal("172.09");
});

it('Should filter all available rooms by date', () => {
expect(customer.filterByDate(hotel, calendar)).to.deep.equal([
  {
    number: 12,
    roomType: 'single room',
    bidet: false,
    bedSize: 'twin',
    numBeds: 2,
    costPerNight: 172.09
  },
  {
    number: 9,
    roomType: 'single room',
    bidet: true,
    bedSize: 'queen',
    numBeds: 1,
    costPerNight: 200.39
  },
  {
    number: 23,
    roomType: 'residential suite',
    bidet: false,
    bedSize: 'queen',
    numBeds: 2,
    costPerNight: 176.36
  }
]);
});

it('should filter through any rooms available by room type', () => {
  let roomTypeDropDown = {value: "residential suite"}
  let totalRooms = customer.filterByDate(hotel, calendar)
expect(customer.filterByRoom(roomTypeDropDown, totalRooms)).to.deep.equal([ {
  number: 23,
  roomType: 'residential suite',
  bidet: false,
  bedSize: 'queen',
  numBeds: 2,
  costPerNight: 176.36
}
]);
});

});