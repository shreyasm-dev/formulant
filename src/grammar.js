// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "equation$string$1", "symbols": [{"literal":"-"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "equation", "symbols": ["side", "equation$string$1", "side"], "postprocess":  (d) => ({
          type: 'equation',
          lhs: d[0],
          rhs: d[2],
        }) },
    {"name": "side$ebnf$1", "symbols": []},
    {"name": "side$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}, "term"]},
    {"name": "side$ebnf$1", "symbols": ["side$ebnf$1", "side$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "side", "symbols": ["term", "side$ebnf$1"], "postprocess":  (d) => ({
          type: 'side',
          terms: d.map((r, i) => i === 0 ? r : r.map((t) => t[1])).flat(),
        }) },
    {"name": "term$ebnf$1", "symbols": ["number"], "postprocess": id},
    {"name": "term$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term$ebnf$2$subexpression$1$ebnf$1", "symbols": ["number"], "postprocess": id},
    {"name": "term$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term$ebnf$2$subexpression$1", "symbols": ["element", "term$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "term$ebnf$2", "symbols": ["term$ebnf$2$subexpression$1"]},
    {"name": "term$ebnf$2$subexpression$2$ebnf$1", "symbols": ["number"], "postprocess": id},
    {"name": "term$ebnf$2$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term$ebnf$2$subexpression$2", "symbols": ["element", "term$ebnf$2$subexpression$2$ebnf$1"]},
    {"name": "term$ebnf$2", "symbols": ["term$ebnf$2", "term$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "term$ebnf$3$subexpression$1$ebnf$1", "symbols": ["number"], "postprocess": id},
    {"name": "term$ebnf$3$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term$ebnf$3$subexpression$1", "symbols": [{"literal":"("}, "term", {"literal":")"}, "term$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "term$ebnf$3", "symbols": ["term$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "term$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "term", "symbols": ["term$ebnf$1", "term$ebnf$2", "term$ebnf$3"], "postprocess":  (d) => ({
          type: 'piece',
          number: d[0] ?? 1,
          elements: d[1].map((e) => ({
            type: 'element',
            number: e[1] ?? 1,
            element: e[0],
          })),
          subgroup: (d[2] ?? [])[1],
        }) },
    {"name": "element$ebnf$1", "symbols": [/[a-z]/], "postprocess": id},
    {"name": "element$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "element", "symbols": [/[A-Z]/, "element$ebnf$1"], "postprocess": (d) => d.join('')},
    {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": (d) => parseInt(d[0].join(''), 10)}
]
  , ParserStart: "equation"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
