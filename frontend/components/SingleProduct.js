import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './DisplayError';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-content: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      price
      name
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Chargement</p>;
  if (error) return <DisplayError error={error} />;
  const { Product: item } = data; // On reçoit data.Product de GraphQl, on renomme ici pour lisibilité
  return (
    <ProductStyles>
      <Head>
        <title>Vetements | {item.name}</title>
      </Head>
      <img
        src={item.photo.image.publicUrlTransformed}
        alt={item.photo.image.altText}
      />
      <div className="details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
    </ProductStyles>
  );
}

SingleProduct.propTypes = {
  id: PropTypes.string,
};
