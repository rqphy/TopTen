import Experience from "../../components/experience"
import { Canvas } from "@react-three/fiber"

export default function Home() {
	return (
		<>
			<section className="hero">
				<Canvas shadows>
					<Experience />
				</Canvas>
			</section>
		</>
	)
}
