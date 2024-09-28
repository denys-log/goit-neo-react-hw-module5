import { useParams } from 'react-router-dom';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import useQuery from '../../hooks/use-query';

export default function MovieCast() {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useQuery(`/movie/${movieId}/credits`);

  return (
    <QueryHandler isLoading={isLoading} isError={isError}>
      <ul>
        {data?.cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}.jpg`}
                alt=""
                width="100"
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </QueryHandler>
  );
}
