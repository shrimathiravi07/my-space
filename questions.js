// ========== Python Quiz Questions Database ==========
// Shrimathi's Space - Python Learning Quiz
// All questions are Intermediate Level - Completely New Set!

const pythonQuestions = {
    // ========== THEORY QUESTIONS (Intermediate Level) ==========
    theory: [
        {
            id: 1,
            question: "What is the main difference between Python 2 and Python 3?",
            options: [
                "Python 3 is slower than Python 2",
                "print() is a function in Python 3, but a statement in Python 2",
                "Python 2 supports Unicode, Python 3 doesn't",
                "Python 3 cannot use classes"
            ],
            correct: 1,
            explanation: "In Python 2, print was a statement (print 'hello'), but in Python 3, it's a function requiring parentheses (print('hello')). Python 3 also has better Unicode support and integer division behavior."
        },
        {
            id: 2,
            question: "What is the purpose of the 'with' statement in Python?",
            options: [
                "To create loops",
                "To define classes",
                "To handle resource management automatically",
                "To import modules"
            ],
            correct: 2,
            explanation: "The 'with' statement is used for context management. It ensures proper acquisition and release of resources (like files, database connections). Example: with open('file.txt') as f: - automatically closes the file."
        },
        {
            id: 3,
            question: "What is monkey patching in Python?",
            options: [
                "A debugging technique",
                "Dynamically modifying a class or module at runtime",
                "A way to create subclasses",
                "An error handling method"
            ],
            correct: 1,
            explanation: "Monkey patching refers to dynamically modifying or extending classes/modules at runtime. While powerful, it can make code harder to debug and maintain, so use it carefully."
        },
        {
            id: 4,
            question: "What is the GIL in Python?",
            options: [
                "Global Import Library",
                "General Input Logger",
                "Global Interpreter Lock",
                "Graphical Interface Layer"
            ],
            correct: 2,
            explanation: "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode at once. This affects multi-threaded Python programs."
        },
        {
            id: 5,
            question: "What does the @staticmethod decorator do?",
            options: [
                "Makes the method run faster",
                "Creates a method that doesn't receive self or cls as first argument",
                "Makes the method private",
                "Prevents the method from being overridden"
            ],
            correct: 1,
            explanation: "@staticmethod creates a method that doesn't receive implicit first argument (self for instance methods, cls for class methods). It's essentially a regular function inside a class."
        },
        {
            id: 6,
            question: "What is the difference between @classmethod and @staticmethod?",
            options: [
                "They are exactly the same",
                "@classmethod receives class as first argument, @staticmethod receives nothing",
                "@staticmethod is faster",
                "@classmethod only works with inheritance"
            ],
            correct: 1,
            explanation: "@classmethod receives the class (cls) as first argument, allowing access to class attributes. @staticmethod receives no implicit arguments - it's just a regular function namespaced inside the class."
        },
        {
            id: 7,
            question: "What is a Python namespace?",
            options: [
                "A file containing Python code",
                "A container holding names mapped to objects",
                "A type of variable",
                "A debugging tool"
            ],
            correct: 1,
            explanation: "A namespace is a container where names (variables, functions, classes) are mapped to objects. Python has local, enclosing, global, and built-in namespaces (LEGB rule)."
        },
        {
            id: 8,
            question: "What is __slots__ used for in Python classes?",
            options: [
                "To create private methods",
                "To limit memory usage by restricting instance attributes",
                "To define required parameters",
                "To create class constants"
            ],
            correct: 1,
            explanation: "__slots__ restricts which attributes an instance can have, reducing memory by not using __dict__ for each instance. Useful when creating many instances of a class."
        },
        {
            id: 9,
            question: "What is duck typing in Python?",
            options: [
                "A naming convention for variables",
                "Determining type by behavior rather than explicit type checking",
                "A way to create bird-related classes",
                "An error type"
            ],
            correct: 1,
            explanation: "Duck typing means 'if it walks like a duck and quacks like a duck, it's a duck.' Python cares about what an object can do (methods/attributes) rather than its actual type."
        },
        {
            id: 10,
            question: "What is the purpose of __repr__ method?",
            options: [
                "To delete objects",
                "To return an official string representation of an object",
                "To compare objects",
                "To copy objects"
            ],
            correct: 1,
            explanation: "__repr__ returns an 'official' string representation, ideally one that could recreate the object. It's used by repr() and in the interactive interpreter. __str__ is for user-friendly display."
        },
        {
            id: 11,
            question: "What is a Python virtual environment?",
            options: [
                "A virtual machine running Python",
                "An isolated Python installation with its own packages",
                "A testing framework",
                "A cloud-based Python IDE"
            ],
            correct: 1,
            explanation: "A virtual environment is an isolated Python installation that maintains its own packages and dependencies. It prevents conflicts between projects requiring different package versions."
        },
        {
            id: 12,
            question: "What is the difference between deep copy and shallow copy?",
            options: [
                "Deep copy is faster",
                "Shallow copy creates new object but references nested objects; deep copy creates completely independent copy",
                "They are the same",
                "Deep copy only works with lists"
            ],
            correct: 1,
            explanation: "Shallow copy creates a new object but inserts references to nested objects. Deep copy creates completely independent copies of all nested objects recursively. Use copy.deepcopy() for deep copies."
        },
        {
            id: 13,
            question: "What is a context manager in Python?",
            options: [
                "A file management system",
                "An object implementing __enter__ and __exit__ methods",
                "A memory manager",
                "A variable scope handler"
            ],
            correct: 1,
            explanation: "A context manager is an object that defines __enter__ and __exit__ methods, used with the 'with' statement. It handles setup and cleanup operations automatically."
        },
        {
            id: 14,
            question: "What is the purpose of the 'yield' keyword?",
            options: [
                "To end a function",
                "To pause function execution and return a value in generators",
                "To create errors",
                "To define loops"
            ],
            correct: 1,
            explanation: "'yield' pauses function execution and returns a value. The function becomes a generator, maintaining its state between calls. Memory-efficient for large sequences."
        },
        {
            id: 15,
            question: "What are Python magic methods (dunder methods)?",
            options: [
                "Methods for creating magic effects",
                "Special methods with double underscores that Python calls automatically",
                "Encrypted methods",
                "Methods that cannot be overridden"
            ],
            correct: 1,
            explanation: "Magic/dunder methods (like __init__, __str__, __add__) are special methods Python calls automatically for certain operations. They enable operator overloading and custom behavior."
        },
        {
            id: 16,
            question: "What is the difference between 'is' and '==' operators?",
            options: [
                "They are identical",
                "'is' checks identity (same object), '==' checks equality (same value)",
                "'==' is faster",
                "'is' only works with numbers"
            ],
            correct: 1,
            explanation: "'is' checks if two variables point to the exact same object in memory (identity). '==' checks if values are equal. Two different objects can be equal (==) but not identical (is)."
        },
        {
            id: 17,
            question: "What is __name__ == '__main__' used for?",
            options: [
                "To define the main function",
                "To check if script is run directly vs imported as module",
                "To name the program",
                "To create the entry point"
            ],
            correct: 1,
            explanation: "When a script runs directly, __name__ is '__main__'. When imported as a module, __name__ is the module name. This check allows code to run only when executed directly."
        },
        {
            id: 18,
            question: "What is the purpose of the 'nonlocal' keyword?",
            options: [
                "To create global variables",
                "To modify variables in the enclosing (but not global) scope",
                "To delete local variables",
                "To import external modules"
            ],
            correct: 1,
            explanation: "'nonlocal' allows modification of variables in the enclosing function's scope (closure). Unlike 'global' which refers to module-level scope, 'nonlocal' refers to the nearest enclosing scope."
        },
        {
            id: 19,
            question: "What is a Python descriptor?",
            options: [
                "A file description",
                "An object defining __get__, __set__, or __delete__ methods",
                "A type of comment",
                "A debugging tool"
            ],
            correct: 1,
            explanation: "A descriptor is an object that defines __get__, __set__, or __delete__ methods. They control attribute access on other objects. Properties, classmethod, and staticmethod are implemented using descriptors."
        },
        {
            id: 20,
            question: "What is method resolution order (MRO)?",
            options: [
                "The order methods are defined in a class",
                "The order Python searches for methods in class hierarchy",
                "The speed of method execution",
                "A sorting algorithm"
            ],
            correct: 1,
            explanation: "MRO determines the order Python searches through the inheritance hierarchy to find methods. Python uses C3 linearization algorithm. View it with ClassName.__mro__ or ClassName.mro()."
        },
        {
            id: 21,
            question: "What is a metaclass in Python?",
            options: [
                "A class for metadata",
                "A class whose instances are classes themselves",
                "An abstract class",
                "A deprecated feature"
            ],
            correct: 1,
            explanation: "A metaclass is a 'class of a class' - it defines how classes behave. When you create a class, Python uses a metaclass (default: type) to create it. Used for advanced customization."
        },
        {
            id: 22,
            question: "What does the walrus operator (:=) do?",
            options: [
                "Compares two values",
                "Assigns a value and returns it in a single expression",
                "Creates a loop",
                "Defines a function"
            ],
            correct: 1,
            explanation: "The walrus operator (:=) assigns a value to a variable as part of an expression. Example: if (n := len(a)) > 10: ... This avoids computing the same value twice."
        },
        {
            id: 23,
            question: "What is the purpose of __all__ in a Python module?",
            options: [
                "To list all variables in the module",
                "To define what gets exported when 'from module import *' is used",
                "To count all objects",
                "To create documentation"
            ],
            correct: 1,
            explanation: "__all__ is a list of strings defining what symbols will be exported when 'from module import *' is used. It provides explicit control over the public interface of a module."
        },
        {
            id: 24,
            question: "What is a coroutine in Python?",
            options: [
                "A type of loop",
                "A function that can pause and resume using async/await",
                "A mathematical function",
                "A debugging technique"
            ],
            correct: 1,
            explanation: "A coroutine is a function defined with 'async def' that can pause execution with 'await'. Used for asynchronous programming, allowing concurrent execution without threads."
        },
        {
            id: 25,
            question: "What is the difference between iterable and iterator?",
            options: [
                "They are the same",
                "Iterable implements __iter__, iterator implements __iter__ and __next__",
                "Iterator is faster",
                "Iterable can only be used once"
            ],
            correct: 1,
            explanation: "An iterable is any object that can return an iterator (has __iter__). An iterator is an object that returns successive items (has __next__). Lists are iterable; list_iterator is an iterator."
        },
        {
            id: 26,
            question: "What does the 'finally' block do in exception handling?",
            options: [
                "Catches all exceptions",
                "Executes code regardless of whether an exception occurred",
                "Prevents exceptions from happening",
                "Only runs if there's an exception"
            ],
            correct: 1,
            explanation: "The 'finally' block always executes, whether an exception occurred or not. It's used for cleanup code like closing files or releasing resources that must always run."
        },
        {
            id: 27,
            question: "What is a frozen set in Python?",
            options: [
                "A set stored in cold storage",
                "An immutable version of a set",
                "A set with only numbers",
                "A deprecated data type"
            ],
            correct: 1,
            explanation: "A frozenset is an immutable set - once created, you cannot add or remove elements. Unlike regular sets, frozensets can be used as dictionary keys or elements of other sets."
        },
        {
            id: 28,
            question: "What is the purpose of __call__ method?",
            options: [
                "To call other methods",
                "To make an object callable like a function",
                "To create phone calls",
                "To invoke constructors"
            ],
            correct: 1,
            explanation: "__call__ makes instances of a class callable like functions. When you do obj(), Python calls obj.__call__(). Useful for creating function-like objects with state."
        },
        {
            id: 29,
            question: "What is a closure in Python?",
            options: [
                "A way to close files",
                "A function that retains access to variables from its enclosing scope",
                "A type of error",
                "A method to end programs"
            ],
            correct: 1,
            explanation: "A closure is a nested function that captures and remembers values from its enclosing scope, even after the outer function has finished executing. Useful for data encapsulation."
        },
        {
            id: 30,
            question: "What does **kwargs represent in function parameters?",
            options: [
                "Required arguments",
                "A dictionary of keyword arguments",
                "Double multiplication",
                "Error arguments"
            ],
            correct: 1,
            explanation: "**kwargs collects all keyword arguments passed to a function into a dictionary. Combined with *args, you can create functions that accept any number and type of arguments."
        }
    ],

    // ========== PROGRAM OUTPUT QUESTIONS (Intermediate Level) ==========
    program: [
        {
            id: 31,
            question: "What is the output of the following code?",
            code: `x = [1, 2, 3, 4, 5]
print(x[1:4:2])`,
            options: [
                "[2, 4]",
                "[2, 3, 4]",
                "[1, 3]",
                "[2, 3]"
            ],
            correct: 0,
            explanation: "Slicing syntax is [start:stop:step]. x[1:4:2] starts at index 1, stops before 4, with step 2. So indices 1 and 3 give values 2 and 4. Result: [2, 4]."
        },
        {
            id: 32,
            question: "What will be the output?",
            code: `def modify(lst):
    lst = [10, 20, 30]
    
nums = [1, 2, 3]
modify(nums)
print(nums)`,
            options: [
                "[10, 20, 30]",
                "[1, 2, 3]",
                "[]",
                "Error"
            ],
            correct: 1,
            explanation: "Reassigning lst inside the function creates a new local variable. The original nums list is unchanged because we didn't modify it - we created a new list. To modify, use lst[:] = [10,20,30]."
        },
        {
            id: 33,
            question: "What is the output?",
            code: `print({**{'a': 1}, **{'b': 2}})`,
            options: [
                "{'a': 1, 'b': 2}",
                "[('a', 1), ('b', 2)]",
                "Error",
                "{'ab': 12}"
            ],
            correct: 0,
            explanation: "The ** operator unpacks dictionaries. Combining them with {**dict1, **dict2} merges dictionaries. This is a clean way to merge dicts in Python 3.5+."
        },
        {
            id: 34,
            question: "What will this code print?",
            code: `x = 'abc'
y = x.replace('b', 'B').upper()
print(x, y)`,
            options: [
                "ABC ABC",
                "abc ABC",
                "aBc ABC",
                "abc aBc"
            ],
            correct: 1,
            explanation: "Strings are immutable. replace() creates a new string 'aBc', then upper() creates 'ABC'. The original x remains 'abc' unchanged. Method chaining doesn't modify the original."
        },
        {
            id: 35,
            question: "What is the output?",
            code: `print([x for x in range(10) if x % 2 == 0 if x % 3 == 0])`,
            options: [
                "[0, 6]",
                "[0, 2, 4, 6, 8]",
                "[0, 3, 6, 9]",
                "[6]"
            ],
            correct: 0,
            explanation: "Multiple if conditions in list comprehension act as AND. Numbers must be both even (x%2==0) AND divisible by 3 (x%3==0). Only 0 and 6 satisfy both in range(10)."
        },
        {
            id: 36,
            question: "What will be printed?",
            code: `class A:
    x = 1
    
class B(A):
    pass
    
class C(A):
    pass

B.x = 2
print(A.x, B.x, C.x)`,
            options: [
                "1 2 2",
                "2 2 2",
                "1 2 1",
                "1 1 1"
            ],
            correct: 2,
            explanation: "B.x = 2 creates a new class attribute for B, not modifying A.x. C still inherits from A and sees A.x = 1. Each class can have its own class attributes."
        },
        {
            id: 37,
            question: "What is the output?",
            code: `print(list(filter(None, [0, 1, '', 'a', [], [1], None])))`,
            options: [
                "[1, 'a', [1]]",
                "[0, 1, '', 'a', [], [1], None]",
                "[True, True, False, True, False, True, False]",
                "Error"
            ],
            correct: 0,
            explanation: "filter(None, iterable) filters out falsy values. Falsy: 0, '', [], None. Truthy: 1, 'a', [1]. Only truthy values remain in the result."
        },
        {
            id: 38,
            question: "What will this print?",
            code: `a = [1, 2, 3]
b = a[:]
a[0] = 100
print(b[0])`,
            options: [
                "100",
                "1",
                "Error",
                "None"
            ],
            correct: 1,
            explanation: "a[:] creates a shallow copy of the list. b is a new list with the same values. Modifying a doesn't affect b. They are different objects in memory."
        },
        {
            id: 39,
            question: "What is the output?",
            code: `print(sorted([3, 1, 4, 1, 5], reverse=True)[:3])`,
            options: [
                "[5, 4, 3]",
                "[1, 1, 3]",
                "[3, 1, 4]",
                "[5, 4, 3, 1, 1]"
            ],
            correct: 0,
            explanation: "sorted() with reverse=True sorts descending: [5, 4, 3, 1, 1]. Then [:3] takes the first 3 elements: [5, 4, 3]. This is an efficient way to get top N values."
        },
        {
            id: 40,
            question: "What will be printed?",
            code: `def f(x, y={}):
    y[x] = x
    return y

print(f(1))
print(f(2))`,
            options: [
                "{1: 1}\n{2: 2}",
                "{1: 1}\n{1: 1, 2: 2}",
                "{1: 1, 2: 2}\n{1: 1, 2: 2}",
                "Error"
            ],
            correct: 1,
            explanation: "Default mutable arguments (like dict) persist between calls! The same dict is reused. First call: {1:1}. Second call adds to same dict: {1:1, 2:2}. Always use None as default instead."
        },
        {
            id: 41,
            question: "What is the output?",
            code: `print(list(zip('abc', [1, 2, 3, 4])))`,
            options: [
                "[('a', 1), ('b', 2), ('c', 3), (None, 4)]",
                "[('a', 1), ('b', 2), ('c', 3)]",
                "[('a', 1, 2, 3, 4), ('b',), ('c',)]",
                "Error"
            ],
            correct: 1,
            explanation: "zip() stops when the shortest iterable is exhausted. 'abc' has 3 characters, so only 3 pairs are created. The 4 from the list is ignored. Use itertools.zip_longest to include all."
        },
        {
            id: 42,
            question: "What will this code output?",
            code: `x = {i: i**2 for i in range(3)}
print(list(x.values()))`,
            options: [
                "[0, 1, 4]",
                "[0, 1, 2]",
                "[(0, 0), (1, 1), (2, 4)]",
                "{0: 0, 1: 1, 2: 4}"
            ],
            correct: 0,
            explanation: "Dictionary comprehension creates {0:0, 1:1, 2:4}. The values() method returns dict_values([0, 1, 4]), and list() converts it to [0, 1, 4]."
        },
        {
            id: 43,
            question: "What is the output?",
            code: `print(''.join(['P', 'y', 't', 'h', 'o', 'n']))`,
            options: [
                "['P', 'y', 't', 'h', 'o', 'n']",
                "P y t h o n",
                "Python",
                "Error"
            ],
            correct: 2,
            explanation: "''.join(iterable) concatenates strings with the separator (empty string here). Each character is joined without any separator, creating 'Python'."
        },
        {
            id: 44,
            question: "What will be printed?",
            code: `a = (1, 2, [3, 4])
a[2].append(5)
print(a)`,
            options: [
                "(1, 2, [3, 4, 5])",
                "Error - tuple is immutable",
                "(1, 2, [3, 4], 5)",
                "(1, 2, [5])"
            ],
            correct: 0,
            explanation: "Tuples are immutable, but the list inside can be modified! We're not changing the tuple's reference to the list - we're changing the list itself. The tuple still contains the same list object."
        },
        {
            id: 45,
            question: "What is the output?",
            code: `print(any([False, 0, '', None, 'hello']))`,
            options: [
                "False",
                "True",
                "'hello'",
                "None"
            ],
            correct: 1,
            explanation: "any() returns True if at least one element is truthy. 'hello' is truthy, so any() returns True. all() would return False since most elements are falsy."
        },
        {
            id: 46,
            question: "What will this print?",
            code: `x = [1, 2, 3]
y = [4, 5, 6]
print([*x, *y])`,
            options: [
                "[[1, 2, 3], [4, 5, 6]]",
                "[1, 2, 3, 4, 5, 6]",
                "[(1, 4), (2, 5), (3, 6)]",
                "Error"
            ],
            correct: 1,
            explanation: "The * operator unpacks iterables. [*x, *y] unpacks both lists into a new list, effectively concatenating them. This is cleaner than x + y for multiple lists."
        },
        {
            id: 47,
            question: "What is the output?",
            code: `d = {'a': 1, 'b': 2, 'c': 3}
d.pop('b')
print(list(d.keys()))`,
            options: [
                "['a', 'b', 'c']",
                "['a', 'c']",
                "['a', 'c', 2]",
                "Error"
            ],
            correct: 1,
            explanation: "pop('b') removes key 'b' and returns its value (2). The remaining keys are 'a' and 'c'. keys() returns dict_keys, which list() converts to ['a', 'c']."
        },
        {
            id: 48,
            question: "What will be printed?",
            code: `print(isinstance(True, int))`,
            options: [
                "True",
                "False",
                "Error",
                "None"
            ],
            correct: 0,
            explanation: "In Python, bool is a subclass of int! True is actually 1 and False is 0 when used as integers. So isinstance(True, int) returns True. You can even do True + True = 2."
        },
        {
            id: 49,
            question: "What is the output?",
            code: `def gen():
    yield 1
    yield 2
    yield 3

g = gen()
print(next(g) + next(g))`,
            options: [
                "1",
                "2",
                "3",
                "6"
            ],
            correct: 2,
            explanation: "gen() creates a generator. First next(g) yields 1, second next(g) yields 2. 1 + 2 = 3. Generators remember their state between calls."
        },
        {
            id: 50,
            question: "What will this code output?",
            code: `print(set([1, 1, 2, 2, 3, 3]) == {1, 2, 3})`,
            options: [
                "True",
                "False",
                "{1, 2, 3}",
                "Error"
            ],
            correct: 0,
            explanation: "set([1,1,2,2,3,3]) removes duplicates, creating {1,2,3}. This equals {1,2,3} created with set literal. Sets with same elements are equal regardless of how they were created."
        },
        {
            id: 51,
            question: "What is the output?",
            code: `x = 'hello world'
print(x.title())`,
            options: [
                "HELLO WORLD",
                "hello world",
                "Hello World",
                "Hello world"
            ],
            correct: 2,
            explanation: "title() capitalizes the first letter of each word. 'hello world' becomes 'Hello World'. Different from capitalize() which only capitalizes the first letter of the string."
        },
        {
            id: 52,
            question: "What will be printed?",
            code: `from functools import reduce
print(reduce(lambda a, b: a * b, [1, 2, 3, 4]))`,
            options: [
                "10",
                "24",
                "[1, 2, 6, 24]",
                "Error"
            ],
            correct: 1,
            explanation: "reduce applies the function cumulatively: 1*2=2, 2*3=6, 6*4=24. It 'reduces' the list to a single value. This calculates factorial of 4."
        },
        {
            id: 53,
            question: "What is the output?",
            code: `print(bin(10)[2:])`,
            options: [
                "0b1010",
                "1010",
                "10",
                "2"
            ],
            correct: 1,
            explanation: "bin(10) returns '0b1010' (binary representation). [2:] slices off the '0b' prefix, leaving just '1010'. Similarly, hex() returns '0x...' and oct() returns '0o...'."
        },
        {
            id: 54,
            question: "What will this print?",
            code: `print([i for i in range(5)][::-1])`,
            options: [
                "[0, 1, 2, 3, 4]",
                "[4, 3, 2, 1, 0]",
                "[4, 3, 2, 1]",
                "Error"
            ],
            correct: 1,
            explanation: "First, list comprehension creates [0, 1, 2, 3, 4]. Then [::-1] reverses it to [4, 3, 2, 1, 0]. This is equivalent to list(reversed(range(5)))."
        },
        {
            id: 55,
            question: "What is the output?",
            code: `x = {'a': 1, 'b': 2}
y = {'b': 3, 'c': 4}
x.update(y)
print(x)`,
            options: [
                "{'a': 1, 'b': 2}",
                "{'a': 1, 'b': 3, 'c': 4}",
                "{'a': 1, 'b': 2, 'c': 4}",
                "{'b': 3, 'c': 4}"
            ],
            correct: 1,
            explanation: "update() merges y into x. Existing key 'b' gets overwritten with y's value (3). New key 'c' is added. Result: {'a': 1, 'b': 3, 'c': 4}."
        },
        {
            id: 56,
            question: "What will be printed?",
            code: `print(round(2.5), round(3.5))`,
            options: [
                "3 4",
                "2 4",
                "2 3",
                "3 3"
            ],
            correct: 1,
            explanation: "Python 3 uses banker's rounding (round half to even). 2.5 rounds to 2 (nearest even), 3.5 rounds to 4 (nearest even). This reduces cumulative rounding bias."
        },
        {
            id: 57,
            question: "What is the output?",
            code: `print(list(enumerate(['a', 'b', 'c'], start=1)))`,
            options: [
                "[(0, 'a'), (1, 'b'), (2, 'c')]",
                "[(1, 'a'), (2, 'b'), (3, 'c')]",
                "[('a', 1), ('b', 2), ('c', 3)]",
                "['1a', '2b', '3c']"
            ],
            correct: 1,
            explanation: "enumerate() pairs indices with values. start=1 makes counting begin from 1 instead of 0. Result is (index, value) tuples starting from 1."
        },
        {
            id: 58,
            question: "What will this print?",
            code: `print('abc'.center(7, '*'))`,
            options: [
                "**abc**",
                "***abc***",
                "abc****",
                "****abc"
            ],
            correct: 0,
            explanation: "center(width, char) pads both sides to reach the specified width. 'abc' is 3 chars, needs 4 more to reach 7. 2 asterisks on left, 2 on right: '**abc**'."
        },
        {
            id: 59,
            question: "What is the output?",
            code: `x = [lambda i=i: i for i in range(3)]
print([f() for f in x])`,
            options: [
                "[0, 0, 0]",
                "[2, 2, 2]",
                "[0, 1, 2]",
                "Error"
            ],
            correct: 2,
            explanation: "The trick is i=i in lambda - it captures i's value at each iteration, not the variable. Without it, all lambdas would use the final value of i (2). With it: [0, 1, 2]."
        },
        {
            id: 60,
            question: "What will be printed?",
            code: `print(max('hello', key=lambda x: x.lower()))`,
            options: [
                "h",
                "o",
                "5",
                "Error"
            ],
            correct: 1,
            explanation: "max() on a string compares characters. With key=lambda x: x.lower(), comparison is case-insensitive (though all letters are lowercase anyway). 'o' has the highest ASCII value among h,e,l,l,o."
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pythonQuestions;
}
