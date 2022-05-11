// Binary search is a search algorithm that takes a sorted array and the searched item as inputs
// It returns the index of the searched item if exists or null if doesn't exist
// It takes time complexity of O(log n)
const binarySearch = (arr: Array<any>, searchedItem: any) => {
    let lowIndex = 0
    let highIndex = arr.length - 1
    let result: number = undefined
    while (lowIndex <= highIndex) {
        let mid = Math.round(lowIndex + highIndex / 2)
        const guess = arr[mid]
        if (guess === searchedItem){
            result = mid
            break
        }
        else if (guess < searchedItem) lowIndex = mid + 1
        else highIndex = mid - 1
    }
    return result
}

const arr = [1,2,3,4,5,6,7,8,9,10,26,40]
const res1 = binarySearch(arr, 40)
const res2 = binarySearch(arr, 10)
const res3 = binarySearch(arr, 1)
const res4 = binarySearch(arr, 9827529437)
console.log('asdasd')
console.log(res1) //should return 11
console.log(res2) //should return 9
console.log(res3) //should return 0
console.log(res4) //should return undefined




