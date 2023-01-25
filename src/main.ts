/* eslint-disable @typescript-eslint/no-explicit-any */
import sourceMapSupport from 'source-map-support';
import nearley from 'nearley';
import grammar from './grammar';

sourceMapSupport.install();

const parse = (input: string): Equation => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(input);
  const { results } = parser;

  const equation = results[0];
  const parseSide = (side: any): Side => {
    const terms = side.terms.map((term: any) => {
      const elements = term.elements.map((element: any) => ({
        symbol: element.element,
        subscript: element.number,
      }));
      const subgroup = term.subgroup ? {
        elements: term.subgroup.elements.map((element: any) => ({
          symbol: element.element,
          subscript: element.number,
        })),
        subscript: term.subgroup.number,
      } : null;
      return {
        coefficient: term.number,
        elements,
        subgroup,
      };
    });
    return { terms };
  };

  return {
    lhs: parseSide(equation.lhs),
    rhs: parseSide(equation.rhs),
  };
};

export default parse;

export interface Equation {
  lhs: Side,
  rhs: Side,
}

export interface Side {
  terms: Term[],
}

export interface Term {
  coefficient: number,
  elements: Element[],
  subgroup: Subgroup | null,
}

export interface Element {
  symbol: string,
  subscript: number,
}

export interface Subgroup {
  elements: Element[],
  subscript: number,
}
