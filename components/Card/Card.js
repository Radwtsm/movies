import Image from "next/image";

const Card = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <Image src={props.src} alt="movie poster" width={500} height={500} />;
    </div>
  );
};

export default Card;
