import * as assert from 'assert';
import { joinPath, loadSnippets } from '../../../helper';

const typescriptSnippetsDir = joinPath(__dirname, 'snippets/typescript');

const expectedUseFetchSnippet = {
  prefix: 'useFetch',
  body: [
    'const useFetch = (url: string): [any, boolean, Error | null] => {',
    '  const [data, setData] = useState<any>(null);',
    '  const [loading, setLoading] = useState<boolean>(true);',
    '  const [error, setError] = useState<Error | null>(null);',
    '',
    '  useEffect(() => {',
    '    fetch(url)',
    '      .then(response => response.json())',
    '      .then(data => {',
    '        setData(data);',
    '        setLoading(false);',
    '      })',
    '      .catch(error => {',
    '        setError(error);',
    '        setLoading(false);',
    '      });',
    '  }, [url]);',
    '',
    '  return [data, loading, error];',
    '};'
  ],
  description: 'A custom hook for fetching data from a URL in TypeScript.'
};

describe('TypeScript useFetch Snippet Tests', () => {
  it('should load the TypeScript useFetch snippet correctly', () => {
    const snippets = loadSnippets(typescriptSnippetsDir);

    assert.deepStrictEqual(snippets['useFetch'], expectedUseFetchSnippet, 'TypeScript useFetch snippet did not load correctly');
  });
});
