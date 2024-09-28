import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import QueryHandler from '../../components/QueryHandler/QueryHandler';
import useQuery from '../../hooks/use-query';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useQuery(`/movie/${movieId}`);
  const location = useLocation();
  const [backLinkHref] = useState(location.state ?? '/');

  return (
    <div>
      <QueryHandler isLoading={isLoading} isError={isError}>
        <Link to={backLinkHref}>{`< Go back`}</Link>
        <div className="details">
          <img
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}.jpg`}
            alt=""
          />
          <div>
            <h2>{data?.title}</h2>
            <p>User score: {data?.vote_average}</p>
            <h3>Overview</h3>
            <p>{data?.overview}</p>
            <h3>Genres</h3>
            <p>{data?.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <hr />
        <h4>Additional info</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
      </QueryHandler>
      <Outlet />
    </div>
  );
}
