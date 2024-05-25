import PropTypes from 'prop-types';

const Aside = ({ content }) => {
  return (
    <aside className="wrapDashboard_sidebar">
      <div className="row">
        <div className='container-fluid'>
          { content }
        </div>
      </div>
    </aside>
  );
};

Aside.propTypes = {
  content: PropTypes.node.isRequired
};

export default Aside;