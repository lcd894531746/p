<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from "three";
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      //创建一个场景
      const scene = new THREE.Scene();
      // 创建相机  //常用的是透视相机
      // 参数1：视野角度（FOV）
      // 参数2：长宽比（aspect）
      // 参数3：近裁剪面
      // 参数4：远裁剪面
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      // camera.position.z = 5;
      camera.position.set(0, 0, 5);
     
      // 创建渲染器
      const render = new THREE.WebGLRenderer();
      // 设置渲染器的大小
      render.setSize(window.innerWidth, window.innerHeight);
      // 将渲染器添加到DOM中
      this.$refs.container.appendChild(render.domElement);
      // 创建一个 几何体
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      // 创建一个材质
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
      });

      // 创建一个网格  将来 材质 集合体放进去
      const mesh = new THREE.Mesh(geometry, material);
      //设置网格模型在三维空间中的位置坐标，默认是坐标原点
      // mesh.position.set(-1, 1, -1);
      // 将网格添加到场景中
      scene.add(mesh);
      //相机观察目标指向Threejs 3D空间中某个位置
      // camera.lookAt(0, 10, 0);  //y轴上位置10
      camera.lookAt(mesh.position);
      // 渲染循环
      const animate = function() {
        // 在 Three.js 或其他动画场景中，通常会使用 requestAnimationFrame 来循环调用渲染函数，
        // 以便持续更新场景的动画效果，而不会导致性能问题或过度消耗资源。
        requestAnimationFrame(animate);
        // 旋转立方体
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        render.render(scene, camera);
      };

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
