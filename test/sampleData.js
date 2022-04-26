let customers = [
  {
    id: 1,
    name: "Leatha Ullrich",
  },
  {
    id: 2,
    name: "Rocio Schuster",
  },
  {
    id: 3,
    name: "Kelvin Schiller",
  },
];

let rooms = [
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 172.09,
  },
  {
    number: 9,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 200.39,
  },
  {
    number: 23,
    roomType: "residential suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 176.36,
  },
];

let bookings = [
  {
    id: "5fwrgu4i7k55hl6t8",
    userID: 1,
    date: "2022/02/05",
    roomNumber: 12,
  },
  {
    id: "5fwrgu4i7k55hl6vw",
    userID: 2,
    date: "2022/02/11",
    roomNumber: 9,
  },
  {
    id: "5fwrgu4i7k55hl6v3",
    userID: 3,
    date: "2022/02/07",
    roomNumber: 23,
  },
];

let updatedBookings = [
  {
    id: "5fwrgu4i7k55hl6t8",
    userID: 1,
    date: "2022/02/05",
    roomNumber: 12,
  },
  {
    id: "5fwrgu4i7k55hl6vw",
    userID: 2,
    date: "2022/02/11",
    roomNumber: 9,
  },
  {
    id: "5fwrgu4i7k55hl6v3",
    userID: 3,
    date: "2022/02/07",
    roomNumber: 23,
  },
  {
    id: "5fwrgu4i7k55h16x8",
    userID: 1,
    date: "2022/01/11",
    roomNumber: 20,
  },
];

export { rooms, customers, bookings, updatedBookings };
