class Greeter{
  saySomething(message: string = 'whats up'){
    return message +' something';
  }
}

var gretter = new Greeter();

gretter.saySomething('hello');
