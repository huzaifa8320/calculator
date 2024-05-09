function print(numbers) {
    var display = document.getElementById("display");
    display.value += numbers
}
function result() {
    var display = document.getElementById("display");
    display.value = eval(display.value)
}
function cutall() {
    var display = document.getElementById("display");
    display.value = ""
}
function cut() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1)
}