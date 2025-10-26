import {
  validateIsNumber,
  validateNotZero,
  validatePositiveInteger,
} from "../src/utils/validateRaceCount";

describe("경주 시도할 횟수 예외 테스트", () => {
  test("시도할 횟수가 0일 경우 예외 발생", () => {
    //given
    const count = 0;

    //when & then
    expect(() => validateNotZero(count)).toThrow(
      "[ERROR] 자동차 경주는 최소 1회 실행되어야 합니다."
    );
  });

  test.each(["0", "abc", "null", "undefined"])(
    "시도할 횟수가 숫자가 아닌 값일 경우 예외 발생",
    (count) => {
      expect(() => validateIsNumber(count)).toThrow(
        "[ERROR] 시도할 횟수는 숫자만 가능합니다."
      );
    }
  );

  test.each([-2, 1.2])(
    "시도할 횟수가 음수거나 소수일 경우 예외 발생",
    (count) => {
      expect(() => validatePositiveInteger(count)).toThrow(
        "[ERROR] 시도할 횟수는 양의 정수만 가능합니다."
      );
    }
  );
});
