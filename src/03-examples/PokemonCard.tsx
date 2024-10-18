interface PokemonInformation {
  name?: string;
  id?: number;
  image?: string;
}

export const PokemonCard = ({ id, name, image }: PokemonInformation) => {
  return (
    <section style={{ height: 200 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imagenes */}
      <img src={image} alt={name} />
    </section>
  );
};
