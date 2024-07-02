---
category: 
    - ThreeJS
sticky: true
---

# ThreeJS 辅助工具

## 初始代码

```js
// 获取视图盒子实例
const box = ref(null)

// 获取视图区域宽高
const rect = box.value.getBoundingClientRect();
const width = rect.width;
const height = window.innerHeight - rect.top;

// 创建场景
const scene = new THREE.Scene()
// 创建相机
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.set(1,1, 5);
camera.lookAt(0,0,0);

// 创建渲染器 
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
box.value.appendChild(renderer.domElement)

// 渲染函数
const animate = function () {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
}

```

## 坐标辅助器

```js
// 创建世界坐标辅助器 size:5
const axesHelper = new THREE.AxesHelper(5)
// 添加到场景中
scene.add(axesHelper)

```

## 轨道控制器

:::tip 提示
控制器拖动原理 - 相机围绕物体做旋转
:::

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 更新控制器
controls.update()
// 自动旋转
controls.autoRate()
```

## 物体位移

:::tip 物体位移原理
始终相对于父元素作位移
    - 父元素为场景时，位移坐标为世界坐标
    - 父元素为节点时，位移相对于该节点  
:::

```js
--- 父元素为场景
// 创建集合体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 创建材质
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 位移
cube.position.set(3,0,0)

// 添加到场景
scene.add(cube)

--- 父元素为节点

// 创建集合体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 创建材质
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

// 创建网格
const cube = new THREE.Mesh(geometry, material)
const parentCube = new THREE.Mesh(geometry, material)
parentCube.add(cube)
parentCube.position.set(-3,0,0)

// 位移
cube.position.set(3,0,0)
// 添加到场景
scene.add(parentCube)
```

## 缩放和旋转

```js 缩放
cube.scale.set(3,3,3)
```

```js 旋转
cube.rotation.x = Math.PI / 4

```

## 响应式画布

```js
// 监听窗口变化
window.addEventListener("resize", () => {
    // 重置渲染器宽高比
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 重置相机宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新相机投影矩阵
    camera.updateProjectionMatrix();
})
```

## GUI调试

::: tip 提示
GUI会自动判断第一个参数的类型并转化为相应操作方式
Function -> 按钮
Boolean -> 选项框
十六进制颜色 -> 颜色选择框
:::

```js
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";

// 创建GUI实例
const gui = new GUI();

const obj = {
    add: () { ... }
}
// 添加按钮
gui.add(obj, 'add').name('重命名')

// 滑动控制
gui.add(cube.position, 'x').min(-10).max(10).step(1).name("重命名").onFinishChange((val) => {
    // change事件调用
})

// 选项框
gui.add(parentMaterial, "wireframe").name('父元素现况')

// 颜色选择
let colorParams = {
    cubeColor: "#ff0000"
}
gui.add(colorParams, 'cubeColor').name('立方体颜色').onChange((val) => {
    cube.materail.color.set(val)
}) 

```

## 常见几何体

::: tip 提示
详情查看[官方文档](https://threejs.org/docs/index.html?q=geometry#manual/en/introduction/Creating-a-scene)
:::
