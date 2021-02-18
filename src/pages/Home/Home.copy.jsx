// React
import React, { useRef, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Router
import { Link, useHistory } from 'react-router-dom';
// Selectors
import selectors from '../../store/mokup/selectors';
// Actions
import mokupActions from '../../store/mokup/actions';
// Auth
import { useAuth } from '../../providers/Auth';
// Components
import { HomeContainer, HomeTitle } from './styles';

const HomeCopy = () => {
  const dispatch = useDispatch();
  const mokup = useSelector((state) => selectors.selectMokup(state));
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  console.log({ mokup });

  const deAuthenticate = (event) => {
    event.preventDefault();
    logout();
    history.push('/');
  };

  useEffect(() => {
    dispatch(mokupActions.load());
  }, [dispatch]);

  return (
    <HomeContainer ref={sectionRef}>
      <HomeTitle>Hello stranger!</HomeTitle>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </HomeContainer>
  );
};

export default HomeCopy;
