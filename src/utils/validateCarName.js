export const validateCarNameLength = (carName) => {
  if (carName.length >= 6) {
    throw new Error("[ERROR] 자동차의 이름은 5자 이하만 가능합니다.");
  }
};

export const validateSeparator = (carNames) => {
  const hasOtherSeparator = /[:;|]/.test(carNames);
  if (hasOtherSeparator) {
    throw new Error("[ERROR] 구분자는 쉼표(,)만 가능합니다.");
  }
};

export const validateCarNameNotEmpty = (carName) => {};

export const validateCarCount = (cars) => {};
