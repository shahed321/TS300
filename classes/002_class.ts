class Student {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const student = new Student("Jane");
  
  console.log(student.getName()); // person.name isn't accessible from outside the class since it's private