const allCustomers = fetch('http://localhost:3001/api/v1/customers')
    .then(response => {
       if (response.ok) {
           return response.json()
       } else {
           throw Error(response.statusText)
       }
    }).then(data => data)
    .catch(err => console.log(err))


const allRooms = fetch('http://localhost:3001/api/v1/rooms')
.then(response => {
    if (response.ok) {
        return response.json()
    } else {
        throw Error(response.statusText)
    }
}).then(data => data)
.catch(err => console.log(err))


const allBookings = fetch('http://localhost:3001/api/v1/bookings')
    .then(response => {
       if (response.ok) {
           return response.json()
       } else {
           throw Error(response.statusText)
       }
    }).then(data => data)
    .catch(err => console.log(err))



export { allCustomers, allRooms, allBookings }