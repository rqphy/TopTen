export default function Player({ id, player }) {
	return (
		<article className="player">
			<h2 className="player__title">
				{10 - id} - {player.name}
			</h2>
			<img
				className="player__illu"
				src={player.imgURL}
				alt={player.name}
			/>
			<p className="player__history">{player.history}</p>
		</article>
	)
}
