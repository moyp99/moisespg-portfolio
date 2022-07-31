export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: { opacity: 0, transition: { duration: 0.75 } },
  },
};

export const popUp = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: { opacity: 0, transition: { duration: 0.75 } },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 1,  staggerChildren: 0.25},
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const pageAnimation = {
    hidden: {
      opacity: 0,
      
    },
    show: {
      opacity: 1,
      
      transition: {
        duration: 1,
        // when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
    exit: {
      opacity: 0,
  
      transition: { duration: 0.5 },
      //delay:0.5
    },
  };

  export const titleAnim = {
    hidden: { y: 200 },
    show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };
