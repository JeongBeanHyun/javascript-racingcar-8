import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarNames } from "../src/input/inputCarNames";
import { inputRaceCount } from "../src/input/inputRaceCount";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe("입력 테스트", () => {
  test("자동차 이름 정상 입력", async () => {
    //given
    const cars = "jb,hb,lhj";
    mockQuestions(cars);

    //when
    const input = await inputCarNames();

    //then
    expect(input).toBe("jb,hb,lhj");
  });

  test("자동차 경주 시도할 횟수 정상 입력", async () => {
    const count = "5";
    mockQuestions(count);

    const input = await inputRaceCount();

    expect(input).toBe(5);
  });
});
