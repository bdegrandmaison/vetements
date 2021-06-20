import PropTypes from 'prop-types';
import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useCart } from '../lib/cartState';

export default function Item({ product }) {
  const { openCart } = useCart();
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
        id={product?.photo?.id}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: {
              id: product.id,
            },
          }}
        >
          Modifier 🖍
        </Link>
        <AddToCart id={product.id} />
        <DeleteProduct id={product.id} photo={product?.photo?.id}>
          Supprimer 🗑{' '}
        </DeleteProduct>
      </div>
    </ItemStyles>
  );
}

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({
        publicUrlTransformed: PropTypes.string,
      }),
    }),
    price: PropTypes.number,
  }),
};
