### 初始化数据库

```bash
$ yarn install
$ yarn run initdb
$ yarn run seed
```

### 本地开发

```bash
$ yarn install
$ yarn run dev
$ open http://localhost:4000/
```

### 部署

```bash
$ yarn start
$ yarn stop
```

### 内置指令

- 使用 `yarn run lint` 来做代码风格检查。
- 使用 `yarn test` 来执行单元测试。
- 使用 `yarn run autod` 来自动检测依赖更新。


### 环境需求

- Node.js 8.x
- Typescript 2.8+

### Git 操作指导

每天第一件事，先从 dev 分支拉取最新代码:

```bash
$ git pull origin dev
```

如果拉取失败，有可能是有代码变动，需要先提交修改：

```bash
$ git add . OR git add *
$ git commit -m '提交描述'
```

提交后，再次拉取代码

```bash
$ git pull origin dev
```

检时代码状态

```bash
$ git status
```

拉取后，如果有冲突，解决完冲突，再重新提交代码。

```bash
$ git add . OR git add *
$ git commit -m '提交描述'
```

或者先保存到本地的方式：

```bash
$ git stash
```
保存到本地后，重新拉取最新代码

```bash
$ git pull origin dev
```

再把本地的代码释放出来

```bash
$ git stash pop
```

检时代码状态

```bash
$ git status
```

每天有变更代码后，需要提交代码，使用下面指令：

```bash
$ git add . OR git add *
$ git commit -m '提交描述'
```

最后需要将代码提交到远程服务器上：
PS: 可能实际开发会拉取各自的分支，再提交合并请求，所以这里分支名为实际开发时使用的分支名。

```bash
$ git push origin 分支名
```