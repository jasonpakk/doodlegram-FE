import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser } from '../../actions/user';

const submit = (update, props) => {
  props.updateUser(props.user._id, update);
  props.history.push('/');
};

const Onboard = (props) => {
  const [name, setName] = useState(props.user.name);
  // pfp
  const [gender, setGender] = useState(props.user.gender);
  const [favoriteColor, setColor] = useState(props.user.favoriteColor);
  const [home, setHome] = useState(props.user.home);
  const [birthday, setBirth] = useState(props.user.birthday);
  const [favoriteShoe, setShoe] = useState(props.user.favoriteShoe);
  const [favoriteArtist, setArtist] = useState(props.user.favoriteArtist);
  const [quote, setQuote] = useState(props.user.quote);

  return (
    <div>
      <div className="onboardScreen">
        <div className="welcomeText">
          <h1>Onboard</h1>
          <p>Please fill out the following fields to complete your Doodlegram profile!</p>
          <input type="text" onChange={(e) => setName(e.target.value)} placeholder="😀 Name (ex: Bob Ross)" />
          <input type="text" onChange={(e) => setGender(e.target.value)} placeholder="👤 Gender (ex: Male)" />
          <input type="text" onChange={(e) => setColor(e.target.value)} placeholder="🎨 Favorite Color (ex: Purple)" />
          <input type="text" onChange={(e) => setHome(e.target.value)} placeholder="📍 Home (ex: Seattle, WA)" />
          <input type="text" onChange={(e) => setBirth(e.target.value)} placeholder="🎂 Birthday (ex: 1/01/01)" />
          <input type="text" onChange={(e) => setShoe(e.target.value)} placeholder="👟 Favorite Shoe (ex: Adidas)" />
          <input type="text" onChange={(e) => setArtist(e.target.value)} placeholder="🎧 Favorite Artist (ex: Bruno Mars)" />
          <textarea type="text" onChange={(e) => setQuote(e.target.value)} placeholder='💬 Favorite Quote (ex: "Life is like a box of chocolates" -Forrest Gump)' />

          <button type="submit"
            onClick={() => submit({
              name, gender, favoriteColor, home, birthday, favoriteShoe, favoriteArtist, quote,
            }, props)}
          >Join
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  user: reduxState.auth.userObject.user,
});

export default withRouter(connect(mapStateToProps, { updateUser })(Onboard));
