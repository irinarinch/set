import Character from '../character';

test('type of name', () => {
  const character = new Character('DaemonName', 'Daemon');
  character.getCharacter();

  expect.stringContaining(character.name);
});

test('length of name', () => {
  const character = new Character('DaemonNameDaemonName', 'Daemon');

  function getError() {
    character.getCharacter();
  }

  expect(getError).toThrow(new Error('Invalid name'));
});

test('match an array of types', () => {
  const character = new Character('DaemonName', 'DaemonDaemon');

  function getError() {
    character.getCharacter();
  }

  expect(getError).toThrow(new Error('Incorrect type'));
});
