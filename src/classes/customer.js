import Hotel from './hotel.js'

class Customer {
    constructor(id, name) {
    this.id = id
    this.name = name
    this.userBookings = []
    this.userRooms = []
    }
    
    updateBookings(passBookings) {
        let newUserBookings = passBookings.filter((booking) => {
            return booking.userID === this.id
        })
        this.userBookings = newUserBookings
        return newUserBookings
    }

    updateRooms(rooms) {
        rooms.forEach((room) => {
            this.userBookings.forEach(booking => {
                if (room.number === booking.roomNumber) {
                    this.userRooms.push(room)
                }
            })
        })
        return this.userRooms
    }

    calculateTotal() {
        let userTotalCost = this.userRooms.reduce((acc, room) => {
            acc += room.costPerNight
            return acc
        }, 0)
        return userTotalCost.toFixed(2)
    }
}

export default Customer;