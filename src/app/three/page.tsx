'use client';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  AxesHelper,
} from 'three';
import { useEffect, useRef } from 'react';

const Three = () => {
  const ref = useRef<HTMLDivElement>();

  const createExample = () => {
    const scene = new Scene();

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    const geometry = new BoxGeometry(100, 100, 100);
    const material = new MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.5,
    });
    const cube = new Mesh(geometry, material);

    cube.position.set(0, 0, 0);
    scene.add(cube);

    camera.position.set(200, 200, 200);
    camera.lookAt(cube.position);

    const axesHelper = new AxesHelper(200);
    scene.add(axesHelper);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    ref.current.appendChild(renderer.domElement);

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
