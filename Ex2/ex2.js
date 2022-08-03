const numberOneTriangle = (number) => {
  // Hàm có sẵn để kiểm tra xem number có phải số nguyên không
  Number.isInteger(number);
  for (let i = 1; i <= number; i++) {
    // Đây là vòng lặp theo cột
    // vì console.log mỗi lần in ra sẽ xuống 1 dòng mới, nên tạo biến để lưu trữ rồi thực hiện nối chuỗi
    let string = '';
    for (let j = 1; j <= i; j++) {
      // Đây là vòng lặp theo dòng
      // nối chuỗi
      string += '*';
    }
    // Kết thúc vòng lặp nối chuỗi sẽ in ra
    console.log(string);
  }
};

numberOneTriangle(3);
