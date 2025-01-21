export function Loader() {
    return (
      <div className="inline-grid 
        before:content-[''] before:h-[27px] before:aspect-[5] 
        before:bg-[conic-gradient(from_135deg_at_top,#000_90deg,#0000_0),conic-gradient(from_-45deg_at_bottom,#000_90deg,#0000_0)_12.5%_100%]
        before:bg-[length:20%_50%] before:bg-repeat-x
        before:clip-path-[inset(0_50%)]
        before:animate-l20
        
        after:content-[''] after:h-[27px] after:aspect-[5]
        after:bg-[conic-gradient(from_135deg_at_top,#000_90deg,#0000_0),conic-gradient(from_-45deg_at_bottom,#000_90deg,#0000_0)_12.5%_100%]
        after:bg-[length:20%_50%] after:bg-repeat-x
        after:clip-path-[inset(0_50%)]
        after:animate-l20 after:animation-delay-[-1s]"
      />
    );
  }