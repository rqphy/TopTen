import { PerspectiveCamera } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

const visibleHeightAtZDepth = (depth, camera) => {
	// compensate for cameras not positioned at z=0
	const cameraOffset = camera.position.z
	if (depth < cameraOffset) depth -= cameraOffset
	else depth += cameraOffset

	// vertical fov in radians
	const vFOV = (camera.fov * Math.PI) / 180

	// Math.abs to ensure the result is always positive
	return 2 * Math.tan(vFOV / 2) * Math.abs(depth)
}

const visibleWidthAtZDepth = (depth, camera) => {
	const height = visibleHeightAtZDepth(depth, camera)
	return height * camera.aspect
}

export default function Experience() {
	const camera = useThree((state) => state.camera)

	return (
		<>
			<PerspectiveCamera
				fov={45}
				near={0.1}
				far={200}
				position={[0, 0, 3]}
			/>
			<directionalLight
				position={[3, 2, 4]}
				intensity={1}
				color={"#e8dfdd"}
			/>
			<ambientLight intensity={0.2} />
			<mesh
				scale={[
					visibleWidthAtZDepth(1, camera),
					visibleHeightAtZDepth(1, camera),
					1,
				]}
			>
				<boxGeometry />
				<meshBasicMaterial />
			</mesh>
		</>
	)
}
