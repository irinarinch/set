export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getCharacter() {
    Character.types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if ((typeof this.name !== 'string') || (this.name.length > 10 || this.name.length < 2)) {
      throw new Error('Invalid name');
    }

    if (Character.types.includes(this.type)) {
      this.health = 100;
      this.level = 1;
    } else {
      throw new Error('Incorrect type');
    }
  }
}
