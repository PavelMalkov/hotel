import React, { useEffect, useMemo, useState, useRef } from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/mymodal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../untils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";

import "../styles/styles.css";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState();

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const lastElement = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const chanchePage = (page) => {
    setPage(page);
  };

  console.log(filter);

  return (
    <div style={{ width: "800px" }}>
      <MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm btnName={"Добавить пост"} create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 15, name: "15" },
          { value: -1, name: "Показать всё" },
        ]}
      />
      {postError && <h1>Произошла ошибка {postError}</h1>}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Заголовок"}
      />
      {isPostsLoading && <h1>Загрузка</h1>}
      <div ref={lastElement} style={{ height: 20, backround: "red" }} />
      {sortedAndSearchedPosts.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
      {/* <Pagination
        totalPages={totalPages}
        page={page}
        chanchePage={chanchePage}
      /> */}
    </div>
  );
}

export default Posts;
