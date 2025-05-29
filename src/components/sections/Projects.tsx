import {motion} from "framer-motion";
import { Code2 } from "lucide-react";
import ProjectCard from "../ProjectCard";
import type { Project } from "../../data/projects";

interface Props{
    projects:Project[]
    title:string
}

export const Projects = ({projects,title}:Props) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

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


  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden">
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

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className={`grid gap-8 md:grid-cols-2 xl:grid-cols-3' grid-cols-1 max-w-4xl mx-auto`}
          variants={itemVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={projectVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};