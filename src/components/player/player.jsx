import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function useParallax(value, scale) {
    return useTransform(value, [0.5, 1], [1, scale])
}

export default function Player({ id, player }) {
    const txtRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: txtRef })
    const scale = useParallax(scrollYProgress, 1.2)

    return (
        <article className="player">
            <h2 ref={txtRef} className="player__title">
                {10 - id} - {player.name}
            </h2>
            <figure className="player__ctn">
                <motion.img
                    style={{ scale }}
                    className="player__illu"
                    src={player.imgURL}
                    alt={player.name}
                />
            </figure>
            <p className="player__history">{player.history}</p>
        </article>
    )
}
