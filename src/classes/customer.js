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
        this.userRooms = []
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

    filterByDate(hotel, calendar) {
        let roomsTaken = hotel.bookings.filter((booking) => {
            let formatDate = booking.date.split('/').join("-")
             return formatDate === calendar.value
         })
         let totalRooms = []
         hotel.rooms.forEach(hotelRoom => {
             totalRooms.push(hotelRoom)
         })
         roomsTaken.forEach(taken => {
            totalRooms.forEach((room, index) => {
                 if (room.number === taken.roomNumber) {
                     totalRooms.splice(index, 1)
                 }
             })
         }) 
         return totalRooms
    }

    filterByRoom(roomTypeDropdown, totalRooms) {
        if (roomTypeDropdown.value === 'choose') return
        if (roomTypeDropdown.value !== 'choose') {
           var filteredTotalRooms = totalRooms.filter(room => {
                return room.roomType === roomTypeDropdown.value
            })
        }
        return filteredTotalRooms
    }
}

export default Customer;