import MovieList from '../../components/MovieList/MovieList';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import useQuery from '../../hooks/use-query';

export default function HomePage() {
  const { data, isLoading, isError } = useQuery(
    `/trending/movie/day?language=en-US`
  );

  return (
    <div>
      <h2>Trending today</h2>
      <QueryHandler isLoading={isLoading} isError={isError}>
        <MovieList movies={data?.results} state="/" />
      </QueryHandler>
    </div>
  );
}
