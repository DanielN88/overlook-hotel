import chai from 'chai';
const expect = chai.expect;
import { customers, rooms, bookings } from './sampleData.js'
import Hotel from '../src/classes/hotel.js'

describe('Hotel', () => {
    let hotel;

    beforeEach(() => {
        hotel = new Hotel(customers, rooms, bookings)
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

  it('should store all bookings', () => {
    hotel.generateCustomers()
    expect(hotel.allCustomers.length).to.deep.equal(3);
  });

});