equation -> side "->" side {% (d) => ({
  type: 'equation',
  lhs: d[0],
  rhs: d[2],
}) %}

side -> term ("+" term):* {% (d) => ({
  type: 'side',
  terms: d.map((r, i) => i === 0 ? r : r.map((t) => t[1])).flat(),
}) %}

term -> number:? (element number:?):+ ("(" term ")" number:?):? {% (d) => ({
  type: 'term',
  number: d[0] ?? 1,
  elements: d[1].map((e) => ({
    type: 'element',
    number: e[1] ?? 1,
    element: e[0],
  })),
  subgroup: (() => {
    const group = (d[2] ?? [])[1];
    if (group) group.number = d[2][3];
    return group;
  })(),
}) %}

element -> [A-Z] [a-z]:? {% (d) => d.join('') %}
number -> [0-9]:+ {% (d) => parseInt(d[0].join(''), 10) %}
