import useJsonFetch from './useJsonFetch';

export default function Loading({ url }) {
  const opts = 'loading'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <div className='loading'>
      Loading:
      <div>data: {JSON.stringify(data) || 'undefined'}</div>
      <div>error: {error?.toString() || 'undefined'}</div>
      <div>loading: {loading?.toString()}</div>
    </div>
  );
}
