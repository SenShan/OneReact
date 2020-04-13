import Student from './Student';

class MingStudent extends Student {
  constructor() {
    super('小明', '女', 23);
  }
  getDescription(): string {
    return 'super=' + super.getDescription();
  }
}
