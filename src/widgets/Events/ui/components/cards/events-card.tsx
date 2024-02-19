import styles from "./events-card.module.css";
import clsx from "clsx";


const EventsCard = () => {
  return (
    <div
      className={clsx(styles["flip"], "w-[240px] md:w-[300px] lg:w-[360px]")}
    >
      <div className={styles["flip-content"]}>
        <div className={styles["flip-front"]}>
          <img
            src="/images/event-1.png"
            alt="Event 1 (Front Side)"
            width={300}
            height={375}
          />
        </div>
        <div className={styles["flip-back"]}>
          <img
            src="/images/event-1.png"
            alt="Event 1 (Back Side)"
            width={300}
            height={375}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
