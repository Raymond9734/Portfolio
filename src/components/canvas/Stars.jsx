import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'
import { Points, PointMaterial, Preload } from '@react-three/drei'

const Stars = (props) => {
  const ref = useRef()
  
  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 })
    
    // Check for and replace any NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.warn(`Found NaN at index ${i} in star positions`)
        positions[i] = 0 
      }
    }
    
    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
