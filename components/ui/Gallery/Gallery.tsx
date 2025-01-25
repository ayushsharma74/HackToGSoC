import React, { ReactHTMLElement } from "react"
import { cn } from "@/utils/cn"

export const Gallery: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    ...props
}) => {
    const gallery = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (props.children && gallery.current) {
            const main = gallery.current;
            const items = main.children;
            main.style.gridTemplateRows = "10px 1fr";
            main.style.gridTemplateColumns = "repeat(auto-fill, minmax(20rem, 1fr))";
            for (let i = 0; i < items.length; i++){
                const h = items[i].clientHeight;
                const rowSpan = Math.ceil(h / 10);
                // (items[i] as HTMLElement).style.gridRowEnd = `span ${rowSpan}`;
                (items[i] as HTMLElement).style.gridRowEnd = `span ${rowSpan}`;
                
            }
        }

     }, [props.children])
    return (
        <div ref={gallery} {...props} className={cn(
            "grid grid-flow-dense gap-2 p-4 border justify-items-center",
            className
        )}
            
        >
            {props.children}
        </div>
    )
}