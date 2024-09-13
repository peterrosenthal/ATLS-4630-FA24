// first... whithout classes
const rooms = [
  {
    name: '104',
    capacity: 30,
    numWhiteboards: 3,
  },
  {
    name: 'BTU',
    capacity: 30,
    numWhiteboards: 2,
  },
];

function printRoomInfo(room) {
  console.log(`Hello, I am room "${room.name}"! I can hold ${room.capacity} people. And I have ${room.numWhiteboards} whiteboards.`);
}

rooms.forEach(printRoomInfo);

// second, same thing but with classes
class Room {
  constructor(roomName, roomCapacity, numberOfWhiteboards) {
    this.name = roomName;
    this.capacity = roomCapacity;
    this.numWhiteboards = numberOfWhiteboards;
  }

  printRoomInfo() {
    console.log(`Hello, I am room "${this.name}"! I can hold ${this.capacity} people. And I have ${this.numWhiteboards} whiteboards.`);
  }
}

const classrooms = [
  new Room('104', 30, 3),
  new Room ('BTU', 30, 2),
];

classrooms.forEach(room => room.printRoomInfo());
