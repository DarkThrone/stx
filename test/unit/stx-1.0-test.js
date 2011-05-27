/**
 * Created by Simbiotic Design.
 * User: Geronimo
 * Date: 26/05/11
 * Time: 09:02
 */
module('Module 1 - Stack consistency');

test('Size & isEmpty consistency Test', function(){
    expect(8);
    var q = stx();

    //Testing if the stack is empty
    ok(q.isEmpty(), "q.isEmpty() OK");

    //Testing size()
    equals(q.size(), 0, "size works correctly");

    //let's push some things
    var number = 1;
    var string = 'abc';
    var bool = true;
    var array = [1, 2, 3];
    var date = new Date();

    q.push(number);
    q.push(string);
    q.push(bool);
    q.push(array);
    q.push(date);

    q.debug();

    equals(q.isEmpty(), false, "The stack is not empty anymore");

    equals(q.size(), 5, "Size displays the correct length of the stack");

    //pop all the elements
    q.pop();
    q.pop();
    q.pop();
    q.pop();
    q.pop();

    ok(q.isEmpty(), "The stack is empty againe");

    equals(q.size(), 0, "Size displays the correct length of the stack");

    //keep popping
    q.pop();
    q.pop();
    q.pop();
    q.pop();

    ok(q.isEmpty(), "isEmpty keeps consistency although popping inexistente elements");

    equals(q.size(), 0, "Size is consistent although popping inexistente elements");
});

test('Pushing, popping & peeking Consistency Test', function(){
    expect(20);

    //let's create a stack
    var q = stx();

    //Testing if the stack is empty
    ok(q.isEmpty(), "q.isEmpty() OK");

    //Testing size()
    equals(q.size(), 0, "size works correctly");

    //let's push some things
    var number = 1;
    var string = 'abc';
    var bool = true;
    var array = [1, 2, 3];
    var date = new Date();

    //First test if push an element
    q.push(number);
    equals(q.size(), 1, 'First item pushed correctly');
    //now test if it is the SAME element
    strictEqual(q.peek(), number, 'q.peek() is number');
    q.push(string);
    equals(q.size(), 2, 'Second item pushed correctly');
    strictEqual(q.peek(), string, 'q.peek() is string');
    q.push(bool);
    equals(q.size(), 3, 'Third item pushed correctly');
    strictEqual(q.peek(), bool, 'q.peek() is bool');
    q.push(array);
    equals(q.size(), 4, 'Fourth item pushed correctly');
    deepEqual(q.peek(), array, 'q.peek() is array');
    q.push(date);
    equals(q.size(), 5, 'Fifth item pushed correctly');
    strictEqual(q.peek(), date, 'q.peek() is date');

    //Now we start popping elements
    q.pop();
    equals(q.size(), 4, 'Fifth item popped correctly');
    q.pop();
    equals(q.size(), 3, 'Fourth item popped correctly');
    q.pop();
    equals(q.size(), 2, 'Third item popped correctly');
    q.pop();
    equals(q.size(), 1, 'Second item popped correctly');
    q.pop();
    equals(q.size(), 0, 'First item popped correctly');

    //Now the queue is empty again
    ok(q.isEmpty(), "q.isEmpty still works");

    //Now we test for undefined
    strictEqual(q.peek(), undefined, "An empty stack returns undefined");
    strictEqual(q.pop(), undefined, 'Popping an empty queue returns undefined');

});