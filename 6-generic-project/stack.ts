//stack은 마지막부터 하나씩 나오는 것, 배열로 하면 편함, 하지만 배열을 사용하지 않는다면
//연결 list를 잘 만들어야함
interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0; //내부에서만 쓰는 변수
  private head?: StackNode<T>;
  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("stack is empty!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    //null == undefined, null과 undefined는 다르지만 ==값을 확인만 하는경우는 거를수있다.
    if (this.head == null) {
      throw new Error("stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl<string>(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);

while (stack2.size !== 0) {
  console.log(stack2.pop());
}
