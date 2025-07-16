import { getRandomInt } from "../utils/getRandomInt";
import { isSumWhithinLimit } from "../utils/isSumWithinLimit";
import { formatExpression } from "../utils/formatExpression";

export function generateAdditionExpressions(maxSum: number, count: number): string[] {
  const expressions: string[] = [];
  let attempts = 0;
  const maxAttempts = count * 20;

  while (expressions.length < count && attempts < maxAttempts) {
    const a = getRandomInt(0, maxSum);
    const b = getRandomInt(0, maxSum);

    if (isSumWhithinLimit(a, b, maxSum)) {
      expressions.push(formatExpression(a, b));
    }

    attempts++;
  }

  while (expressions.length < count) {
    expressions.push('Unavailable: amount limit exceeded')
  }

  return expressions;
}