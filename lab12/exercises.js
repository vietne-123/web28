/**
 * Tìm số lớn nhất trong 3 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 * @param {number} c Số thứ 3
 *
 * @return {number} Số lớn nhất trong 3 số
 */
 function maxOfThree(a, b, c) {
    if (((a) => b, (a) => c)) {
      return a;
    }
    if (((b) => a, (b) => c)) {
      return b;
    } else {
      return c;
    }
  }
  console.log(maxOfThree(1, 2, 3));
  
  /**
   * Tìm mùa tương ứng với tháng
   *
   * - Winter (mùa đông): 12, 1, 2
   * - Spring (mùa xuân): 3, 4, 5
   * - Summer (mùa hạ): 6, 7, 8
   * - Fall (mùa thu): 9, 10, 11
   *
   * @param {number} month Tháng trong năm
   *
   * @return {number} Mùa tương ứng với tháng (Winter | Spring | Summer | Fall)
   */
  function findSeason(month) {
    if (((month = 12), (month = 1), (month = 2))) {
      return "winter";
    }
    if (((month = 3), (month = 4), (month = 5))) {
      return "spring";
    }
    if (((month = 6), (month = 7), (month = 8))) {
      return "summer";
    }
    if (((month = 9), (month = 10), (month = 11))) {
      return "fall";
    }
  }
  console.log(findSeason(5));
  /**
   * Kiểm tra xem một năm có phải năm nhuận hay không
   *
   * Theo lịch Gregory, năm nhuận là năm có số năm chia hết cho `4` và không chia hết cho `100`,
   * tuy nhiên ngoại lệ với các năm chia hết cho `100` vẫn được coi là năm nhuận nếu nó cũng chia hết cho `400`
   *
   * - `2020` là năm nhuận vì chia hết cho `4` nhưng không chia hết cho `100`
   * - `2100` không phải năm nhuận vì chia hết cho `4` nhưng chia hết cho `100`
   * - `2000` là năm nhuận vì chia hết cho `100` nhưng cũng chia hết cho `400`
   *
   * @param {number} year Năm bất kỳ
   *
   * @return {boolean} Năm này có phải năm nhuận hay không
   */
  function isLeafYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
      return "năm nhuận";
    } else {
      return "năm không nhuận=)";
    }
  }
  console.log(isLeafYear(2020));
  
  /**
   * Tìm số ngày trong tháng
   *
   * - Các tháng `1`, `3`, `5`, `7`, `8`, `10`, `12` có `31` ngày
   * - Các tháng `4`, `6`, `9`, `11` có `30` ngày
   * - Tháng `2` có `29` ngày nếu là năm nhuận, nếu không là `28` ngày
   *
   * @param {number} month Tháng bất kỳ
   * @param {number} year Năm bất kỳ
   *
   * @return {number} Số ngày trong tháng đó
   */
  function findDayOfMonth(month, year) {}
  
  /**
   * Xếp loại sinh viên theo số điểm trung bình
   *
   * @param {number} point Điểm trung bình của sinh viên
   *
   * @return {'A' | 'B' | 'C' | 'D' | 'F'} Xếp hạng tốt nghiệp của sinh viên
   */
  function calcGrade(point) {
    if (point >= 9) {
      return "A";
    } else if (point >= 8 && point < 9) {
      return "B";
    } else if (point >= 7 && point < 8) {
      return "C";
    } else if (point >= 6 && point < 7) {
      return "D";
    } else {
      return "F";
    }
  }
  console.log(point(9))
  /**
   * Tính tiền cước taxi cho khách theo số kilomet đã di chuyển
   *
   * - Phí mở cửa cố định là `10.000đ`
   * - Giá cho `30km` đầu tiên là `11.000đ/km`
   * - Từ kilomet thứ `31` giá là `9.500đ/km`
   * - Tổng tiền cước = Phí mở cửa + tổng tiền theo số kilomet đã di chuyển
   *
   * @param {number} km Số kilomet đã di chuyển
   *
   * @return {number} Số tiền phải trả
   */
  function calcTaxiFee(km) {
      if(km<=30){
          return 10.000+11.000*km
      }
      else if(km>=31){
          return 10.000+9.500*(30-km)+km*11.000
      }
  }
  
  /**
   * Tìm nghiệm phương trình bậc 2 ax^2 + bx + c = 0
   *
   * - Nếu phương trình có vô số nghiệm thì trả về `Infinity`
   * - Nếu phương trình vô nghiệm thì trả về `null`
   * - Nếu phương trình có 1 nghiệm thì trả về nghiệm đó
   * - Nếu phương trình có 2 nghiệm thì trả về một *mảng* chứa 2 nghiệm, cú pháp `[x1, x2]`
   *
   * @param {number} a Tham số a
   * @param {number} b Tham số b
   * @param {number} c Tham số c
   *
   * @return {number | [number, number] | null} Nghiệm phương trình
   */
  function solveEquation(a, b, c) {}
  

