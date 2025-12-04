// 1. Sửa tên hàm thành "calculate()" để khớp với HTML
function calculate() {

    // Lấy giá trị A và B từ form 'calcform'
    var a = parseFloat(document.calcform.txta.value);
    var b = parseFloat(document.calcform.txtb.value);

    // 2. Sửa tên phần tử từ "slto" thành "sto" để khớp với HTML
    var operator = document.calcform.sto.value; 
    var result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        // Xử lý thêm trường hợp chia cho 0
        if (b === 0) {
            result = "Lỗi: Chia cho 0";
        } else {
            result = a / b;
        }
    } 
    // Bổ sung các toán tử còn thiếu trong HTML
    else if (operator === "%") {
        result = a % b;
    } else if (operator === "**") {
        result = Math.pow(a, b); // a mũ b
    } 
    // Trường hợp cuối cùng
    else {
        result = "Toán tử không hợp lệ";
    }

    // 3. Sửa cách hiển thị kết quả để khớp với ô input "txtr"
    // Dùng .value vì đây là một ô input
    document.calcform.txtr.value = result;
}