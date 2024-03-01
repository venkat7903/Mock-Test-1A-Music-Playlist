import {Component} from 'react'
import {IoSearch} from 'react-icons/io5'

import TrackItem from '../TrackItem'

import './index.css'

class Music extends Component {
  constructor(props) {
    super(props)
    this.state = {trackList: props.initialTracksList, searchInput: ''}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteTrack = id => {
    const {trackList} = this.state
    const filteredList = trackList.filter(each => each.id !== id)
    this.setState({trackList: filteredList})
  }

  render() {
    const {trackList, searchInput} = this.state
    const searchList = trackList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="music-app-container">
        <div className="singer-container">
          <h1>Ed Sheeran</h1>
          <p>Singer</p>
        </div>
        <div className="songs-list-container">
          <div className="songs-list-search-container">
            <h1 className="list-title">Songs Playlist</h1>
            <div className="search-container">
              <input
                value={searchInput}
                onChange={this.onChangeSearchInput}
                type="search"
                placeholder="Search"
              />
              <IoSearch color="#fff" />
            </div>
          </div>
          {searchList.length > 0 ? (
            <ul className="tracks-list">
              {searchList.map(each => (
                <TrackItem
                  key={each.id}
                  trackDetails={each}
                  deleteTrack={this.deleteTrack}
                />
              ))}
            </ul>
          ) : (
            <p className="no-songs-desc">No Songs Found</p>
          )}
        </div>
      </div>
    )
  }
}

export default Music
