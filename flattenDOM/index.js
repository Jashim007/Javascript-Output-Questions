// Traverse DOM level by level

// Given a DOM tree, flatten it into an one dimensional array, in the order of layer by layer, like below.

 function flatten(root) {
    if(!root) return []

    const queue = [root];
    const result = []

    while(queue.length) {
        const currentNode = queue.shift();
        result.push(currentNode)
        if(currentNode.children) queue.push(...currentNode.children)
    }
    return result
}


module.exports = flatten
   


