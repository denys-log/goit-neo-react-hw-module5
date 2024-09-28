import { useParams } from 'react-router-dom';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import useQuery from '../../hooks/use-query';

export default function MovieReviews() {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useQuery(`/movie/${movieId}/reviews`);

  return (
    <QueryHandler isLoading={isLoading} isError={isError}>
      <ul>
        {data?.results.length > 0 ? (
          data.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>No reviews yet</p>
        )}
      </ul>
    </QueryHandler>
  );
}
