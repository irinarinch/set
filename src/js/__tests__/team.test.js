import Character from '../character';
import Team from '../team';

const character = new Character('Daemon', 'Daemon');
const character2 = new Character('Daemon2', 'Daemon');

test('method add get error', () => {
  const team = new Team();

  function getError() {
    team.add(character);
    team.add(character);
  }

  expect(getError).toThrow(new Error('duplicate'));
});

test('method add without error', () => {
  const team = new Team();

  team.add(character);
  team.add(character2);

  expect(team.members.size).toBe(2);
});

test('method addAll', () => {
  const team = new Team();

  team.addAll(character, character, character2, character2, character);

  expect(team.members.size).toBe(2);
});

test('method toArray', () => {
  const team = new Team();
  const result = [
    {
      name: 'Daemon2',
      type: 'Daemon',
    },
    {
      name: 'Daemon',
      type: 'Daemon',
    },
  ];

  team.addAll(character2, character);

  expect(team.toArray()).toEqual(result);
});
