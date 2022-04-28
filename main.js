/**
 * Bài 1:
 */
document.getElementById("btn_1").onclick = function () {
    var tong = 0;
    var i = 0;
    for (i = 0; tong <= 10000; i++) {
        tong = tong + i;
    }
    document.getElementById("footer_1").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}

/**
 * Bài 2:
 */
function hamMu(x, y) {
    var kq = 1;
    for (j = 0; j < y; j++) {
        kq = kq * x;
    }
    return kq;
}
function tinhTong(x, n) {
    var kq = 0;
    for (var i = 1; i <= n; i++) {
        kq = kq + hamMu(x, i);
    }
    return kq;
}
document.getElementById("btn_2").onclick = function () {
    var x = document.getElementById("numberx").value * 1;
    var n = document.getElementById("numbern").value * 1;

    document.getElementById("footer_2").innerHTML = "Kết quả: " + tinhTong(x, n);
}

/**
 * Bài 3:
 */
document.getElementById("btn_3").onclick = function () {
    var n = document.getElementById("numbern3").value * 1;
    var kq = 1;
    for (var i = 0; i < n; i++) {
        kq = kq * (i + 1);
    }
    document.getElementById("footer_3").innerHTML = "Kết quả: " + kq;
}

/**
 * Bài 4:
 */
document.getElementById("btn_4").onclick = function () {
    var content = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div class=\"chan\">div chẵn " + i +"</div>";
        } else {
            content += "<div class=\"le\">div lẻ " + i +"</div>";
        }
    }
    document.getElementById("footer_4").innerHTML = content;
}