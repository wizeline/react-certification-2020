import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VideoList from '../../components/VideoList';

//import env from "react-dotenv";

import { useAuth } from '../../providers/Auth';
import mockedYTData from "../../YT_list.json";

//const YOUTUBE_PLAYLIST_ITEMS_API = 'https://youtube.googleapis.com/youtube/v3/playlistItems?';
/*
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLBCF2DAC6FFB574DE&key=${env.YOUTUBE_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.items);
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.id} {item.etag}
            </li>
          ))}
        </ul>
      );
    }
  }
  */
function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const { items } = mockedYTData;
/*
  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }
*/
  return (
    <section ref={sectionRef}>
      <h2 className = "welcome">Welcome to the Challenge!</h2>
      {authenticated ? (
          <VideoList items={items} />
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
