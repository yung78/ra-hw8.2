import useJsonFetch from './useJsonFetch';

export default function Data({ url }) {
  const opts = 'data'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <div className='data'>
      Data
      <div>data: {JSON.stringify(data) || 'undefined'}</div>
      <div>error: {error?.toString() || 'undefined'}</div>
      <div>loading: {loading?.toString()}</div>
    </div>
  );
}
