import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      // On retourne le cache ou false pour faire une requete
      const { skip, first } = args;
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // Lorsqu'il n'y a pas 2 objets par page pour la derniere page
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false;
      }
      if (items.length) {
        return items;
      }
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
