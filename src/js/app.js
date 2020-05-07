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
