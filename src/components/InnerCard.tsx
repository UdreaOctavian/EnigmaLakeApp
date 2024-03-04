import { ReactNode } from "react"

interface InnerCardProps {
    children: ReactNode
    title: string
}

const InnerCard: React.FC<InnerCardProps> = ({children, title}) => {
    return (
        <div className="inner-card">
            
            <div className="inner-card-header">
                <p className="inner-card-header-text">{title}</p>
            </div>

            {children}

        </div>
    )
}

export default InnerCard