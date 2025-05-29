import { motion } from 'framer-motion';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
   <motion.div 
  variants={floatingVariants}
  animate="animate"
  className="absolute top-5 right-40 w-80 h-80 
             bg-gradient-to-br from-blue-400/20 to-purple-600/20 
             dark:from-blue-800/30 dark:to-purple-900/30
             rounded-full mix-blend-multiply filter blur-xl"
/>

<motion.div 
  variants={floatingVariants}
  animate="animate"
  style={{ animationDelay: '2s' }}
  className="absolute bottom-40 left-10 w-80 h-80 
             bg-gradient-to-br from-green-400/20 to-blue-600/20 
             dark:from-green-800/30 dark:to-blue-900/30
             rounded-full mix-blend-multiply filter blur-xl"
/>

<motion.div 
  variants={floatingVariants}
  animate="animate"
  style={{ animationDelay: '1s' }}
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 
             bg-gradient-to-br from-purple-400/20 to-pink-600/20 
             dark:from-purple-800/30 dark:to-pink-900/30
             rounded-full mix-blend-multiply filter blur-xl"
/>

      </div>

      {/* Content container */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div 
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Header with animated underline */}
          <motion.div className="relative mb-8" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              About Me
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Main content with enhanced typography */}
          <motion.div className="space-y-6" variants={itemVariants}>
           
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              {'👨‍💻 I’m a passionate software developer with a love for creating innovative solutions.'}
              </motion.p>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
             {'🌱 Currently, I’m deepening my skills in Spring Boot for backend development.'}
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              {'💡 I love solving complex problems and turning ideas into reality through code.'}
          </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};