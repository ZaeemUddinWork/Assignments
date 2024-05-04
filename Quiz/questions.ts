
//Questions Start here
let quiz_array:string[] = 
[
    `What is the file extension for TypeScript files?`,
    `Which command is used to compile TypeScript code to JavaScript?`,
    `TypeScript is a superset of which language?`,
    `What does TypeScript compile down to?`,
    `Which keyword is used to define a class in TypeScript?`,
    `Which statement is NOT true about TypeScript?`,
    `Which keyword is used for inheritance in TypeScript?`,
    `What is the purpose of the constructor keyword in a class?`,
    `Can you use plain JavaScript code within a TypeScript project?`,
    `Which keyword is used to define an interface in TypeScript?`,
    `What is the benefit of using interfaces in TypeScript?`,
    `What is the difference between let and const in TypeScript?`,
    `What is the purpose of generics in TypeScript?`,
    `Which keyword is used to define a generic type in TypeScript?`,
    `What is the purpose of the any type in TypeScript?`,
    `Which of these lets you tell your code, "Hey, I trust this variable, even if the compiler isn't sure"?`,
    `Which keyword lets you share a variable or function with other parts of your code?`,
    `When writing let name: string, what are you telling TypeScript about the name variable?`,
    `TypeScript code runs Faster than plain JavaScript code.`,
    `What do you put at the beginning of a line (single line) to comment something out in TypeScript (and JavaScript)?`
]//Questions End here
//Question chouses is here
let choices = {
    "choise0" : ['.js','.ts','.tsx','.jsx'],
    "choise1": ['javac','run','tsc','node'],
    "choise2": ['C++','Java','Python','JavaScript'],
    "choise3": ['Python bytecode','Java bytecode','JavaScript','Machine code'],
    "choise4": ['function','class','struct','object'],
    "choise5": ['It adds static typing to JavaScript','It improves code readability','It runs slower than JavaScript','It can be used with existing JavaScript code'],
    "choise6": ['extends','inherits','super','All of the above'],
    "choise7": ['To define methods','To define properties','To initialize the object','All of the above'],
    "choise8": ['No, TypeScript requires strict typing for everything.','Yes, TypeScript is fully compatible with JavaScript.',],
    "choise9": ['class','interface','type','abstract'],
    "choise10": ['Improves code reusability','Enforces code contracts','Both a and b','Neither a nor b'],
    "choise11": ['let can be reassigned, const cannot.','const is for primitive types only, let for any type.','let is block-scoped, const is function-scoped.','There is no difference.'],
    "choise12": ['To create custom data structures','To improve performance','To define functions that can take multiple arguments','To create reusable components with any data type'],
    "choise13": ['generic','template','<T> (angle brackets)','any'],
    "choise14": [' Used for variables with unknown types at compile time','Avoids type checking for specific variables','Improves code readability','Speeds up compilation time'],
    "choise15": ['maybe','any','trustMe'],
    "choise16": ['share','hide','export'],
    "choise17": ['It can only hold text data (string).',`It's a cool name.`,'It has to start with "name".'],
    "choise18": ['True','False'],
    "choise19": ['#','//','/* */','<!---->'],
    

}
let correct_ans:string[] = ['.ts','tsc','JavaScript','JavaScript',
'class','It runs slower than JavaScript','All of the above',
'All of the above','Yes, TypeScript is fully compatible with JavaScript.',
'interface','Both a and b','let can be reassigned, const cannot.',
'To create reusable components with any data type',
'<T> (angle brackets)','Used for variables with unknown types at compile time','any',
'export','It can only hold text data (string).','True','//']//All questions Corrects ans is here


