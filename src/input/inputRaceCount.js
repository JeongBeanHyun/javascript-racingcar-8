import { Console } from "@woowacourse/mission-utils";

export const inputRaceCount = async () => {
  const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  return Number(count);
};
