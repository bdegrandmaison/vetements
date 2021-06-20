import PropTypes from 'prop-types';
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  return (
    <>
      <UpdateProduct id={query.id} />
    </>
  );
}

UpdatePage.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};
