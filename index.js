function solution(n) {
    if (n==1) {
        return 1;
    }
    let sum = 0;
    for (let i = 1;i<n;i++) {
        sum =  sum + i
    }
    console.log(sum)
    sum = sum*4;
    console.log(sum)
    return ((2*n)-1)*((2*n)-1)-sum;
}
