module.exports = function(value, ...args) {
    let result = value
    if (args.length % 2 != 0) {
        result = args.pop()
    }
    while (args.length > 0) {
        if (Object.is(value, args.shift())) {
            return args.shift()
        }
        args.shift()
    }
    return result
}
