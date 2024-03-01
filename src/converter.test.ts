import { convertToArabic } from "./converter";

describe("Arabic Numeral Converter", () => {
  //1
  it("should throw an error when input is null", () => {
    expect(() => convertToArabic("")).toThrow("Number is null or undefined");
  });
  //2
  it("should throw an error for IIII", () => {
    expect(() => convertToArabic("IIII")).toThrow("Invalid Roman numeral");
  });
  //3
  it("should throw an error for IIV", () => {
    expect(() => convertToArabic("IIV")).toThrow("Invalid Roman numeral");
  });
  //4
  it("should throw an error for VIIIII", () => {
    expect(() => convertToArabic("VIIIII")).toThrow("Invalid Roman numeral");
  });
  //5
  it("should throw an error for VX", () => {
    expect(() => convertToArabic("VX")).toThrow("Invalid Roman numeral");
  });
  //6
  it("should throw an error for XM", () => {
    expect(() => convertToArabic("XM")).toThrow("Invalid Roman numeral");
  });
  //7
  it("should throw an error for IL", () => {
    expect(() => convertToArabic("IL")).toThrow("Invalid Roman numeral");
  });
  //8
  it("should throw an error for XMIX", () => {
    expect(() => convertToArabic("XMIX")).toThrow("Invalid Roman numeral");
  });
  //9
  it("should throw an error for SPACE", () => {
    expect(() => convertToArabic("SPACE")).toThrow("Invalid Roman numeral");
  });

  //10
  it("should convert I to 1", () => {
    expect(convertToArabic("I")).toBe(1);
  });
  //11
  it("should convert II to 2", () => {
    expect(convertToArabic("II")).toBe(2);
  });
  //12
  it("should convert IV to 4", () => {
    expect(convertToArabic("IV")).toBe(4);
  });
  //13
  it("should convert V to 5", () => {
    expect(convertToArabic("V")).toBe(5);
  });
  //14
  it("should convert VII to 7", () => {
    expect(convertToArabic("VII")).toBe(7);
  });
  //15
  it("should convert IX to 9", () => {
    expect(convertToArabic("IX")).toBe(9);
  });
  //16
  it("should convert X to 10", () => {
    expect(convertToArabic("X")).toBe(10);
  });
  //17
  it("should convert XVI to 16", () => {
    expect(convertToArabic("XVI")).toBe(16);
  });
  //18
  it("should convert XXII to 22", () => {
    expect(convertToArabic("XXII")).toBe(22);
  });
  //19
  it("should convert XXVIII to 28", () => {
    expect(convertToArabic("XXVIII")).toBe(28);
  });
  //20
  it("should convert XL to 40", () => {
    expect(convertToArabic("XL")).toBe(40);
  });
  //21
  it("should convert XLIX to 49", () => {
    expect(convertToArabic("XLIX")).toBe(49);
  });
  //22
  it("should convert L to 50", () => {
    expect(convertToArabic("L")).toBe(50);
  });
  //23
  it("should convert LXXII to 72", () => {
    expect(convertToArabic("LXXII")).toBe(72);
  });
  //24
  it("should convert C to 100", () => {
    expect(convertToArabic("C")).toBe(100);
  });
  //25
  it("should convert CXI to 111", () => {
    expect(convertToArabic("CXI")).toBe(111);
  });
  //26
  it("should convert CCCXCIX to 399", () => {
    expect(convertToArabic("CCCXCIX")).toBe(399);
  });
  //27
  it("should convert CD to 400", () => {
    expect(convertToArabic("CD")).toBe(400);
  });
  //28
  it("should convert DXLIII to 543", () => {
    expect(convertToArabic("DXLIII")).toBe(543);
  });
  //29
  it("should convert MCCXXXIV to 1234", () => {
    expect(convertToArabic("MCCXXXIV")).toBe(1234);
  });
  //30
  it("should convert MM to 2000", () => {
    expect(convertToArabic("MM")).toBe(2000);
  });
  //31
  it("should convert MMMCMXCIX to 3999", () => {
    expect(convertToArabic("MMMCMXCIX")).toBe(3999);
  });
});
