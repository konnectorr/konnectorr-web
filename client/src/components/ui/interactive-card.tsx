import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card";

// Enhanced Interactive Card with hover effects
const InteractiveCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hoverEffect?: "scale" | "lift" | "glow" | "border" | "none";
    clickEffect?: boolean;
  }
>(({ className, hoverEffect = "scale", clickEffect = true, ...props }, ref) => {
  const getHoverClass = () => {
    switch (hoverEffect) {
      case "scale":
        return "hover:scale-[1.02] active:scale-[0.98]";
      case "lift":
        return "hover:-translate-y-1 active:translate-y-0";
      case "glow":
        return "hover:shadow-lg hover:shadow-primary/20";
      case "border":
        return "hover:border-primary transition-colors";
      case "none":
        return "";
      default:
        return "hover:scale-[1.02]";
    }
  };

  return (
    <Card
      ref={ref}
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        getHoverClass(),
        clickEffect && "active:shadow-inner cursor-pointer",
        className
      )}
      {...props}
    />
  );
});
InteractiveCard.displayName = "InteractiveCard";

// Enhanced Card with Before/After hover effect
const HoverEffectCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    hoverContent?: React.ReactNode;
    hoverBackground?: string;
    transitionType?: "fade" | "flip" | "slide-up" | "slide-right";
  }
>(({ 
  className, 
  children, 
  hoverContent, 
  hoverBackground = "bg-primary/90 text-white", 
  transitionType = "fade",
  ...props 
}, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    "slide-up": {
      hidden: { opacity: 0, y: "100%" },
      visible: { opacity: 1, y: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: "-100%" },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
    >
      <div className={cn("transition-all duration-300", isHovered ? "opacity-30" : "opacity-100")}>
        {children}
      </div>

      <AnimatePresence>
        {isHovered && hoverContent && (
          <motion.div
            className={cn(
              "absolute inset-0 flex flex-col justify-center items-center p-5",
              hoverBackground
            )}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants[transitionType]}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {hoverContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
HoverEffectCard.displayName = "HoverEffectCard";

// Flip Card component for revealing content when clicked
const FlipCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    flippedOnHover?: boolean;
  }
>(({ className, frontContent, backContent, flippedOnHover = false, ...props }, ref) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "relative perspective-1000 w-full h-full transition-all duration-500",
        className
      )}
      onClick={() => !flippedOnHover && setIsFlipped(!isFlipped)}
      onMouseEnter={() => flippedOnHover && setIsFlipped(true)}
      onMouseLeave={() => flippedOnHover && setIsFlipped(false)}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          {frontContent}
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 [transform:rotateY(180deg)]">
          {backContent}
        </div>
      </div>
    </div>
  );
});
FlipCard.displayName = "FlipCard";

// Glass Card with frosted glass effect
const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    blur?: string;
    opacity?: string;
    border?: string;
    fallbackBackground?: string;
  }
>(({ 
  className,
  blur = "backdrop-blur-md",
  opacity = "bg-white/30 dark:bg-gray-900/30",
  border = "border border-white/20 dark:border-gray-800/20",
  fallbackBackground = "bg-gray-100/90 dark:bg-gray-900/90",
  ...props 
}, ref) => {
  // Feature detection for backdrop-filter support
  const [supportsBackdropFilter, setSupportsBackdropFilter] = React.useState(true);
  
  React.useEffect(() => {
    // Check if backdrop-filter is supported
    const isBackdropFilterSupported = CSS.supports('backdrop-filter', 'blur(10px)');
    setSupportsBackdropFilter(isBackdropFilterSupported);
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl shadow-lg",
        supportsBackdropFilter ? cn(blur, opacity, border) : fallbackBackground,
        className
      )}
      {...props}
    />
  );
});
GlassCard.displayName = "GlassCard";

// Pulsing Card for drawing attention
const PulsingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    pulseColor?: string;
    pulseIntensity?: "light" | "medium" | "strong";
    pulseSpeed?: "slow" | "medium" | "fast";
  }
>(({ 
  className, 
  pulseColor = "primary", 
  pulseIntensity = "medium", 
  pulseSpeed = "medium",
  ...props 
}, ref) => {
  // Configure pulse based on props
  const getPulseClass = () => {
    let pulseClass = "animate-pulse";
    
    if (pulseSpeed === "slow") pulseClass = "animate-pulse-slow";
    if (pulseSpeed === "fast") pulseClass = "animate-pulse-fast";

    const intensityMap = {
      light: `ring-${pulseColor}/20`,
      medium: `ring-${pulseColor}/40`,
      strong: `ring-${pulseColor}/60`,
    };

    return `${pulseClass} ${intensityMap[pulseIntensity]}`;
  };

  return (
    <div className="relative">
      <div className={cn("absolute -inset-1 rounded-xl opacity-70", getPulseClass())}></div>
      <Card
        ref={ref}
        className={cn("relative", className)}
        {...props}
      />
    </div>
  );
});
PulsingCard.displayName = "PulsingCard";

export { 
  InteractiveCard, 
  HoverEffectCard,
  FlipCard,
  GlassCard,
  PulsingCard
};