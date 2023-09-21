const nums = [2, 3, 6, 6, 5]
nums.sort((a, b) => {
    return b - a;
});
let segundoMaior = 0
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
        segundoMaior = nums[i + 1]
        break;
    }
}
console.log(segundoMaior)