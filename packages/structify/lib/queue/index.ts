// A basic implementation of queue
class Queue {
  array: any[];
  constructor(array: any[]) {
    this.array = [];
    if (array) this.array = array;
  }

  // Buffering or getting the array
  getBuffer = () => {
    return this.array.slice();
  };

  // Checking if queue is emptyz
  isEmpty = () => {
    return this.array.length === 0;
  };

  // Enqueueing the queue
  enqueue = (element: any) => {
    return this.array.push(element);
  };

  //   dequeueing the queue
  dequeue = () => {
    return this.array.shift();
  };
}

export default Queue;
