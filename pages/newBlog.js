import React from "react";
import styles from "../styles/NewBlog.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchposts } from "../store/actions/postAction";
import {useRouter} from 'next/router'
export default function newBlog() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.post);
  const router =useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    dispatch(fetchposts(value));
        router.push('/');
    //console.log(blogs);
  };
  return (
    <div className={styles.createblog}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="subtitle">Subtitle</label>
        <input type="text" name="subtitle" id="subtitle" />
        <label htmlFor="email">Body</label>
        <textarea type="text" name="body" id="body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
