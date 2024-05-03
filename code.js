/*
DISCLAIMER: I worked with Howard Shaw on this assignment. We pair programmed the code implementation, additional testing code, and then reasoned out the runtime analysis in tandem as well
*/
function augmentingPath(graph, start, end) {
  if (start == end) {
    return [start]
  }

  let queue = [[start]]
  let visited = []

  let nodes = Object.keys(graph)
  if (nodes.length == 1) return nodes

  while (queue.length > 0) {
      let path = queue.shift()
      let node = path[path.length - 1]

      if (node == end) {
        return path
      }

      if (!visited.includes(node)) {
          visited.push(node)

          let neighbors = Object.keys(graph[node] || {})
          for (let neighbor of neighbors) {
              let newPath = [...path, neighbor]
              queue.push(newPath)
          }
      } 
  }
  return [];
}
