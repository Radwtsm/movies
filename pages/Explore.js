import Card from "../components/Card/Card";

export async function getServerSideProps() {
  const res = await fetch(
    `https://imdb-api.com/en/API/MostPopularTVs/k_zm574nqg`
  );
  const data = await res.json();

  return { props: { data } };
}

const Explore = ({ data }) => {
  const CardElements = data.items.map((movie) => {
    return <Card key={movie.id} title={movie.title} src={movie.image} />;
  });

  return <section>{CardElements}</section>;
};

export default Explore;
