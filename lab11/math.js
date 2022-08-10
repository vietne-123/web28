function sum(a, b) {
  const result = a + b;
  return result;
}

function sub(a, b) {
  const result = a * b;
  return result;
}
function div(a = 1, b = 3) {
  const result = a / b;
  return result;
}
với phép toán + 
nếu có 1 toán hạng là chuỗi => ưu tiên chuyển hạng còn lại sang chuỗi 
với phép toán khác 
tự động chuyển đổi các kiểu dữ liệu khác sang số
1+"1"=11