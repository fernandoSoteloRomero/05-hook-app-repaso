import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter, useFetch } from "../hooks";
import { PokeInfo } from "../interfaces/01-poke.interface";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading, error } = useFetch<PokeInfo>(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Informacion de pokemons</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data?.id}
          image={data?.sprites?.front_default}
          name={data?.name}
        />
      )}

      {hasError && error}

      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};
