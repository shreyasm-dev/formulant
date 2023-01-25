import sourceMapSupport from 'source-map-support';
import nearley from 'nearley';
import grammar from './grammar';

sourceMapSupport.install();

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
parser.feed('Al2(SO4)3+Ca(OH)2->Al(OH)3+CaSO4');
console.log(JSON.stringify(parser.results, null, 2));
