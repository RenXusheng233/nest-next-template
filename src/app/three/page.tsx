'use client';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
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
    camera.position.z = 2;

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2, false);
    ref.current.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 0.8, 0.6);
    const material = new MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);

    scene.add(cube);

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
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
