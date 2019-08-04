export const delay = time => new Promise(resolve => setTimeout(resolve, time));
/**
 *
 * @param {Array} tree 路由数据
 * @param {String} target 当前的路由
 */
export const recursionPath = (tree, target) => {
  let done = false,
    path = [];

  function traverse(tree, target) {
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (!done) {
        if (i > 0) {
          path.pop();
        }
        path.push({
          path: node.path,
          title: node.title
        });
        if (node.path === target) {
          done = true;
          return;
        } else {
          let children = node.children;
          if (children) {
            traverse(children, target);
          }
        }
      }
    }

    if (!done) {
      path.pop();
    }

    return;
  }

  traverse(tree, target);

  return path;
};
