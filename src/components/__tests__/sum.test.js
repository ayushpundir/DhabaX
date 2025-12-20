import { sum } from "../sum";

//this test function takes two arguments, a string description and a callback function

test("Sum function should caculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion, if we won't use assertion the test will always pass
  expect(result).toBe(7);
});