## 本地开发流程

1. 安装依赖
    ```shell
    npm i
    ```

2. node_modules映射
   ```shell
   npm link
   ```

3. 测试
   ```shell
   j -v
   ```

4. 开发完毕, 断开映射
   ```shell
   npm unlink <package name>
   ```

## 发布流程

### 发布到npm

1. 修改`package.json`
   ```json
   {
      "name": "@lesliexin92/cabbage",
      "publishConfig": {
        "registry": "https://registry.npmjs.org"
      }
   }
   ```

2. 登录npm
   ```shell
   npm login
   ```

3. 发布
   ```shell
   npm publish
   ```

### 发布到github

1. 修改`package.json`
   ```json
   {
      "name": "cabbage",
      "publishConfig": {
        "registry": "https://npm.pkg.github.com"
      }
   }
   ```

2. 获取github token
    - `Settings` - `Developer settings`  - `Personal access tokens` - `Generate`
    - 至少勾选上`write:package`、`read:package`、`delete:package`、`repo`

3. 登录github, 密码填写token
   ```shell
   npm login
   ```

4. 发布
   ```shell
   npm publish
   ```

## Changelog

### V1.0.0

1. version (`j -v`)
2. help (`j -h`)
3. date calculation(`j cabbage`、`j cabbage -d <date>`、`j cabbage -t <number>`)

### V1.0.1

1. README
