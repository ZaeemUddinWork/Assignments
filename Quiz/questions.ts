
//Questions Start here
let quiz_array = 
[
   {
    question:`What is the file extension for TypeScript files?`, // Question
    choises:['.js','.ts','.tsx','.jsx'], //Choices
    correct_ans:'.ts', // question Corrects ans
   },
   {
    question:`Which command is used to compile TypeScript code to JavaScript?`, // Question
    choises:['javac','run','tsc','node'], //Choices
    correct_ans:'tsc', // question Corrects ans
   },  
   {
    question:`TypeScript is a superset of which language?`, // Question
    choises:['C++','Java','Python','JavaScript'], //Choices
    correct_ans:'JavaScript', // question Corrects ans
   },
   {
    question:`What does TypeScript compile down to?`, // Question
    choises:['Python bytecode','Java bytecode','JavaScript','Machine code'], //Choices
    correct_ans:'JavaScript', // question Corrects ans
   },
   {
    question:`Which keyword is used to define a class in TypeScript?`, // Question
    choises:['function','class','struct','object'], //Choices
    correct_ans:'class', // question Corrects ans
   },
   {
    question:`Which statement is NOT true about TypeScript?`, // Question
    choises:['It adds static typing to JavaScript','It improves code readability','It runs slower than JavaScript','It can be used with existing JavaScript code'], //Choices
    correct_ans:'It runs slower than JavaScript',
   }, 
   {
    question:`Which keyword is used for inheritance in TypeScript?`, // Question
    choises:['extends','inherits','super','All of the above'], //Choices
    correct_ans:'All of the above', // question Corrects ans
   },
   {
    question:`What is the purpose of the constructor keyword in a class?`, // Question
    choises:['To define methods','To define properties','To initialize the object','All of the above'], //Choices
    correct_ans:'All of the above', // question Corrects ans
   },
   {
    question: `Can you use plain JavaScript code within a TypeScript project?`, // Question
    choises:['No, TypeScript requires strict typing for everything.','Yes, TypeScript is fully compatible with JavaScript.'], //Choices
    correct_ans:'Yes, TypeScript is fully compatible with JavaScript.', // question Corrects ans
   },  
   {
    question: `Which keyword is used to define an interface in TypeScript?`,  // Question
    choises:['class','interface','type','abstract'], //Choices
    correct_ans:'interface', // question Corrects ans
   },  
   {
    question:  `What is the benefit of using interfaces in TypeScript?`, // Question
    choises:['Improves code reusability','Enforces code contracts','Both a and b','Neither a nor b'], //Choices
    correct_ans:'Both a and b', // question Corrects ans
   },    
   {
    question: `What is the difference between let and const in TypeScript?`, // Question
    choises:['let can be reassigned, const cannot.','const is for primitive types only, let for any type.','let is block-scoped, const is function-scoped.','There is no difference.'], //Choices
    correct_ans:'let can be reassigned, const cannot.', // question Corrects ans
   },    
   {
    question: `What is the purpose of generics in TypeScript?`, // Question
    choises:['To create custom data structures','To improve performance','To define functions that can take multiple arguments','To create reusable components with any data type'], //Choices
    correct_ans:'To create reusable components with any data type', // question Corrects ans
   },   
   {
    question:`Which keyword is used to define a generic type in TypeScript?`, // Question
    choises:['generic','template','<T> (angle brackets)','any'], //Choices
    correct_ans:'<T> (angle brackets)', // question Corrects ans
   },    
   {
    question:`What is the purpose of the any type in TypeScript?`, // Question
    choises:[' Used for variables with unknown types at compile time','Avoids type checking for specific variables','Improves code readability','Speeds up compilation time'], //Choices
    correct_ans:'Used for variables with unknown types at compile time', // question Corrects ans
   },  
   {
    question:`Which of these lets you tell your code, "Hey, I trust this variable, even if the compiler isn't sure"?`, // Question
    choises:['maybe','any','trustMe'], //Choices
    correct_ans:'any', // question Corrects ans
   },    
   {
    question: `Which keyword lets you share a variable or function with other parts of your code?`, // Question
    choises:['share','hide','export'], //Choices
    correct_ans:'export', // question Corrects ans
   },   
   {
    question: `When writing let name: string, what are you telling TypeScript about the name variable?`, // Question
    choises:['It can only hold text data (string).',`It's a cool name.`,'It has to start with "name".'], //Choices
    correct_ans:'It can only hold text data (string).', // question Corrects ans
   },   
   {
    question:`TypeScript code runs Faster than plain JavaScript code.`, // Question
    choises:['True','False'], //Choices
    correct_ans:'True', // question Corrects ans
   },      
   {
    question:`What do you put at the beginning of a line (single line) to comment something out in TypeScript (and JavaScript)?`, // Question
    choises:['#','//','/* */','<!---->'], //Choices
    correct_ans:'//', // question Corrects ans
   },    
   
    
    
    
]//Questions End here



 export default quiz_array;