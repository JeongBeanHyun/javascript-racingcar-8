describe("inputCarNames 테스트", () => {
  test("자동차 이름 문자열을 배열로 변환", () => {
    //given
    const cars = "jb, hb, lhj";

    //when
    const carNames = parseCarNames(cars);

    //then
    expect(carNames).toEqual(["jb", "hb", "lhj"]);
  });
});
