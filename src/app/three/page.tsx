'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Three = () => {
  const ref = useRef<HTMLDivElement>();

  const createExample = () => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshLambertMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
    });
    const cube = new THREE.Mesh(geometry, material);

    cube.position.set(0, 0, 0);
    scene.add(cube);

    camera.position.set(200, 200, 200);
    camera.lookAt(cube.position);

    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper);

    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(400, 400, 400);
    scene.add(pointLight);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    ref.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', () => {
      renderer.render(scene, camera);
    });

    renderer.render(scene, camera);

    // const animate = function () {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // };

    // animate();
  };

  useEffect(() => {
    createExample();
  }, []);

  return <div ref={ref} />;
};

export default Three;
