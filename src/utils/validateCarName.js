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

export const validateCarNameNotEmpty = (carName) => {
  if (carName.length === 0) {
    throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
  }
};

export const validateCarCount = (cars) => {
  if (cars.length === 1) {
    throw new Error("[ERROR] 자동차는 n개가 입력되어야 합니다.");
  }
};
