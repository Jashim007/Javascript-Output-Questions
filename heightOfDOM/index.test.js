const getHeight = require('./index.js')

describe('get height', () => {
    test('should calculate the DOM tree height', () => {
      const root = document.createElement('div');
      const child1 = document.createElement('div');
      const child2 = document.createElement('div');
      const grandchild1 = document.createElement('p');
      const grandchild2 = document.createElement('span');
  
      root.appendChild(child1);
      root.appendChild(child2);
      child1.appendChild(grandchild1);
      child2.appendChild(grandchild2);
  
      const expected = 3;
      const result = getHeight(root);
  
      expect(result).toEqual(expected);
    });
  });