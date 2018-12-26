import React from 'react'
import { PropTypes } from 'prop-types'
import './ShowDetails.css'

const ShowDetails = ({
  imdb_id,
  title,
  vote_average,
  release_date,
  runtime,
  overview
}) => {
  return (
    <div className="showDetails">
      <div>
        <a
          href={imdb_id ? 'http://www.imdb.com/title/' + imdb_id : '/'}
          target={imdb_id ? '_blank' : ''}
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <span id="rating">
          {vote_average === 10
            ? vote_average
            : parseFloat(vote_average).toFixed(1)}
        </span>
      </div>
      <span>
        {release_date
          ? new Date(release_date).getFullYear()
          : 'No Release Date'}
      </span>
      <span>{runtime} minutes</span>
      <p>{overview}</p>
    </div>
  )
}

export default ShowDetails

ShowDetails.propTypes = {
  imdb_id: PropTypes.number,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string
}

ShowDetails.defaultProps = {
  movie: {
    release_date: '1000-10-10'
  }
}
