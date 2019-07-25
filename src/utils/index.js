export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const recursionPath = (data, value, count, path) => {
  let paths = [];
  count = count + 1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].path === value) {
      path[count] = {
        path: data[i].path,
        title: data[i].title
      };
      paths = path;
      break;
    } else if (data[i].children) {
      path[count] = {
        path: data[i].path,
        title: data[i].title
      };
      paths = recursionPath(data[i].children, value, count, path);
      if (paths.includes(value)) {
        return paths;
      }
    }
  }
  return paths;
};

export const recursionPathToHistory = (data, path) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].path === path) {
      return {
        title: data[i].title,
        path: data[i].path
      };
    }
    if (data[i].children) {
      return recursionPathToHistory(data[i].children, path);
    } else {
      if (data[i].path === path) {
        return {
          title: data[i].title,
          path: data[i].path
        };
      }
    }
  }
};
