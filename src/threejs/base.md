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
// 创建集合体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 创建材质
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})

// 创建旺哥
const cube = new THREE.Mesh(geometry, material)

// 位移
cube.position.set(3,0,0)

```
