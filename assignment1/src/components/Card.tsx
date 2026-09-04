import type { ReactNode } from "react";
import "./Card.css";

export interface CardProps {
    title : string ,
    children : ReactNode,
    variant : "default" | "highlighted" | "compact" ,
    footer ?: string , 
} 

function Card({title , children , variant , footer} : CardProps) {
    return (
        <div className={`card ${variant}`}>
            <h2 className="card-title">{title}</h2>

                <div className="card-content">
                    {children}
                </div>

            {footer && (
                <div className="card-footer">
                {footer}
                </div>
            )}
        </div>
    )
}

export default Card;