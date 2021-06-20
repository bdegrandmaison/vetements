import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
      photo {
        image {
          id
        }
      }
    }
  }
`;
const DELETE_PRODUCTIMAGE_MUTATION = gql`
  mutation DELETE_PRODUCTIMAGE_MUTATION($photo: ID!) {
    deleteProductImage(id: $photo) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}
function update2(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProductImage));
}

export default function DeleteProduct({ id, photo, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: {
      id,
    },
    update,
  });

  const [deleteProductImage, { loading2 }] = useMutation(
    DELETE_PRODUCTIMAGE_MUTATION,
    {
      variables: {
        photo,
      },
      update2,
    }
  );

  return (
    <button
      type="button"
      id={id}
      photo={photo}
      disabled={loading || loading2}
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Supprimer le produit?')) {
          deleteProductImage()
            .catch((err) => alert(err.message))
            .then(deleteProduct().catch((err) => alert(err.message)));
        }
      }}
    >
      {children}
    </button>
  );
}

DeleteProduct.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  photo: PropTypes.string,
};
