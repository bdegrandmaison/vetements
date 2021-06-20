import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
// import { CURRENT_USER_QUERY } from './User';

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

// Autre solution pour update le cache
function update(cache, payload) {
  cache.evict(
    // {
    //   id: 'ROOT_QUERY',
    //   field: 'User.cart',
    //   args: { id: payload.data.deleteCartItem.id },
    // }
    cache.identify(payload.data.deleteCartItem)
  );
}
// ou encore on peut utiliser InMemoryCaching, cache.readQuery et cache.writeQuery

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <BigButton
      type="button"
      onClick={removeFromCart}
      disabled={loading}
      title="Enlever du panier"
    >
      &times;
    </BigButton>
  );
}

RemoveFromCart.propTypes = {
  id: PropTypes.string,
};
