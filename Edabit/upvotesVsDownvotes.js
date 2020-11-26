//! Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

//? Examples
//? getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

//? getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

//? getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(votes) {
  return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }), "expected: 13");
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }), "expected: -31");
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }), "expected: 0");
console.log(getVoteCount({ upvotes: 0, downvotes: 0 }), "expected: 0");
console.log(getVoteCount({ upvotes: 4, downvotes: 1 }), "expected: 3");
