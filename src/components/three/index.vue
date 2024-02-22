<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from "three";
// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export default {
  data() {
    return {
      fps: 0,
    };
  },
  mounted() {
    this.init();
  },

  methods: {
    init() {
      //1.创建一个场景
      const scene = new THREE.Scene();

      // 创建一个 几何体
      const geometry = new THREE.BoxGeometry(30, 30, 30);
      // 创建坐标轴
      const axesHelper = new THREE.AxesHelper(100);
      // 添加到场景中
      scene.add(axesHelper);
      // 创建一个材质 MeshBasicMaterial是不受光照影响的
      // const material = new THREE.MeshBasicMaterial({
      //   color: 0x00ff00,
      //   wireframe: false, //线条
      //   transparent: true, //开启透明
      //   opacity: 0.2, //设置透明度
      // });
      // 创建一个材质 MeshLambertMaterial是受光照影响的
      const material = new THREE.MeshLambertMaterial();
      //点光源：两个参数分别表示光源颜色和光照强度
      // 参数1：0xffffff是纯白光,表示光源颜色
      // 参数2：1.0,表示光照强度，可以根据需要调整 你可以可以直接访问光照强度属性.intensity设置。
      const point = new THREE.PointLight(0xffffff, 1.0);
      point.decay = 0.0; //不随着距离的增加而衰减
      // 点光源位置
      point.position.set(120, 80, 80);
      // 添加到场景中
      scene.add(point);
      // 光源辅助观察
      const pointLightHelper = new THREE.PointLightHelper(point, 5);
      scene.add(pointLightHelper);

      //环境光:没有特定方向，整体改变场景的光照明暗
      const ambient = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambient);

      // 2.创建一个网格  将来 材质 集合体放进去
      const mesh = new THREE.Mesh(geometry, material);
      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      mesh.position.set(0, 0, 0);
      // 将网格添加到场景中
      scene.add(mesh);
      // 3.创建相机  //常用的是透视相机
      // 参数1：视野角度（FOV）
      // 参数2：长宽比（aspect）
      // 参数3：近裁剪面
      // 参数4：远裁剪面
      const width = window.innerWidth || 800; //window.innerWidth
      const height = window.innerHeight || 500; //window.innerHeight
      const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
      // camera.position.z = 5;
      camera.position.set(200, 200, 200);
      //相机观察目标指向Threejs 3D空间中某个位置
      camera.lookAt(0, 0, 0); //y轴上位置10
      // camera.lookAt(mesh.position);

      // 4.创建渲染器
      const render = new THREE.WebGLRenderer();
      // 设置渲染器的大小
      render.setSize(width, height);
      // 将渲染器添加到DOM中
      this.$refs.container.appendChild(render.domElement);
      // 渲染循环
      // render.render(scene, camera);
      const clock = new THREE.Clock();
      //加载字体文件
      const loader = new FontLoader();
      // 创建 3D 文本的材质
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      loader.load(
        "https://cdn.jsdelivr.net/npm/three/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          // 创建文本几何体
          const textGeometry = new TextGeometry("FPS: 0", {
            font: font,
            size:2,
            height: 0.2,
          });
          // 创建 3D 文本对象
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
          textMesh.position.set(-10, 100, 100); // 设置文本的位置
          scene.add(textMesh);

          // 定义 animate 函数，用于循环更新场景和计算 FPS
          const textanimate = () => {
            const spt = clock.getDelta() * 1000; // 毫秒
            const fps = Math.ceil(1000 / spt);
            // 更新文本内容
            textMesh.geometry = new TextGeometry(`FPS: ${fps}`, {
              font: font,
              size: 2,
              height: 0.2,
            });
            // 继续请求下一帧
            requestAnimationFrame(textanimate);

            // 渲染场景
            render.render(scene, camera);
          };

          // 开始循环更新场景和计算 FPS
          textanimate();
        }
      );
      const animate = () => {
        // const spt = clock.getDelta() * 1000; //毫秒
        // const fps = (1000 / spt).toFixed(4);
        // console.log("两帧渲染时间间隔(毫秒)", spt);
        // console.log("帧率FPS", 1000 / spt);

        // 在 Three.js 或其他动画场景中，通常会使用 requestAnimationFrame 来循环调用渲染函数，
        // 以便持续更新场景的动画效果，而不会导致性能问题或过度消耗资源。
        requestAnimationFrame(animate);
        // 旋转立方体
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        render.render(scene, camera); //执行一个渲染操作 类似于相机的拍照功能
      };

      // 设置相机控件轨道控制器OrbitControls
      const controls = new OrbitControls(camera, render.domElement);
      // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
      controls.addEventListener("change", function() {
        render.render(scene, camera); //执行渲染操作
      }); //监听鼠标、键盘事件

      animate();
    },
  },
};
</script>

<style>
/* 可选：添加样式来设置场景容器的大小 */
.container {
  width: 100%;
  height: 100vh;
}
</style>
