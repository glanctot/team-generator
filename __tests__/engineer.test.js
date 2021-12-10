const Engineer = require('../lib/Engineer.js');

test('can set github from constructor', () => {
    const github = 'glanctot';
    const name = 'greg';
    const id = 489;
    const email = 'greg@umn.edu';
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.github).toBe(github);
})