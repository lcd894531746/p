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
      // 创建一个场景
      const scene = new THREE.Scene();

      // 创建相机
      const camera = new THREE.PerspectiveCamera(
        20,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(renderer.domElement);

      // 创建一个正方体
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      // 创建材质
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      // 创建 网格mesh
      const mesh = new THREE.Mesh(geometry, material);
      // 将网格添加到场景中
      scene.add(mesh);

      // 渲染循环
      const animate = function() {
        requestAnimationFrame(animate);
        // 旋转立方体
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;

        renderer.render(scene, camera);
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
