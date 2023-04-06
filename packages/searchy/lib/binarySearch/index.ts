class Binary {
  public search(arr: number[], elem: number) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
  }
}

export default new Binary();
