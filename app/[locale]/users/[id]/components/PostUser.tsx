import React from "react";
type PropsType = {
  promisePosts: Promise<PostType[]>;
};


export default async function PostUser({ promisePosts }: PropsType) {
  const posts = await promisePosts;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  });
  return content;
}
