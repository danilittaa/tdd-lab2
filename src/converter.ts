const values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const convertToArabic = (number: string) => {
  if (!number) {
    throw Error("Number is null or undefined");
  }
  if (
    /^(IIV|XC|CM|IL|ID|IC|IM|XD|XM|VX|VL|VC|VD|VM|LC|LD|LM|DM).*$/.test(
      number
    ) ||
    /(.)(\1\1\1)(?![IVXLCDM])/.test(number)
  ) {
    throw new Error("Invalid Roman numeral");
  }
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    const current = values[number[i]];
    if (current === undefined) {
      throw new Error("Invalid Roman numeral");
    }
    const next = values[number[i + 1]] || 0;
    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};

export { convertToArabic };
