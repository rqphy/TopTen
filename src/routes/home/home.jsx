import Experience from "../../components/experience"
import { Canvas } from "@react-three/fiber"

export default function Home() {
	return (
		<div>
			<Canvas shadows>
				<Experience />
			</Canvas>
		</div>
	)
}
