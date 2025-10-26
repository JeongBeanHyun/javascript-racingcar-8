import {
  validateCarCount,
  validateCarNameLength,
  validateCarNameNotEmpty,
  validateSeparator,
} from "../src/utils/validateCarName";

describe("자동차 이름 예외 테스트", () => {
  test("자동차 이름이 5자 초과한 경우 예외 발생", () => {
    //given
    const carName = "jbjbjb";

    //when & then
    expect(() => validateCarNameLength(carName)).toThrow(
      "[ERROR] 자동차의 이름은 5자 이하만 가능합니다."
    );
  });

  test("자동차 이름이 빈 이름일 경우 예외 발생", () => {
    const carName = ",";

    expect(() => validateCarNameNotEmpty(carName)).toThrow(
      "[ERROR] 자동차 이름을 입력해주세요."
    );
  });

  test("자동차 이름 1개만 입력했을 경우 예외 발생", () => {
    const carName = "jb";

    expect(() => validateCarCount(carName)).toThrow(
      "[ERROR] 자동차는 n개가 입력되어야 합니다."
    );
  });

  test("자동차 입력을 쉼표가 아닌 다른 구분자로 입력했을 경우 예외 발생", () => {
    const carName = "jb|hh";

    expect(() => validateSeparator(carName)).toThrow(
      "[ERROR] 구분자는 쉼표(,)만 가능합니다."
    );
  });
});
