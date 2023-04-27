### 构建方式

> 命令

```bash
esbuild app.jsx --bundle --outfile=out.js
```

> js 脚本

`.mjs`

```js
import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outfile: "out.js",
});
```

### 构建配置

#### jsx

> .jsx 文件

无需配置，可直接转换

> .js 文件

--loader:.js=jsx

#### brower, node

| action       | api         | 说明                                  | 示例                                                      |
| ------------ | ----------- | ------------------------------------- | --------------------------------------------------------- |
| source maps  | --sourcemap |                                       |                                                           |
| minification | --minify    |                                       |                                                           |
| 构建平台     | --platform  | 默认为浏览器                          | --platform=node                                           |
| 浏览器兼容性 | --target    | https://esbuild.github.io/api/#target | --target=es2020,chrome58,edge16,firefox57,node12,safari11 |
| node 兼容性  | --target    | https://esbuild.github.io/api/#target | --target=node16                                           |
| alias        |             | https://esbuild.github.io/api/#alias  |                                                           |

node

| api      | 说明                                               | 示例                                                                    |
| -------- | -------------------------------------------------- | ----------------------------------------------------------------------- |
| packages | 排除全部包 https://esbuild.github.io/api/#packages | --packages=external（exclude all of your dependencies from the bundle） |
| external | 排除指定包 https://esbuild.github.io/api/#external | --external:\*.png --external:fsevents                                   |
