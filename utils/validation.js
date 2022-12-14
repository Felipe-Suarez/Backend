export const validation = (props) => {
    const array = Object.values(props)

    let count = 0;
    array.forEach(item => {
        if (typeof (item) === 'string') {
            if (item.trim() !== '') {
                count++
            }
        } else {
            if (item !== null) {
                count++
            }
        }
    })
    if (count === array.length) {
        return true
    }
    return false
}