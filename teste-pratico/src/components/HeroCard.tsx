import "@/styles/commonComponents.css";
import Image from "next/image";
import { Character } from "@/DTOS/api.dto";

export default function HeroCard(props: Character) {
  const { id, name, thumbnail } = props;
  console.log(thumbnail);

  return (
    <article key={id} className="heroCard">
      <div className="heroTitle">
        <h1>{name}</h1>
      </div>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`Foto ${name}`}
        className="fotoHero"
        width={200}
        height={150}
      />
    </article>
  );
}
