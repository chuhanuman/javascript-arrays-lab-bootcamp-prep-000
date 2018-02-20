const app = "I don't do much."
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function prependKitten(name) {
  return [name, ...kittens]
}
function appendKitten(name) {
  return [...kittens, name]
}
function removeFirstKitten() {
  return kittens
}
function removeLastKitten() {
  return kittens.slice(o, kittens.length - 1)
}
function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}