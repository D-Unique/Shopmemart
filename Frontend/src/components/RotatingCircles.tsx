import { motion } from 'framer-motion';

export default function RotatingCircles() {
    const circles = Array.from({ length: 3 }); // Create an array for three circles

    return (
        <div style={containerStyle}>
            {circles.map((_, index) => (
                <motion.div
                    key={index}
                    animate={{
                        scale: [1, 1.5, 1.5, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    style={{
                        ...boxStyle,
                        marginLeft: 10,
                    }}
                />
            ))}
        </div>
    );
}

/**
 * ==============   Styles   ================
 */

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vh',
};

const boxStyle = {
    width: 60,
    height: 60,
    backgroundColor: 'var(--CirclesColour)',
    borderRadius: '5%',
};
