export const validateCarNameLength = (carName) => {
  if (carName.length >= 6) {
    throw new Error("[ERROR] 자동차의 이름은 5자 이하만 가능합니다.");
  }
};

export const validateSeparator = (carNames) => {};

export const validateCarNameNotEmpty = (carName) => {};

export const validateCarCount = (cars) => {};
