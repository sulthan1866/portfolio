import { motion } from 'framer-motion';
import { Github, Linkedin, Mail} from 'lucide-react';

export const Contact = () => {

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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sulthan1866',
      icon: Github,
      color: 'from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800',
      hoverColor: 'hover:shadow-gray-500/50'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/sulthan1866',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    {
      name: 'Email',
      href: 'mailto:sulthan1869@gmail.com',
      icon: Mail,
      color: 'from-emerald-600 to-emerald-800',
      hoverColor: 'hover:shadow-emerald-500/50'
    }
  ];


  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
  <motion.div 
    variants={floatingVariants}
    animate="animate"
    className="absolute top-20 right-20 w-32 h-32 
               bg-gradient-to-br from-blue-400/20 to-purple-600/20 
               dark:from-blue-800/30 dark:to-purple-900/30
               rounded-full mix-blend-multiply filter blur-xl"
  />
  <motion.div 
    variants={floatingVariants}
    animate="animate"
    style={{ animationDelay: '3s' }}
    className="absolute bottom-20 left-20 w-40 h-40 
               bg-gradient-to-br from-emerald-400/20 to-blue-600/20 
               dark:from-emerald-800/30 dark:to-blue-900/30
               rounded-full mix-blend-multiply filter blur-xl"
  />
  <motion.div 
    variants={floatingVariants}
    animate="animate"
    style={{ animationDelay: '1.5s' }}
    className="absolute top-1/3 left-1/4 w-24 h-24 
               bg-gradient-to-br from-purple-400/20 to-pink-600/20 
               dark:from-purple-800/30 dark:to-pink-900/30
               rounded-full mix-blend-multiply filter blur-xl"
  />
</div>

      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-12 items-start">
          <motion.div 
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight mb-6">
                Let's Connect
              </h2>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </motion.div>


            {/* Social Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={socialVariants}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center shadow-lg ${social.hoverColor} transition-all duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};