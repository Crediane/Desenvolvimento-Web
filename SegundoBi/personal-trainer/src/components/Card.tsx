import Champion from '../assets/Champion.svg'
import '../styles/Solution.css'

interface CardProps {
    titulo: string;
    paragrafo: string;
}

export default function Card({ titulo, paragrafo }: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={Champion} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
                <h3>
                    {titulo}
                </h3>
                <p>
                    {paragrafo}
                </p>
                <hr />
            </div>
        </div>
    )
}