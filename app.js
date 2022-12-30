// Simple browser-based 'command-line' todo list.

let quit = false;
let todoList = [];

while (!quit) {
    let input = prompt("\n'new' - add a todo\n 'list' - list all todos\n'delete' - delete a todo\n'quit' - end app");
    input = input.toLowerCase();
    // initial input must be 'new' 'list' 'quit' 'delete' or 'quit'

    switch (input)
    {
        case 'new':
            {
                input = prompt("What's up?").toLowerCase();
                todoList.push(input);
                break;
            }
        case 'list':
            {
                for (let i = 0; i < todoList.length; i++)
                {
                    console.log(`${i}: ${todoList[i]}`);
                }
                break;
            }
        case 'delete':
            {
                input = parseInt(prompt("What is the index of the task you want to remove?"));
                todoList.splice(input, 1);
                break;
            }
        case 'quit':
            quit = true;
            break;
        default:
            console.log("Invalid input");
    }
}