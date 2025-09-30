import { motion } from "framer-motion";

const CircularProgress = ({ level, size = 80, stroke = 10 }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.div
      initial={{ opacity:0 , y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
      className="relative flex items-center justify-center mb-2">
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={stroke}
          fill="transparent"
        />

        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // start empty
          whileInView={{
            strokeDashoffset: circumference - (level / 100) * circumference,
          }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }} // animate once when 60% visible
        />

        {/* Gradient */}
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Percentage in center */}
      <span className="absolute text-lg  font-semibold text-gray-700 dark:text-gray-200">
        {level}%
      </span>
    </motion.div>
  );
};

export default CircularProgress;
