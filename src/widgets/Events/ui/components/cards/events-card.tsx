import styles from "./events-card.module.css";
import clsx from "clsx";

type EventsCardProps = {
  frontImageUrl: string;
  backImageUrl: string;
  url: string;
};

const EventsCard: React.FC<EventsCardProps> = ({ frontImageUrl, backImageUrl, url }) => {
  return (
    <a href={url} target="/">
      <div className={clsx(styles.flip, "w-[240px] md:w-[300px] lg:w-[360px] cursor-pointer")}>
        <div className={styles["flip-content"]}>
          <div className={styles["flip-front"]}>
            <img
              src={frontImageUrl}
              alt="Front Side"
              width={300}
              height={375}
            />
          </div>
          <div className={styles["flip-back"]}>
            <img
              src={backImageUrl}
              alt="Back Side"
              width={300}
              height={375}
            />
          </div>
        </div>
      </div>

    </a>

  );
};

export default EventsCard;
