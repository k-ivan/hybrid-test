export function uid() {
  return Math.random().toString(36).substr(2, 9);
}

export function commentsLength(comments) {
  return comments.reduce((acc, comment) => {
    acc++;
    if (comment.children.length) {
      acc += commentsLength(comment.children);
    }
    return acc;
  }, 0);
}

export function throttle(fn, wait) {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}
