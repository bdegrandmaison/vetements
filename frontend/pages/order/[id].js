import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import DisplayError from '../../components/DisplayError';
import OrderStyles from '../../components/styles/OrderStyles';
import formatMoney from '../../lib/formatMoney';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Chargement</p>;
  if (error) return <DisplayError error={error} />;

  const { order } = data;

  return (
    <OrderStyles>
      <Head>
        <title>Vetements - Commande n° {order.id}</title>
      </Head>
      <p>
        <span>Commande n°:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Référence:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Total</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Nombre d'articles:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            <img src={item.photo.image.publicUrlTransformed} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Quantité: {item.quantity}</p>
              <p>L'unité à {formatMoney(item.price)}</p>
              <p>Montant total: {formatMoney(item.price * item.quantity)}</p>
              <p>
                <u>Description:</u>
                {` ${item.description}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}

SingleOrderPage.propTypes = {
  query: PropTypes.shape({
    id: PropTypes.string,
  }),
};
