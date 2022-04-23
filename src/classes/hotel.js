import Customer from './customer.js'

class Hotel {
    constructor(customers, rooms, bookings) {
    this.customers = customers
    this.rooms = rooms
    this.bookings = bookings
    this.allCustomers = []
    }
    
    getCustomers() {
        return this.customers
    }
    getBookings() {
        return this.bookings
    }
    getRooms() {
        return this.rooms
    }
    customerBookings(currentCustomer) {
        let passBookings = this.getBookings()
        currentCustomer.updateBookings(passBookings)
    }
    customerRooms(currentCustomer) {
        let rooms = this.getRooms()
        currentCustomer.updateRooms(rooms)
    }
    generateCustomers() {
        this.customers.forEach(customer => {
            this.allCustomers.push(new Customer(customer.id, customer.name))
        })
    }
}

export default Hotel;