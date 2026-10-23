import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable smooth scroll reveal component powered by Framer Motion.
 * Activates smoothly as the user scrolls into view.
 */
export default function ScrollReveal({
  children,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  delay = 0,
  duration = 0.6,
  distance = 32,
  className = '',
  scale = 1,
  once = true,
  amount = 0.15,
  ...props
}) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialPosition();

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialOffset,
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Smooth custom cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrapper for staggered children animations
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  className = '',
  amount = 0.15,
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item inside a StaggerContainer
 */
export function StaggerItem({
  children,
  direction = 'up',
  distance = 28,
  duration = 0.55,
  scale = 1,
  className = '',
  ...props
}) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...getOffset(),
          scale: scale !== 1 ? scale : 1,
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
