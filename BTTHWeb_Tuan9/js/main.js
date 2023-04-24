var $ = function(str) {
    return document.querySelector(str);
}

var $$ = function(str) {
    return document.querySelectorAll(str);
}

var lich = $(".calendar");
var modal = $(".modal");
var close = $$(".close");
var submit = $(".datlich");

lich.onclick = () => {
    modal.style.display = "flex";
}

close.forEach(close => {
    close.onclick = () => {
        modal.style.display = "none";
    }
});

submit.onclick = () => {
    kiemtra();
}

function kiemtra() {
    var ma = $("#ma").value;
    var matkhau = $("#mk").value;
    var ngay = new Date($("#ngay").value);
    var gia = 0;
    var chuyenkhoa = $("#select").value;
    if ($("#yeuCau").checked) gia += 500000;
    if ($("#dieuTri").checked) gia += 500000;
    if ($("#bacSi").checked) gia += 500000;
    if (ma === "" || matkhau === "" || $("#ngay").value === "") {
        alert("Chưa nhập đủ dữ liệu");
    } 
    else if (!ma.match(/^BN-\d{5}$/)) {
        alert("Mã bệnh nhân không hợp lệ");
    } else if (matkhau.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự");
    } else if (ngay <= new Date()) {
        alert("Ngày khám phải sau ngày hiện tại");
    } 
    
    else {
        // Tạo bản ghi mới
        var stt = $(".table").rows.length;
        var maBenhNhan = ma;
        var matKhau = matkhau;
        var ngayKham = ngay.toLocaleDateString();
        var phuThu = gia.toLocaleString();
        var chuyenKhoa = chuyenkhoa;
        var newRow = "<tr><td>" + stt + "</td><td>" + maBenhNhan + "</td><td>" + matKhau + "</td><td>" + ngayKham + "</td><td>" + phuThu + "</td><td>" + chuyenKhoa + "</td></tr>";
        // Thêm bản ghi mới vào bảng
        $(".table").insertAdjacentHTML('beforeend', newRow);
        // Cập nhật thứ tự bản ghi mới
        // Làm rỗng form
        $("#ma").value = "";
        $("#mk").value = "";
        $("#ngay").value = "";
        $("#yeuCau").checked = false;
        $("#dieuTri").checked = false;
        $("#bacSi").checked = false;
        $("#select").value = "Ngoại tổng quát";
    }
}