// merge sort class

class Merge {
  public mergeArray(arr1: number[], arr2: number[]) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  //   final recursive merge sorting
  public sort(arr: number[]) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left: number[] = this.sort(arr.slice(0, mid));
    let right: number[] = this.sort(arr.slice(mid));
    return this.mergeArray(left, right);
  }
}

export default new Merge();
