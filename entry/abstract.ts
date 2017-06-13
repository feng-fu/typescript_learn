// 抽象类

// 抽象类作为其它派生类的基类使用。 它们一般不会直接被实例化

abstract class Goff {
  abstract makeSound(): void
  move():void {
    console.log('roamng the earch...')
  }
}

// 抽象类中的抽象方法不包含具体实现并且在派生类中实现，接口方法的语法和借口方法类似，两者都是定义方法签名但不包含方法体。
// 然而，抽象方法必须包含`abstract` 关键字并且可以包含访问修饰符


abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

//   Error >>>>>>        new DepartMent()    抽象类不能实例化