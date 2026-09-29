import fs from 'fs';
import vm from 'vm';

const html = fs.readFileSync('index.html', 'utf8');

const sTag = '<script type="module">';
const sIdx = html.indexOf(sTag);
const eIdx = html.lastIndexOf('</script>');

if (sIdx === -1 || eIdx === -1) {
  console.error('Script tags not found');
  process.exit(1);
}

const scriptCode = html.substring(sIdx + sTag.length, eIdx);
console.log('Script code length:', scriptCode.length);

fs.writeFileSync('temp_script.mjs', scriptCode);

try {
  // Use vm.SourceTextModule or check syntax using acorn/esprima/ts
  const ts = (await import('file:///C:/Users/sidsm/PROJECTS/components/comp/next-app/node_modules/typescript/lib/typescript.js')).default;
  const sourceFile = ts.createSourceFile('temp_script.mjs', scriptCode, ts.ScriptTarget.ES2022, true);
  const diagnostics = sourceFile.parseDiagnostics || [];
  if (diagnostics.length > 0) {
    console.error('Syntax errors found:', diagnostics.length);
    diagnostics.slice(0, 5).forEach(d => {
      console.error(d.messageText, 'at line:', sourceFile.getLineAndCharacterOfPosition(d.start));
    });
  } else {
    console.log('Script syntax is 100% VALID! No syntax errors.');
  }
} catch (e) {
  console.error('Validation error:', e);
}
