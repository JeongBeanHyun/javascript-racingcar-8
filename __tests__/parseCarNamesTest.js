describe("parseCarNames 테스트", () => {
  test("자동차 이름 문자열을 쉼표 기준으로 구분하여 배열로 변환", () => {
    //given
    const cars = "jb,hb,lhj";

    //when
    const carNames = parseCarNames(cars);

    //then
    expect(carNames).toEqual(["jb", "hb", "lhj"]);
  });
});
