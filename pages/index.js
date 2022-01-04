import styles from "../styles/Home.module.css";
import { BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const { blogs } = useSelector((state) => state.post);

  return (
    <div>
      <header className={styles.header}>
        <span className={styles.allposts}>All Posts</span>
        <span className={styles.search}>
          <BsSearch />
        </span>
      </header>
      <div className={styles.container}>
        {blogs.map((data, index) => {
          return (
            <div key={index}>
              <h1>{data.title}</h1>
              <h3>{data.subtitle}</h3>
              <p>{data.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
