//! Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

//? Example 2:
//? Input: l1 = [], l2 = []
//? Output: []

//? Example 3:

//? Input: l1 = [], l2 = [0]
//? Output: [0]

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  return !l2 || l1.val < l2.val
    ? { ...l1, next: mergeTwoLists(l1.next, l2) }
    : { ...l2, next: mergeTwoLists(l1, l2.next) };
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
