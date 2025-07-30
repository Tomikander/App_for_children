import { getRandomInt } from '../utils/getRandomInt';
import { formatExpression } from '../utils/formatExpression';

export function generateAdditionExpressions(
  maxSum: number,
  count: number,
  maxAttempts: number = Math.min(count * 100, 10000)
): string[] {
  const attempts = Array.from({ length: maxAttempts }, () => {
    const a = getRandomInt(0, maxSum);
    const b = getRandomInt(0, maxSum);
    return a + b <= maxSum ? formatExpression(a, b) : null;
  });

  const expressions = attempts.reduce<string[]>((acc, expr) => {
    if (expr !== null && acc.length < count) {
      acc.push(expr);
    }
    return acc;
  }, []);

  if (expressions.length < count) {
    console.warn(
      `Only ${expressions.length} valid expressions generated out of ${count} required.`
    );
  }

  const padded = [
    ...expressions,
    ...Array.from(
      { length: count - expressions.length },
      () => 'Unavailable: amount limit exceeded'
    ),
  ];

  return padded;
}
