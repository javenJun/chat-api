## QuickStart

### Init Database

<!-- ```bash
$ yarn install
$ yarn run initdb
$ yarn run seed -->
```
### Development

```bash
$ yarn run dev
$ open http://localhost:4000/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `yarn run clean` before `yarn run dev`.

### Deploy

```bash
$ yarn run tsc
$ yarn start
```

### Scripts

- Use `yarn run lint` to check code style
- Use `yarn test` to run unit test
- Use `yarn run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### Git Operational guidance

The first thing every day, first pull the latest code from the dev branch:

```bash
$ git pull origin dev
```

If the pull fails, there may be a code change, you need to submit the changes first:

```bash
$ git add . OR git add *
$ git commit -m 'description'
```

After submitting, pull the code again:

```bash
$ git pull origin dev
```

After pulling, if there is a conflict, resolve the conflict and resubmit the code:

```bash
$ git add . OR git add *
$ git commit -m 'description'
```

save it locally:

```bash
$ git stash
```

After saving to local, re-pull the latest code.

```bash
$ git pull origin dev
```

Release the local code again

```bash
$ git stash pop
```

Check code status

```bash
$ git status
```

After changing the code every day, you need to submit the code, using the following  instructions：

```bash
$ git add . OR git add *
$ git commit -m 'description'
```

Finally, you need to submit the code to the remote server：
PS: The actual development will pull the respective branches, and then submit the merge request, so the branch name is the branch name used in actual development.

```bash
$ git push origin 'Branch name'
```



