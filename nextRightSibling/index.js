//Next Right Sibling
// Given a DOM tree and a target element, please return the next right sibling.
// Notice that they don't necessarily have the same parent element.

// If no right sibling, then return null.

// What is time & space cost of your solution ?

function nextRightSibling(root, target) {
     if(!root || !target) return null;

     const queue = [root, null]

     while(queue.length) {
        const currentNode = queue.shift()
        if(currentNode === target) return queue[0]
        if(currentNode === null && queue.length) queue.push(null)
        else queue.push(...currentNode.children)
     }

     return null
  }


const root = document.getElementById("root")
const target = document.getElementById("target")
console.log(target === target)
console.log("next right sibling is ", nextRightSibling(root, target))

module.exports = nextRightSibling