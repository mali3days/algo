const input = {
  id: '1',
  value: 1,
  next: {
    id: '1-2',
    value: 1,
    next: {
      id: '1-3',
      value: 1,
      next: {
        id: '2',
        value: 3,
        next: {
          id: '3',
          value: 4,
          next: {
            id: '3-2',
            value: 4,
            next: {
              id: '3-3',
              value: 4,
              next: {
                id: '4',
                value: 5,
                next: {
                  id: '5',
                  value: 6,
                  next: {
                    id: '5-2',
                    value: 6,
                    next: null,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// Solution 1
// O(n) time | O(1) space
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

  while (currentNode) {
    let nextDistinctNode = currentNode.next;

    while (nextDistinctNode?.value === currentNode.value) {
      nextDistinctNode = nextDistinctNode.next;
    }

    currentNode.next = nextDistinctNode;
    currentNode = nextDistinctNode;
  }

  return linkedList;
}

removeDuplicatesFromLinkedList(input); // 1 -> 3 -> 4 -> 5 -> 6
