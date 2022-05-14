// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];



function returnFirstTwoDrivers(arr){

return [arr[0],arr[1]]

}
function returnLastTwoDrivers(arr){

    return [arr[arr.length-2],arr[arr.length-1]]
    
    }

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
    return function(num2) {
        return num * num2
    }
}

function fareDoubler(num){
    return createFareMultiplier(2)(num)
}

function fareTripler(num){
    return createFareMultiplier(3)(num)
}

function selectDifferentDrivers(arr, func) {
    return func(arr)
}