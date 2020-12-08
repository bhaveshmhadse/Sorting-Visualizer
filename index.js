// location.reload();
let array = [];
for (let i = 0; i < 65; i++) {
  array.push(Math.random() * (65 - 1) + 1);
}

async function Shuffle() {
  // refreshpage();
  // refreshpage();
  // document.body.innerHTML = '';
  array.length = 0;
  for (let i = 0; i < 65; i++) {
    array.push(Math.random() * (65 - 1) + 1);
  }
  displayEveryElementOfArray();
}

async function refreshpage() {
  location.reload();
}
let i = 1;
let time = 500;
async function displayArray() {
  for (let j of array) {
    document.getElementById(`${i}`).style.height = `${j * 4}px`;
    i++;
    // document.write('<br>');
  }
}
async function displayEveryElementOfArray() {
  for (let j of array) {
    document.getElementById(`${i}`).style.height = `${j * 4}px`;
    document.getElementById(`${i}`).style.width = '0.0000001px';
    document.getElementById(`${i}`).style.backgroundColor = `rgb(50,${
      (j * 150) / 100
    },${j * (250 / 100)}`;
    i++;
    // document.write('<br>');
  }
  i = 1;
  await sleep(time);
  // document.body.innerHTML = ' ';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertionSort() {
  time = 10;
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
      await sleep(time);
      displayEveryElementOfArray();
    }
    array[j + 1] = current;
  }
  await sleep(time);
  displayArray();
}

async function bubbleSort() {
  time = 10;
  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        await sleep(time);
      }
      displayEveryElementOfArray();
    }
  }
  await sleep(time);
  displayArray();
  // array.length = 0;
}
async function selectionSort() {
  time = 50;
  for (let i = 0; i < array.length; i++) {
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimum]) minimum = j;
    }
    let temp = array[minimum];
    array[minimum] = array[i];
    array[i] = temp;
    await sleep(50);
    displayEveryElementOfArray();
  }
  await sleep(time);
  displayArray();
}

// array.length = 0;

async function quickSort() {
  let quick = setTimeout(partition, 1000, array, 0, 64);
}

async function mSort() {
  let mr = setTimeout(mergesort, 1000, array);
}

async function partition(array, start, end) {
  let pivotelement, leftpointer, rightpointer;
  if (start >= end) {
    return 0;
  }
  pivotelement = start;
  leftpointer = start + 1;
  rightpointer = end;
  while (rightpointer >= leftpointer) {
    if (
      array[leftpointer] > array[pivotelement] &&
      array[rightpointer] < array[pivotelement]
    ) {
      let temp;
      temp = array[leftpointer];
      array[leftpointer] = array[rightpointer];
      array[rightpointer] = temp;
      await sleep(50);
      displayEveryElementOfArray();
    }
    if (array[leftpointer] <= array[pivotelement]) leftpointer += 1;
    if (array[rightpointer] >= array[pivotelement]) rightpointer -= 1;
  }
  temp = array[pivotelement];
  array[pivotelement] = array[rightpointer];
  array[rightpointer] = temp;
  await sleep(50);
  displayEveryElementOfArray();
  pivotelement = rightpointer;
  // document.getElementById(`${rightpointer}`).style.backgroundColor = 'red';
  await sleep(50);
  partition(array, start, pivotelement - 1);
  partition(array, pivotelement + 1, end);
}

async function mergesort(arrays) {
  // document.write('Aya andar');
  let leftpart = [];
  let rightpart = [];
  let middleindex;
  displayEveryElementOfArray();
  if (arrays.length == 1) return arrays;
  middleindex = Math.round(arrays.length / 2);
  leftpart = arrays.slice(0, middleindex);
  rightpart = arrays.slice(middleindex, arrays.length);
  mergesortcombiner(mergesort(leftpart), mergesort(rightpart));
}

async function mergesortcombiner(leftpart, rightpart) {
  let sorted = [];
  let i = o,
    j = 0,
    k = 0;
  while (i < leftpart.length && j < rightpart.length) {
    if (leftpart[i] <= rightpart[j]) {
      sorted[k] = leftpart[i];
      i += 1;
    } else {
      sorted[k] = rightpart[j];
      j += 1;
    }
    k += 1;
  }

  while (i < leftpart.length) {
    sorted[k] = leftpart[i];
    k += 1;
    i += 1;
    await sleep(time);
    displayEveryElementOfArray(time);
  }

  while (j < rightpart.length) {
    sorted[k] = rightpart[j];
    k += 1;
    j += 1;
    await sleep(time);
    displayEveryElementOfArray(time);
  }
  return sorted;
}

let getbubblesort = (document.getElementById('bubble').onclick = bubbleSort);
let selection = (document.getElementById('selection').onclick = selectionSort);
let shuf = (document.getElementById('shuffle').onclick = Shuffle);
let reset = (document.getElementById('reset').onclick = refreshpage);
let quick = (document.getElementById('quicksort').onclick = quickSort);
let merge = (document.getElementById('mergesort').onclick = mSort);
