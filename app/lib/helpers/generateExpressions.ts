import { getRandomInt } from "../utils/getRandomInt";
import { isSumWhithinLimit } from "../utils/isSumWithinLimit";
import { formatExpression } from "../utils/formatExpression";

export function generateAdditionExpressions(maxSum: number, count: number): string[] {
  const maxAttempts = count * 20;

  const validExpressions = Array.from({ length: maxAttempts }, () => {
    const a = getRandomInt(0, maxSum);
    const b = getRandomInt(0, maxSum);
    return isSumWhithinLimit(a, b, maxSum) ? formatExpression(a, b) : null;
  }).filter((expr): expr is string => expr !== null);

  const paddedExpressions = [
    ...validExpressions.slice(0, count),
    ...Array.from({ length: Math.max(0, count - validExpressions.length) }, () => 'Unavailable: amount limit exceeded')
  ];

  return paddedExpressions;
}
