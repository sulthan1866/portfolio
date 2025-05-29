import { motion } from 'framer-motion';

export const Home = () => {

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };


  return (
    <motion.section 
      id="home" 
      className='relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 overflow-hidden transition-all duration-700'
    >

      <div className="absolute inset-0 overflow-hidden">
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '4s' }}
                className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl"
              />
              <motion.div 
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
                className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl"
              />
            </div>

      {/* Main Content */}
      <div className="mt-20 relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting with Animation */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <motion.span 
            className="text-6xl sm:text-7xl lg:text-8xl filter drop-shadow-lg inline-block"
            animate={{ 
              rotate: [0, 14, -8, 14, -4, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            👋
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          variants={itemVariants}
        >
          <motion.span 
            className="block mb-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm
          </motion.span>
          <motion.span 
            className={`block bg-gradient-to-r bg-clip-text text-transparent ${
            'dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400'
                + ' from-purple-600 via-blue-600 to-indigo-600'
            }`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Mohammed Sulthan
          </motion.span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.div 
          className="mb-12"
          variants={itemVariants}
        >
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl font-light mb-4 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            A passionate{' '}
            <span className={`font-bold ${'dark:text-purple-300' + ' text-indigo-600'}`}>
              full stack developer
            </span>
          </motion.p>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            crafting web magic{' '}
            <motion.span 
              className="inline-block"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.button 
            className={`group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
           'dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 dark:text-white dark:hover:from-purple-600 dark:hover:to-pink-600'
                + ' bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
            }`}
            whileHover={{ 
              scale: 1.05,
              boxShadow:"0 20px 40px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })}
          >
            <span className="mr-2">View My Work</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
          
          <motion.button 
            className={`px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 backdrop-blur-sm ${
             'dark:border-white/30 dark:text-white dark:hover:bg-white/10'
                + ' border-gray-900/30 text-gray-900 hover:bg-gray-900/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Skills Preview */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          variants={itemVariants}
        >
          {['Java','SpringBoot','TypeScript','React','TypeScript', 'PostgreSQL','TailwindCSS','Bootstrap'].map((skill, index) => (
            <motion.span
              key={skill}
              className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300 ${
               'dark:bg-white/10 dark:border-white/20 dark:text-white'
                  + ' bg-black/10 border-black/20 text-gray-900'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                delay: 1.6 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

    </motion.section>
  );
};