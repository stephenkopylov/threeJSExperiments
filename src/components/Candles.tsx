import {Canvas, useFrame} from "@react-three/fiber";
import {useRef, useState} from "react";

export const Candles: React.FC = (props) => {
    const ref = useRef<THREE.Group>(null!)
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.y += 0.05))
    return (
        <group ref={ref}>
            <mesh
                {...props}
                position={[1, 1, 1]}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <coneGeometry args={[1.2, 1.2, 20]}/>
                <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} opacity={0.5} shininess={100}
                                   specular={'green'}/>
            </mesh>
            <mesh
                {...props}
                position={[4, 1, 1]}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <sphereGeometry args={[1.3]}/>
                <meshPhongMaterial color={hovered ? 'hotpink' : 'orange'} opacity={0.5} shininess={100}
                                   specular={'green'}/>
            </mesh>
            <mesh
                {...props}
                scale={clicked ? 1.5 : 1}
                onClick={(event) => click(!clicked)}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshPhongMaterial color={hovered ? 'hotpink' : 'pink'} opacity={0.5} shininess={100}
                                   specular={'green'}/>
            </mesh>
        </group>
    )
}
