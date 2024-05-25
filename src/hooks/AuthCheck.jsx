import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();
  
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return <div>redirecting...</div>;
  }

  return children;
};

AuthCheck.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthCheck;