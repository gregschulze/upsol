'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  MotionProps,
  motion,
  Variants,
} from 'framer-motion';
import React, { ReactNode } from 'react';

type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'pop'
  | 'swing';

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(4px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  'blur-slide': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
    },
  },
  'slide-up': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  'slide-down': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  'slide-left': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
  },
  'slide-right': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  },
  pop: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', bounce: 0.4 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -5 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: 'spring', bounce: 0.4 },
      },
    },
  },
};

export function AnimatedGroup({
  children,
  className,
  variants,
  preset = 'fade',
}: AnimatedGroupProps & MotionProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };

  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

AnimatedGroup.Item = motion.div;