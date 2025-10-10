# tiny-wars

## Notes:

1. Functions do not belong in types.ts file. types.ts should only contain types, E.g. `type Animal = {}`
2. Variables are defined like this `const fighters = ['Dave', 'Mark']`
3. Functions are defined like this
```
const getFighters = () => {
    return ['Jeff', 'Fred']
}
```
4. Objects are defined with key value pairs, key on the left and value on the right. Similar to this
```
{
    name: 'Oliver',
    type: 'Lion',
    health: 500,
    maxAttackStrength: 22,
    isAlive: true
}
```

#### Run a specific file
`npx ts-node <file path>`


#### Creating a Pull Request / Pushing to GitHub
1. Create a branch
```
    git checkout -b "<name>"
```
2. Make code changes.
3. Open source control on the left hand menu.
4. Stage files using the + symbol.
5. Write a comment explaining the changes.
6. Run commit and push button.