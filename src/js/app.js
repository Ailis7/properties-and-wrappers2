// TODO: write your code here

export default function printSkill(char) {
  const { special } = char;
  const skills = [];
  special.forEach((e) => {
    const { description = 'Описание недоступно' } = e;
    if (e.description !== description) e.description = description;
    skills.push(e);
  });
  return skills;
}

const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

console.log(JSON.stringify(printSkill(char)));
