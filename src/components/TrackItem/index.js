/* eslint-disable jsx-a11y/control-has-associated-label */
import {RiDeleteBin7Line} from 'react-icons/ri'
import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  return (
    <li className="track-item">
      <img className="track-img" src={imageUrl} alt="track" />
      <div className="name-genre-container">
        <p className="name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={() => deleteTrack(id)}
          data-testid="delete"
        >
          <RiDeleteBin7Line color="#fff" size={20} />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
