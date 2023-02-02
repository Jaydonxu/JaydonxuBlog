# Vue 3 + TypeScript + Vite

### 生成项目

这里使用 vite生成项目，理由就是vite比webpack编译项目更快

```js
npm create vite@latest my-vue-app -- --template vue
```

### 组件库 Elment-plus

```js
npm install element-plus --save
```

- 然后我们打开修改/src/main.js文件，引入 element-plus


```js
import { createApp } from 'vue'
import App from './App.vue'
 
//导入路由
import router from './router/index'
 
//全局导入Element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
 
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app')
```
