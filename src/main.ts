import sourceMapSupport from 'source-map-support';
import nearley from 'nearley';
import grammar from './grammar';

sourceMapSupport.install();

export default (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  parser.feed(input);
  return parser.results;
};
