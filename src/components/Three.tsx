import {Canvas} from "@react-three/fiber";
import {Candles} from "./Candles";

export const Three: React.FC = () => {
    return <Canvas style={{width: '500px', height: '500px', background: 'transparent'}}>
        <ambientLight/>
        <pointLight position={[10, 6, 10]}/>
        <Candles/>
    </Canvas>
}
