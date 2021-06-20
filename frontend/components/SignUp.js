import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import FormStyles from './styles/FormStyles';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './DisplayError';

const SIGN_UP_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: inputs,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup().catch(console.error);
    resetForm();
    console.log(data);
  }

  return (
    <FormStyles method="POST" onSubmit={handleSubmit}>
      <h2>Enregistrez vous</h2>
      <DisplayError error={error} />
      <fieldset>
        {data?.createUser && (
          <p>
            Enregistré avec {data.createUser.email} . Vous pouvez désormais vous
            connecter!
          </p>
        )}
        <label htmlFor="name">
          Nom
          <input
            type="name"
            name="name"
            placeholder="Votre nom"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">S'enregistrer</button>
      </fieldset>
    </FormStyles>
  );
}
