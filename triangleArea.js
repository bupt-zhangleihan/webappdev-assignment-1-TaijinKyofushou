function triangleArea(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        p = (a + b + c) / 2;
        s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return s;
    } else {
        return "请输入正确的三角形三边长！";
    }
}
