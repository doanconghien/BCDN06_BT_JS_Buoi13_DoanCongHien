//Bài 1: Tính tiền lương
/**
 * Khối 1: Nhập dữ liệu
 * Khối 2: Tính toán dữ liệu 
 *      B1: Tạo hàm tính tiền lương
 *      B2: Gắn sự kiện click vào nút button
 * Khối 3: Xuất dữ liệu
 */
function tienLuong() {
    var luongMotNgay = document.getElementById("inputLuongMotNgay").value;
    var soNgayLam = document.getElementById("inputSoNgayLam").value;

    console.log(luongMotNgay, soNgayLam);

    var tienLuong = Number(luongMotNgay) * Number(soNgayLam);

    document.getElementById("tongTien").innerHTML = "Tien luong cua ban = " + tienLuong.toLocaleString() + " VND";
}
document.getElementById("btnCalc").onclick = tienLuong;

// Bài 2: Tính số trung bình
/**
 * Khối 1: Nhập dữ liệu
 * Khối 2: Lấy dữ liệu và tính toán
 *      B1: Tạo hàm tính toán
 *      B2: Gắn hàm vào sự kiện click
 *      B3: Xuất kết quả lên UI
 * Khối 3: Xuất dữ liệu
 */
function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;

    var trungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) / 5;

    document.getElementById("result").innerHTML = "Trung binh cua 5 so = " + trungBinh;
}
document.getElementById("btnCalc").onclick = tinhTrungBinh;