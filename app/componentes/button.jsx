import {motion } from 'framer-motion'

export const CoolButton = ({text, className})=> {

    return (
      <motion.button
        className={className}
        style={{
          background: "linear-gradient(145deg, #00a63e, #016630)",
          borderImage: "linear-gradient(145deg, #a8ff78, #78ffd6) 1",
          boxShadow: "0px 4px 10px rgba(39, 174, 96, 0.5)",
        }}
        whileHover={{ scale: 1.05, boxShadow: "0px 6px 15px rgba(39, 174, 96, 0.8)" }}
        whileTap={{ scale: 0.95, boxShadow: "0px 2px 5px rgba(39, 174, 96, 0.5)" }}
      >
        {text||"Click me"}
      </motion.button>
    );
  }
