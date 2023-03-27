//stack은 마지막부터 하나씩 나오는 것, 배열로 하면 편함, 하지만 배열을 사용하지 않는다면
//연결 list를 잘 만들어야함
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0; //내부에서만 쓰는 변수
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string) {
    this._size++;
    const node: StackNode = { value, next: this.head };
    this.head = node;
  }
  pop(): string {
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

const stack = new StackImpl();
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
