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
  
}
function appendKitten(name) {
  
}
function removeFirstKitten() {
  return kittens
}
function removeLastKitten() {
  return 
}
function destructivelyRemoveFirstKitten() {
  kittens.unshift()
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}