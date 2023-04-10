import Experience from "../../components/experience/experience"
import Container from "../../components/container/container"
import Player from "../../components/player/player"
import { Canvas } from "@react-three/fiber"
import players from "../../data/data.json"

export default function Home() {
	return (
		<div className="home">
			<section className="hero">
				<Canvas shadows>
					<Experience />
				</Canvas>
			</section>
			<Container>
				{players.map((player, index) => {
					return <Player id={index} player={player} key={index} />
				})}
			</Container>
		</div>
	)
}
