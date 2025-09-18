| Async/Await                      | .then() Chain                    |
| -------------------------------- | -------------------------------- |
| `const response = await axios()` | `axios().then(response => … )`   |
| Can use `try / catch` block      | Must use `.catch()`              |
| Code appears more linear         | Nesting grows if more `.then()`s |
| Easier for beginners to read     | More explicit promise chaining   |
