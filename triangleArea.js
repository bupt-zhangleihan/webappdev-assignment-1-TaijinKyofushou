function triangleArea(a, b, c) {
    p = (a + b + c) / 2
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    return s
}