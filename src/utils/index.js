export const delay = time => new Promise(resolve => setTimeout(resolve, time));
export const recursionPath = (data, path, count = -1, paths = []) => {
  count++;
  for (let i = 0; i < data.length; i++) {
    paths[count] = {
      path: data[i].path,
      title: data[i].title
    };
    if (data[i].path === path) {
      return paths;
    } else if (data[i].children) {
      const results = recursionPath(data[i].children, path, count, paths);
      if (results[results.length - 1].path === path) {
        return paths;
      }
    }
  }
  return paths;
};
