import styles from "@/styles/commonComponents.module.scss";
import Image from "next/image";
import { Character } from "@/DTOS/api.dto";

export default function HeroCard(props: Character) {
  const { id, name, thumbnail } = props;

  return (
    <article key={id} className={styles.heroCard}>
      <div className={styles.heroTitle}>
        <h1>{name}</h1>
      </div>
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={`Foto ${name}`}
          className={styles.fotoHero}
          width={200}
          height={150}
        />
    </article>
  );
}
