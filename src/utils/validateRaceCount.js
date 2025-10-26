export const validateNotZero = (count) => {
  if (count === 0) {
    throw new Error("[ERROR] 자동차 경주는 최소 1회 실행되어야 합니다.");
  }
};

export const validateIsNumber = (count) => {};

export const validatePositiveInteger = (count) => {};
