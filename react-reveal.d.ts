// react-reveal.d.ts
declare module 'react-reveal/Fade' {
    import * as React from 'react';
  
    interface FadeProps {
      children?: React.ReactNode;  // Explicitly allow children
      out?: boolean;
      left?: boolean;
      right?: boolean;
      top?: boolean;
      bottom?: boolean;
      big?: boolean;
      mirror?: boolean;
      opposite?: boolean;
      duration?: number;
      timeout?: number;
      distance?: string;
      delay?: number;
      count?: number;
      forever?: boolean;
    }
  
    const Fade: React.FC<FadeProps>;
    export default Fade;
  }
  