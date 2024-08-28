import * as assert from 'assert';
import { joinPath, loadSnippets } from '../../../helper';

const javascriptSnippetsDir = joinPath(__dirname, 'snippets/javascript');

const expectedUseFetchSnippet = {
  prefix: 'useFetch',
  body: [
    'const useFetch = (url) => {',
    '  const [data, setData] = useState(null);',
    '  const [loading, setLoading] = useState(true);',
    '  const [error, setError] = useState(null);',
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
    '};',
  ],
  description: 'A custom hook for fetching data from a URL in JavaScript.',
};

describe('JavaScript useFetch Snippet Tests', () => {
  it('should load the JavaScript useFetch snippet correctly', () => {
    const snippets = loadSnippets(javascriptSnippetsDir);

    assert.deepStrictEqual(
      snippets['useFetch'],
      expectedUseFetchSnippet,
      'JavaScript useFetch snippet did not load correctly',
    );
  });
});
