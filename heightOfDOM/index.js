// get DOM tree height

// Height of a tree is the maximum depth from root node. Empty root node have a height of 0.
// If given DOM tree, can you create a function to get the height of it?
// Can you solve this both recursively and iteratively?

//recursive - DFS as it explores each child subtree completely before moving on to the next child.

// function getHeight(tree) {
//   if (tree === null) {
//     return 0;
//   }

//   let maxHeight = 0;
//   for (const child of tree.children)
//     maxHeight = Math.max(maxHeight, getHeight(child));

//   return 1 + maxHeight;
// }

//Iterative Solution using Stack -DFS

// function getHeight(tree) {
//     if (tree === null) {
//         return 0;
//     }

//     let maxHeight = 0;
//     const stack = [[tree, 1]];

//     console.log("stack", ...stack)

//     while (stack.length > 0) {
//         const [el, height] = stack.pop();
//         maxHeight = Math.max(height, maxHeight);

//         for (const child of el.children) {
//         stack.push([child, height + 1]);
//         }

//         console.log("stack", ...stack)
//     }

//     return maxHeight;
//     }


//Iterative Solution with Queue - BFS

function getHeight(root) {

    if(!root) return 0

    let maxHeight=0;
    const queue = [[root, 1]]
   

    while(queue.length) {
        const [element, height] = queue.shift()
        maxHeight = Math.max(height, maxHeight)

        for(const child of element.children) queue.push([child, height+1])
    }

    return maxHeight

}

module.exports = getHeight
