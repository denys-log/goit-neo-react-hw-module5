import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import MovieList from '../../components/MovieList/MovieList';
import useQuery from '../../hooks/use-query';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? undefined;
  const [inputValue, setInputValue] = useState('');
  const { data, isLoading, isError } = useQuery(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    { enabled: !!query }
  );

  const handleClick = () => {
    setSearchParams({ query: inputValue });
    setInputValue('');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
      <QueryHandler isLoading={isLoading} isError={isError}>
        <MovieList movies={data?.results} state={`/movies?query=${query}`} />
      </QueryHandler>
    </div>
  );
}
