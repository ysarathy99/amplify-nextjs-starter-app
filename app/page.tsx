import Image from "next/image";
import styles from "./page.module.css";
import xNLogo from "./img/xNeuralsLogo.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Hello, Welcome to xNeurals! </p>
        <Image
          className={styles.logo}
          src={xNLogo}
          alt="xNeurals Logo"
          width={280}
          height={167}
          priority
        />
      </div>
      <div className={styles.description}>
        <p>
          Our Unique Service Lets you explore Your Mental Health by Visualizing
          Dreams!
        </p>
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.xneurals.ai/vfx-animation"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Samples <span>-&gt;</span>
          </h2>
          <p>Top selection from our Community of Creators</p>
        </a>

        <a
          href="https://www.xneurals.ai/vfx-animation"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Quickstart <span>-&gt;</span>
          </h2>
          <p>Follow a tutorial to build a sample animation</p>
        </a>

        <a
          href="https://www.xneurals.ai/contact-3"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Training <span>-&gt;</span>
          </h2>
          <p>Take a 6 week course in Voice Over and AI Image Creation</p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Team <span>-&gt;</span>
          </h2>
          <p>Get to know this World Class Team</p>
        </a>
      </div>
    </main>
  );
}
