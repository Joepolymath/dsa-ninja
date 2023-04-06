// insertion sort class

class Insertion {
  public sort(arr: number[]) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
      currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
}

export default new Insertion();
