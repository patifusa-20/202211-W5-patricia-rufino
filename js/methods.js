// Get length array
export const getLength = (arr) => {
    let counter = 0;
    // Count elements in array
    for (const element of arr) {
        arr[counter] = element;
        counter++;
    }
    return counter;
};

export const getPush = (arr, ...newE) => {
    // Add elements to the end of array
    let newIndex = getLength(arr);
    for (const arg of newE) {
        arr[newIndex] = arg;
        newIndex++;
    }
    // Return the new length of the array
    return newIndex;
};

export const getPop = (arr) => {
    // Remove last element from array
    let lastIndex = getLength(arr) - 1;
    let lastElement = arr[lastIndex];
    let newArr = [];
    for (let i = 0; i <= lastIndex; i++) {
        if (i !== lastIndex) {
            getPush(newArr, arr[i]);
        }
    }
    arr = newArr;
    const newLength = getLength(arr);
    const valuesToTest = [lastElement, arr, newLength];
    // Return that element removed
    return valuesToTest;
};

export const getUnshift = (arr, ...newE) => {
    // Add elements to the beginning of an array
    let countNewElements = getLength(newE);
    let countArr = getLength(arr) - 1;
    for (let i = countArr; i >= 0; i--) {
        let value = arr[i];
        arr[i + countNewElements] = value;
    }
    let newIndex = 0;
    for (const arg of newE) {
        arr[newIndex] = arg;
        newIndex++;
    }

    const newLength = getLength(arr);
    // Return the new length of the array
    return newLength;
};

export const getShift = (arr) => {
    // Remove the first element from array
    let removedValue = arr[0];
    const arrLength = getLength(arr);
    let newArr = [];
    for (let i = 1; i < arrLength; i++) {
        let value = arr[i];
        arr[i - 1] = value;
        getPush(newArr, arr[i]);
    }
    arr = newArr;
    const newLength = getLength(arr);
    const valuesToTest = [removedValue, arr, newLength];
    // Return that removed element
    return valuesToTest;
};

export const getSome = (arr, valElement, fnElements) => {
    // Check if any element in the array meets the condition.
    let isElement = false;
    for (const element of arr) {
        isElement = fnElements(element, valElement);
        if (isElement) {
            // Return a boolean
            return isElement;
        }
    }
    return isElement;
};

export const getEvery = (arr, valElement, fnElements) => {
    // All elements in array pass the test implemented by the provided function
    let isElement = true;
    for (const element of arr) {
        isElement = fnElements(element, valElement);
        if (!isElement) {
            // Return a boolean
            return isElement;
        }
    }
    // Return a boolean value
    return isElement;
};

export const getFind = (arr, fnElements) => {
    // First element in array that satisfies the provided testing function
    for (const element of arr) {
        let isElement = fnElements(element);
        if (isElement) {
            // Return the element
            return element;
        }
    }
    // Return undefined if no values satisfy the testing function
    return undefined;
};

export const getFilter = (arr, fnElements) => {
    // Creates an array with the elements from the given array that pass the provided testing function
    const newArr = [];
    for (const element of arr) {
        let isElement = fnElements(element);
        if (isElement) {
            getPush(newArr, element);
        }
    }
    // Return a shallow copy with values that satisfy the testing function or an empty array if no values satisfy the testing function
    return newArr;
};

export const getMap = (arr, fnElements) => {
    // Creates an array with the results of calling a provided function on every element in the calling array.
    const newArr = [];
    for (const element of arr) {
        let isElement = fnElements(element);
        getPush(newArr, isElement);
    }
    // Return a new array with each element being the result of the callback function
    return newArr;
};

export const getFindIndex = (arr, fnElements) => {
    // First element in an array that satisfies the provided testing function
    for (let i = 0; i < getLength(arr); i++) {
        let isElement = fnElements(arr[i]);
        if (isElement) {
            return i;
        }
    }
    // Returns the index element. If no elements satisfy the testing function, -1 is returned.
    return -1;
};

export const getIncludes = (arr, val) => {
    // Array includes a certain value among its entries
    for (let i = 0; i < getLength(arr); i++) {
        let isElement = arr[i];
        if (Object.is(isElement, val)) {
            // Returns boolean
            return true;
        }
    }
    // Returns boolean
    return false;
};

export const getIndexOf = (arr, val) => {
    // First index at which a given element can be found in the array
    for (let i = 0; i < getLength(arr); i++) {
        let isElement = arr[i];
        if (Object.is(isElement, val)) {
            // Returns index
            return i;
        }
    }
    // Returns -1 if it is not present.
    return -1;
};

export const getReduce = (arr, fnElements, initVal) => {
    // Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element.
    let totalPrev = initVal;
    for (let i = 0; i < getLength(arr); i++) {
        fnElements(arr[i], totalPrev);
        totalPrev = fnElements(arr[i], totalPrev);
    }
    // The final result of running the reducer across all elements of the array is a single value.
    return totalPrev;
};

export const getJoin = (arr, separator) => {
    // Creates a new string by concatenating all of the elements in an array separated by commas or a specified separator string.
    //If the array has only one item, then that item will be returned without using the separator.
    let newString;
    let countArr = getLength(arr) - 1;
    console.log(countArr);
    for (let i = countArr; i >= 0; i--) {
        if (i !== countArr) {
            if (separator && separator !== undefined) {
                newString = arr[i] + separator + newString;
            } else if (separator === undefined) {
                separator = ',';
                newString = arr[i] + separator + newString;
            } else {
                newString = separator + arr[i] + newString;
            }
        } else {
            newString = arr[i];
        }
    }
    // Returns a new string with separator
    return newString;
};
