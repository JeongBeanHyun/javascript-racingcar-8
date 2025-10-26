export const validateNotZero = (count) => {
  if (count === 0) {
    throw new Error("[ERROR] 자동차 경주는 최소 1회 실행되어야 합니다.");
  }
};

export const validateIsNumber = (count) => {
  if (isNaN(count) || typeof count !== "number") {
    throw new Error("[ERROR] 시도할 횟수는 숫자만 가능합니다.");
  }
};

export const validatePositiveInteger = (count) => {};
