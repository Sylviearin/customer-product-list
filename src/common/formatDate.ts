// Format date, if less than 10 and a 0 before number
// example input: 9 -> output: 09
export const formatDate = (a: number): string => {
    if (a < 10) {
        return `0${a}`
    }
    return a.toString()
}
