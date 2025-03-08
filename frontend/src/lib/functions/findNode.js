export const findNode = (mainStories, dir) => {
  if (dir.length === 0) return null;

  else {
    console.log("dir", dir)
    let node = mainStories.find((story) => story.id === dir[0]);
    for (let i = 1; i < dir.length; i++) {
      console.log(node)
      node = node.children[dir[i]];
    }
    console.log(node)
    return node;
  }
}