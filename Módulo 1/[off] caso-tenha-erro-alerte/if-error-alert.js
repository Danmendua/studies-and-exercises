const s = Number(1234)
if (typeof s === "number") {
    console.log(`s.split is not a function\n${s}`)
} else {
    const toArray = s.split('')
    console.log(toArray.reverse().join(''))
}