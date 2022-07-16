import { useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'

function randomColor() {
  const colors = ['red', 'blue', 'green', 'orange', 'purple']
  const index = Math.floor(Math.random() * colors.length)

  return colors[index]
}

function Box({position, speed}) {
  const meshRef = useRef()
  useFrame(() => (
    meshRef.current.rotation.x += speed,
    meshRef.current.rotation.y += speed
  ))

  const [color, setColor] = useState(randomColor())

  return (
    <mesh ref={meshRef} position={position} onClick={() => { setColor(randomColor()) }}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ color }/>
    </mesh>
  )
}

function App() {
  return (
    <div className="App">
      <div style={{width: "100vw", height: "100vh", top: "0", left: "0", position: "fixed"}}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[1, 1, 1]} speed={0.01}/>
          <Box position={[0.5, -1, 2]} speed={0.01}/>
        </Canvas>
      </div>
    </div>
  )
}

export default App
