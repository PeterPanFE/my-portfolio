import { Suspense, useEffect, useState, useRef } from "react"
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const veteran = useGLTF('./ncr_veteran_ranger_bobblehead/scene.gltf')

  const group = useRef()
  const url = './robot_playground/scene.gltf'
  const robot = useGLTF(url)
  const { nodes, scene, materials, animations } = useLoader(GLTFLoader, url)
  const actions = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = { idle: mixer.clipAction(animations[0], group.current) }
    actions.current.idle.play()
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])


  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={0.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      <group ref={group} dispose={null}>
        <primitive
          ref={group}
          name="robot"
          object={robot.scene}
          scale={isMobile ? 0.6 : 1.3}
          position={isMobile ? [0, -0.5, 0] : [0, -1, -2.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </group>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 80vw)')
    setIsMobile(mediaQuery.matches)
    const handleQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleQueryChange)
    }
  }, [])

  return (
    <Canvas
      style={{ height: '50vh', maxWidth:'100vw' }}
      shadows
      camera={{ position: [10, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas