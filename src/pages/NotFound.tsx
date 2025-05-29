import { motion } from 'framer-motion';

export const NotFound = () => {


  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className={`relative min-h-screen flex items-center justify-center flex-col overflow-hidden ${
         'dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 dark:text-white' 
          + ' bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}
      initial="hidden"
      animate="visible"
    >
     

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* 404 Title */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1 
            className="text-8xl sm:text-9xl md:text-[12rem] font-black mb-4 leading-none"
            animate="animate"
          >
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
             'dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400'
              + ' from-purple-600 via-blue-600 to-indigo-600'
            }`}>
              404
            </span>
          </motion.h1>
          
          <motion.div
            className="text-6xl sm:text-7xl mb-6"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            😵
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg sm:text-xl opacity-80 mb-2">
            The page you're looking for seems to have vanished into the digital void.
          </p>
          <p className="text-base sm:text-lg opacity-60">
            Don't worry, even the best explorers sometimes take a wrong turn! 🧭
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="/"
            className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              'dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 dark:text-white dark:hover:from-purple-600 dark:hover:to-pink-600'
                + ' bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
            }`}
            whileHover={{ 
              scale: 1.05,
              boxShadow: 
                 "0 20px 40px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">🏠 Go Home</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

        
        </motion.div>
</div>
    </motion.section>
  );
};