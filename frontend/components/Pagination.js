import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import DisplayError from './DisplayError';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);

  if (loading) return 'Chargement en cours';
  if (error) return <DisplayError error={error} />;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Vetements - Page {page} sur {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page == 1}>↩ Précédente</a>
      </Link>
      <p>
        Page {page} sur {pageCount}
      </p>
      <p> {count} articles</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Suivante ↪ </a>
      </Link>
    </PaginationStyles>
  );
}

Pagination.propTypes = {
  page: PropTypes.any,
};
