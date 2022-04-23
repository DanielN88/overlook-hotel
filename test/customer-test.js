import chai from 'chai';
const expect = chai.expect;
import { customers, rooms, bookings } from './sampleData.js'
import Customer from '../src/classes/customer.js'
import Hotel from '../src/classes/hotel.js'

describe('Customer', () => {
    let customer;
    let hotel;

    beforeEach(() => {
        customer = new Customer(1, "Leatha Ullrich")
        hotel = new Hotel(customers, rooms, bookings)
    });

  it('should be a function', () => {
    expect(customer).to.be.an.instanceOf(Customer);
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

});