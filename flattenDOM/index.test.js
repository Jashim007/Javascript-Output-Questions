const flatten =  require('./index.js');

describe('flatten', () => {
    test('should flatten the DOM tree into a one-dimensional array', () => {
      const root = document.createElement('div');
      const child1 = document.createElement('div');
      const child2 = document.createElement('div');
      const grandchild1 = document.createElement('p');
      const grandchild2 = document.createElement('span');
  
      root.appendChild(child1);
      root.appendChild(child2);
      child1.appendChild(grandchild1);
      child2.appendChild(grandchild2);
  
      const expected = [root, child1, child2, grandchild1, grandchild2];
      const result = flatten(root);
  
      expect(result).toEqual(expected);
    });
  });