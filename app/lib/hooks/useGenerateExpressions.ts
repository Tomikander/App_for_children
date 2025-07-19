import { generateAdditionExpressions } from "../helpers/generateExpressions";
import { useMaxNumber } from "./useMaxNumber";
import { useResultsAmount } from "./useResultsAmount";

export const useGenerateExpressions = () => {
	const { maxAdditionSum } = useMaxNumber();
	const { resultsAmountToGenerate } = useResultsAmount();
	
  const generate = () => {
	 return generateAdditionExpressions(maxAdditionSum, resultsAmountToGenerate);
	};

  return { generate };
};