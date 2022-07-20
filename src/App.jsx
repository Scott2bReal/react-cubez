import { useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'

function randomColor(color) {
  const colors = ['red', 'blue', 'green', 'orange', 'purple']
  let new_color = null

  do {
    let index = Math.floor(Math.random() * colors.length)
    new_color = colors[index]
  } while (new_color === color);

  return new_color
}

function Box({position, speed}) {
  const meshRef = useRef()
  useFrame(() => (
    meshRef.current.rotation.x += speed,
    meshRef.current.rotation.y += speed
  ))

  const [color, setColor] = useState(randomColor())

  return (
    <mesh ref={meshRef} position={position} onClick={() => { setColor(randomColor(color)) }}>
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
