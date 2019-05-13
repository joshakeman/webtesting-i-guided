module.exports = {
  add,
};

function add(args) {

    const numbers = Array.isArray(args) ? args : [...arguments]
    let s = 0;
    for (var i=0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s;

}
