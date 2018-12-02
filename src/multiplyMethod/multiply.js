export function addMultiplyMethodAndCall() {
  const a = [1, 2, 3, 4, 5]
  a.multiply = function() {
    return this.concat(this.map((num) => num * num))
  }.bind(a)
  console.log(a.multiply())
}
