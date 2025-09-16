import { getRandomInt } from '../utils/getRandomInt';
import { formatExpression } from '../utils/formatExpression';

export function generateAdditionExpressions(
  maxSum: number,
  count: number,
  minOperand: number,
  maxAttempts: number = Math.min(count * 100, 10000)
): string[] {
  const maxAllowedMin = Math.floor(maxSum / 2);
  let adjustedMin = minOperand;

  if (minOperand > maxAllowedMin) {
    console.warn(
      `MIN=${minOperand} превышает допустимое значение. Автокоррекция до ${maxAllowedMin}`
    );
    adjustedMin = maxAllowedMin;
  }

  const attempts = Array.from({ length: maxAttempts }, () => {
    const a = getRandomInt(adjustedMin, maxSum - adjustedMin);
    const b = getRandomInt(adjustedMin, maxSum - a);
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
