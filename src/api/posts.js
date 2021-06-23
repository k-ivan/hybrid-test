const KEY = 'posts';

export function getPosts() {
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch(err) {
    throw new Error(err?.message);
  }
}

export function getPostBySlug(slug) {
  const posts = getPosts();
  return posts.find(post => post.slug === slug);
}

export function addPost(data) {
  const posts = getPosts();
  posts.unshift(data);
  localStorage.setItem(KEY, JSON.stringify(posts));
  return posts;
}

export function editPost(id, data) {
  const posts = getPosts();
  let post = posts.find(post => post.id === id)
  if (post) {
    Object.assign(post, data);
  }
  localStorage.setItem(KEY, JSON.stringify(posts));
  return posts;
}

export function removePosts(ids = []) {
  const posts = getPosts();
  const filteredPosts = posts.filter(post => !ids.includes(post.id))
  localStorage.setItem(KEY, JSON.stringify(filteredPosts));
  return filteredPosts;
}

export function addComment({
  slug,
  parentId = null,
  comment
}) {
  const posts = getPosts();
  const postIndex = posts.findIndex(post => post.slug === slug);

  const add = (comments, comment, parentId) => {
    if (!parentId) {
      return comments.push(comment);
    }
    for(let item of comments) {
      if (item.id === parentId) {
        return item.children.push(comment);
      }
      if (item.children.length) {
        return add(item.children, comment, parentId)
      }
    }
  };

  add(
    posts[postIndex].comments,
    comment,
    parentId
  );

  localStorage.setItem(KEY, JSON.stringify(posts));
  return posts[postIndex].comments;
}

export function removeComment(slug, id) {
  const posts = getPosts();
  const postIndex = posts.findIndex(post => post.slug === slug);

  const del = (comments, id) => {
    const index = comments.findIndex(comment => comment.id === id);
    if (index > -1) {
      return comments.splice(index, 1);
    }

    for(let item of comments) {
      if (item.children.length) {
        return del(item.children, id)
      }
    }
  };

  del(posts[postIndex].comments, id);
  localStorage.setItem(KEY, JSON.stringify(posts));
  return posts[postIndex].comments;
}
