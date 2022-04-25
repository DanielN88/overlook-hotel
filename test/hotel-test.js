import chai from 'chai';
const expect = chai.expect;
import { customers, rooms, bookings, updatedBookings } from './sampleData.js'
import Hotel from '../src/classes/hotel.js'
import Customer from '../src/classes/customer.js'

describe('Hotel', () => {
    let hotel;
    let currentUser

    beforeEach(() => {
        hotel = new Hotel(customers, rooms, bookings)
        currentUser = new Customer(1, "Leatha Ullrich")
    });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be a array', () => {
    expect(hotel.customers).to.be.a('array');
  });

  it('should hold a customer', () => {
    expect(hotel.getCustomers()[0]).to.deep.equal( {
        "id": 1,
        "name": "Leatha Ullrich"
        });
  });

  it('should store all customers', () => {
    expect(hotel.customers).to.deep.equal(customers);
  });

  it('should store all rooms', () => {
    expect(hotel.rooms).to.deep.equal(rooms);
  });

  it('should store all bookings', () => {
    expect(hotel.bookings).to.deep.equal(bookings);
  });

  it('should return all customers', () => {
    expect(hotel.getCustomers()).to.deep.equal(hotel.customers);
  });

  it('should return all rooms', () => {
    expect(hotel.getRooms()).to.deep.equal(hotel.rooms);
  });
  
  it('should return all bookings', () => {
    expect(hotel.getBookings()).to.deep.equal(hotel.bookings);
  });

  it('should store all bookings', () => {
    hotel.generateCustomers()
    expect(hotel.allCustomers.length).to.deep.equal(3);
    expect(hotel.allCustomers[0]).to.be.an.instanceOf(Customer)
  });

  it('should pass updated bookings to update a single customers bookings', () => {
    hotel.generateCustomers()
    hotel.singleCustomerBookingUpdate(currentUser)
    expect(currentUser.updateBookings(updatedBookings)).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6t8',
        userID: 1,
        date: '2022/02/05',
        roomNumber: 12
      },
      {
        id: '5fwrgu4i7k55h16x8',
        userID: 1,
        date: '2022/01/11',
        roomNumber: 20
      }
    ]);
  });

  it('should pass the current customer to update bookings', () => {
    hotel.generateCustomers()
    hotel.customerBookings(currentUser)
    expect(currentUser.userBookings).to.deep.equal([
      {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2022/02/05",
      "roomNumber": 12
      }
    ]);
  });

  it('should pass the current customer to update rooms', () => {
    hotel.generateCustomers()
    hotel.customerBookings(currentUser)
    hotel.customerRooms(currentUser)
    expect(currentUser.userRooms).to.deep.equal([
      {
      "number": 12,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "twin",
      "numBeds": 2,
      "costPerNight": 172.09
      }
    ]);
  });

  it('should generate an array of all customers to store in hotel class', () => {
    expect(hotel.allCustomers).to.deep.equal([]);
    hotel.generateCustomers()
    expect(hotel.allCustomers.length).to.deep.equal(3);
    expect(hotel.allCustomers[0]).to.be.an.instanceOf(Customer);
    expect(hotel.allCustomers[1]).to.be.an.instanceOf(Customer);
    expect(hotel.allCustomers[2]).to.be.an.instanceOf(Customer);
  });

});