const nextRightSibling = require('./index.js')

describe('next right sibling', () => {
    test('should return the next right sibling if present otherwise null', () => {
        const root = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');
        const child3 = document.createElement('div')
        const grandchild1 = document.createElement('p');
        const grandchild2 = document.createElement('span');
    
        root.appendChild(child1);
        root.appendChild(child2);
        root.appendChild(child3)
        child1.appendChild(grandchild1);
        child3.appendChild(grandchild2);
    
        const expected = 3;
        const result = nextRightSibling(root, grandchild1);
    
        expect(result).toEqual(grandchild2);
    })
})