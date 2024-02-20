import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';


interface ThreeSceneProps {
  children?: React.ReactNode;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  // const controls = useRef<OrbitControls>();
  const moon = useRef<THREE.Mesh>();
  const world = useRef<THREE.Mesh>();

  useEffect(() => {
    const scene = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // renderer.current = new THREE.WebGLRenderer();
    renderer.current = new THREE.WebGLRenderer({ alpha: true });
    // controls.current = new OrbitControls(camera.current, renderer.current.domElement);
    //controls.current.enablePan = false;

    const geometry = new THREE.SphereGeometry(2, 60, 60);

    const textureLoader = new THREE.TextureLoader();
    const textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
    const displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";
    const worldURL = "";

    const texture = textureLoader.load(textureURL);
    const displacementMap = textureLoader.load(displacementURL);
    const worldTexture = textureLoader.load(worldURL);

    const material = new THREE.MeshPhongMaterial({
      color: 0x87ceeb,
      map: texture,
      displacementMap: displacementMap,
      displacementScale: 0.06,
      bumpMap: displacementMap,
      bumpScale: 0.04,
      reflectivity: 0,
      shininess: 0,
      transparent: true, // Make the material transparent
      opacity: 0.5, // 
    });

    moon.current = new THREE.Mesh(geometry, material);

    const light = new THREE.DirectionalLight(0x87ceeb, 1);
    light.position.set(-100, 10, 50);
    scene.add(light);

    const hemiLight = new THREE.HemisphereLight(0x87ceeb, 0x87ceeb, 0.1);
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 0, 0);
    scene.add(hemiLight);

    const desiredWidthRatio = 0.8; // Adjust this value as needed (0.8 means 80% of the screen width)
    const screenWidth = window.innerWidth;
    const globeWidth = screenWidth * desiredWidthRatio;
    const scaleFactor = globeWidth / 1000;
    camera.current = new THREE.PerspectiveCamera(75, screenWidth / window.innerHeight, 0.1, 1000);
    renderer.current = new THREE.WebGLRenderer({ alpha: true });



    const worldGeometry = new THREE.SphereGeometry(scaleFactor, 60, 60);
    const worldMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: worldTexture,
      side: THREE.BackSide
    });
    world.current = new THREE.Mesh(worldGeometry, worldMaterial);
    scene.add(world.current);
    scene.add(moon.current);
    camera.current.position.z = 3.5;

    moon.current.rotation.x = 3.1415 * 0.02;
    moon.current.rotation.y = 3.1415 * 1.54;

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      if (moon.current) {
        moon.current.rotation.y += 0.002;
        moon.current.rotation.x += 0.0001;
      }
      if (world.current) {
        world.current.rotation.y += 0.0001;
        world.current.rotation.x += 0.0005;
      }
      if (renderer.current && camera.current) {
        renderer.current.render(scene, camera.current);
      }
    };

    const onResize = () => {
      if (camera.current && renderer.current) {
        camera.current.aspect = window.innerWidth / window.innerHeight;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', onResize, false);

    if (sceneRef.current && renderer.current) {
      sceneRef.current.appendChild(renderer.current.domElement);
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      animate();
    }

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(requestRef.current!);
    };

  }, []);

  return <div ref={sceneRef}>{children}</div>;
};

export default ThreeScene;
