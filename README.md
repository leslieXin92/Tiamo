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
   tiamo -v
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
      "name": "@lesliexin92/tiamo",
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
      "name": "tiamo",
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

1. version (`tiamo -v`)
2. help (`tiamo -h`)
3. date calculation(`tiamo cabbage`、`tiamo cabbage -d <date>`、`tiamo cabbage -t <number>`)

### V1.0.1

1. README

### V1.1.0

1. bobo module
2. butterfly module

### V1.2.0

1. orange module
2. bobo, butterfly support date diff `tiamo bobo -d 2024-12-16`
3. error message handler update

### V1.2.1

1. auto publish with github actions
