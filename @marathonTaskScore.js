function marathonTaskScore(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  let penalty =
    successfulSubmissionTime * (maxScore / 2) * (1 / marathonLength);
  let res = maxScore - penalty - 10 * (submissions - 1);
  if (successfulSubmissionTime < 0) return 0;
  if (res < maxScore / 2) return maxScore / 2;
  return res;
}

marathonLength = 100;
maxScore = 400;
submissions = 3;
successfulSubmissionTime = 30;
console.log(
  marathonTaskScore(
    marathonLength,
    maxScore,
    submissions,
    successfulSubmissionTime
  )
);

//310
/* If you solve a task on your first attempt within the first minute, you get maxScore points.
Each additional minute you spend on the task adds a penalty of (maxScore / 2) * (1 / marathonLength) to your final score.
Each unsuccessful attempt adds a penalty of 10 to your final score.
After all the penalties are deducted, if the score is less than maxScore / 2, you still get maxScore / 2 points. */
