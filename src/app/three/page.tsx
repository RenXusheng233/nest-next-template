'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const Three = () => {
  const ref = useRef<HTMLDivElement>();

  const createExample = async () => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setClearColor('#20262E', 1);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    // renderer.setPixelRatio(window.devicePixelRatio); // FIXME
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshPhongMaterial({
      color: '#8EA7E9',
      transparent: true,
      opacity: 0.8,
      shininess: 40,
      specular: '#F5F5F5',
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      2000,
    );
    camera.position.set(300, 300, 300);
    window.onresize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    const controls = new OrbitControls(camera, renderer.domElement);
    const { x, y, z } = cube.position;
    controls.target.set(x, y, z);
    controls.update();

    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper);

    const directionalLight = new THREE.DirectionalLight('#B9F3FC', 1.0);
    directionalLight.position.set(0, 200, 200);
    directionalLight.target = cube;
    scene.add(directionalLight);
    const directionalLightHelper = new THREE.DirectionalLightHelper(
      directionalLight,
      6,
      '#B9F3FC',
    );
    scene.add(directionalLightHelper);

    const stats = Stats();
    stats.setMode(0); // default
    ref.current.appendChild(stats.domElement);

    const dat = await import('dat.gui');
    const gui = new dat.GUI();
    const guiParams = {
      material: '#8EA7E9',
      specular: '#F5F5F5',
      isRotate: false,
    };
    const cubeFolder = gui.addFolder('Cube');
    cubeFolder.add(cube.position, 'x', 0, 200).name('positionX');
    cubeFolder.add(cube.position, 'y', 0, 200).name('positionY');
    cubeFolder.add(cube.position, 'z', 0, 200).name('positionZ');
    cubeFolder.open();
    const colorFolder = gui.addFolder('Color');
    colorFolder
      .addColor(guiParams, 'material')
      .onChange(() => {
        cube.material.color.set(guiParams.material);
      })
      .name('material');
    colorFolder
      .addColor(guiParams, 'specular')
      .onChange(() => {
        cube.material.specular.set(guiParams.specular);
      })
      .name('specular');
    colorFolder.open();
    const rotateFolder = gui.addFolder('Rotate');
    rotateFolder.add(guiParams, 'isRotate').name('isRotate');
    rotateFolder.open();

    const animate = function () {
      stats.update();
      requestAnimationFrame(animate);
      if (guiParams.isRotate) {
        cube.rotateX(0.01);
        cube.rotateY(0.01);
      }

      renderer.render(scene, camera);
    };

    animate();
  };

  useEffect(() => {
    createExample();
  }, []);

  return <div ref={ref} />;
};

export default Three;
