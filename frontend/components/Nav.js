import Link from 'next/link';
import { useCart } from '../lib/cartState';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import CartCount from './CartCount';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">Articles</Link>
      {user && (
        <>
          <Link href="/sell">Vente</Link>
          <Link href="/account">Compte</Link>
          <Link href="/orders">Commandes</Link>
          <SignOut />
          <button type="button" onClick={openCart}>
            Panier
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Connexion | Enregistrement</Link>
        </>
      )}
    </NavStyles>
  );
}
