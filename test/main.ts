import { expect } from 'chai';
import parse from '../src/main';

describe('parse', () => {
  it('parses a simple equation', () => {
    const equation = parse('Al2(SO4)3+Ca(OH)2->Al(OH)3+CaSO4');
    expect(equation).to.deep.equal({
      lhs: {
        terms: [
          {
            coefficient: 1,
            elements: [
              {
                symbol: 'Al',
                subscript: 2,
              },
            ],
            subgroup: {
              elements: [
                {
                  symbol: 'S',
                  subscript: 1,
                },
                {
                  symbol: 'O',
                  subscript: 4,
                },
              ],
              subscript: 3,
            },
          },
          {
            coefficient: 1,
            elements: [
              {
                symbol: 'Ca',
                subscript: 1,
              },
            ],
            subgroup: {
              elements: [
                {
                  symbol: 'O',
                  subscript: 1,
                },
                {
                  symbol: 'H',
                  subscript: 1,
                },
              ],
              subscript: 2,
            },
          },
        ],
      },
      rhs: {
        terms: [
          {
            coefficient: 1,
            elements: [
              {
                symbol: 'Al',
                subscript: 1,
              },
            ],
            subgroup: {
              elements: [
                {
                  symbol: 'O',
                  subscript: 1,
                },
                {
                  symbol: 'H',
                  subscript: 1,
                },
              ],
              subscript: 3,
            },
          },
          {
            coefficient: 1,
            elements: [
              {
                symbol: 'Ca',
                subscript: 1,
              },
              {
                symbol: 'S',
                subscript: 1,
              },
              {
                symbol: 'O',
                subscript: 4,
              },
            ],
            subgroup: null,
          },
        ],
      },
    });
  });
});
