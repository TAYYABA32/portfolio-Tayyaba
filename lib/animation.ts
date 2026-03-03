export const terminalVariants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: i * 0.1,
      },
    }),
  };
  
  export const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline",
      transition: { duration: 0 } 
    },
  };