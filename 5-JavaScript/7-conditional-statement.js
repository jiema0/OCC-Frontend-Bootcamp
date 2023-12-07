// Conditional Statement 
let age = 18

// if
if (age > 21) {
    console.log("Adult")
} else {
    console.log("Teen")
}

// if if-else else
let temp = 25
if (temp < 0) {
    console.log("Freezing!")
} else if (temp >= 0 && temp < 20) {
    console.log("Cool.")
} else {
    console.log("Warm!")   
}

// Conditional Statement - Switch
let day = "Monday"
switch (day) {
    case "Monday":
        console.log("It's the start of the week!")  
        break 
    case "Friday":
        console.log("It's the end of the week!")   
        break
    default:
        console.log("It's a regular day. ")
        break
}


