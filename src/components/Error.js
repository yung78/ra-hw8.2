import useJsonFetch from './useJsonFetch';

export default function Error_({ url }) {
  const opts = 'error'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <div className='error'>
      Error:
      <div>data: {JSON.stringify(data) || 'undefined'}</div>
      <div>error: {error?.toString() || 'undefined'}</div>
      <div>loading: {loading?.toString()}</div>
    </div>
  );
}
