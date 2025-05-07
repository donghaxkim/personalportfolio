import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiMysql, SiTableau, SiPowerbi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techstack = ({ theme }) => {
  const textColor = theme === "dark" ? "text-neutral-300" : "text-[#2A3549]";
  const borderColor = theme === "dark" ? "border-neutral-300" : "border-[#2A3549]";

  return (
    <div className="section border-b border-neutral-300 pb-24" id="techstack">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`my-20 text-center text-4xl mt-[100px] font-extrabold ${textColor}`}
      >
        Techstack
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center gap-6"
      >
        {/* First Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <RiReactjsLine className="text-7xl text-cyan-400" />
            <span className={`text-lg font-medium ${textColor}`}>React</span>
          </motion.div>
          <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <SiMongodb className="text-7xl text-green-500" />
            <span className={`text-lg font-medium ${textColor}`}>MongoDB</span>
          </motion.div>
          <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <FaPython className="text-7xl text-blue-400" />
            <span className={`text-lg font-medium ${textColor}`}>Python</span>
          </motion.div>
          <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <FaJs className="text-7xl text-yellow-400" />
            <span className={`text-lg font-medium ${textColor}`}>JavaScript</span>
          </motion.div>
          <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <FaCss3Alt className="text-7xl text-blue-500" />
            <span className={`text-lg font-medium ${textColor}`}>CSS</span>
          </motion.div>
        </div>
        {/* Second Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <FaHtml5 className="text-7xl text-orange-500" />
            <span className={`text-lg font-medium ${textColor}`}>HTML</span>
          </motion.div>
          <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <FaCss3Alt className="text-7xl text-cyan-400" />
            <span className={`text-lg font-medium ${textColor}`}>Tailwind CSS</span>
          </motion.div>
          <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <SiMysql className="text-7xl text-blue-700" />
            <span className={`text-lg font-medium ${textColor}`}>MySQL</span>
          </motion.div>
          <motion.div variants={iconVariants(2.7)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <SiTableau className="text-7xl text-orange-400" />
            <span className={`text-lg font-medium ${textColor}`}>Tableau</span>
          </motion.div>
          <motion.div variants={iconVariants(3.3)} initial="initial" animate="animate" className={`flex items-center gap-4 rounded-2xl border-4 p-4 ${borderColor}`}>
            <SiPowerbi className="text-7xl text-yellow-500" />
            <span className={`text-lg font-medium ${textColor}`}>Power BI</span>
          </motion.div>
        </div>
      </motion.div>
      <div className="h-[400px]"></div>
    </div>
  );
};

export default Techstack;