import React, { useEffect, useState } from 'react'
import logo_brand from '../../../assets/images/logo_white_background.png'
import { NavLink, useLocation } from 'react-router-dom'
import './style.scss'

const BrandContainer = () => {

    const [isAiGenerations, setIsAiGenerations] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setIsAiGenerations(location.pathname === '/ai-generations');
    }, [location]);

    return (
        <div className='brand-container'>
            <div className='brand'>
                <NavLink className='item-link' to="/home">
                    <div className='img-div'>
                        <img src={logo_brand} alt='logo img' />
                        <p>YourMage<span>.Ai</span></p>
                    </div>
                </NavLink>

                {isAiGenerations
                    &&
                    <NavLink className="chakra-button back-button" to="/home">
                        <svg width="calc(0.9rem * 1.5000)" height="calc(0.9rem * 1.5625)" viewBox="0 0 24 25">
                            <svg><path d="M17.7499 12.5C17.7499 12.914 17.4139 13.25 16.9999 13.25H4.81091L8.53088 16.97C8.82388 17.263 8.82388 17.738 8.53088 18.031C8.38488 18.177 8.19285 18.251 8.00085 18.251C7.80885 18.251 7.61682 18.178 7.47082 18.031L2.47082 13.031C2.40182 12.962 2.34695 12.8791 2.30895 12.7871C2.23295 12.6041 2.23295 12.3971 2.30895 12.2141C2.34695 12.1221 2.40182 12.039 2.47082 11.97L7.47082 6.96997C7.76382 6.67697 8.23885 6.67697 8.53185 6.96997C8.82485 7.26297 8.82485 7.73801 8.53185 8.03101L4.81188 11.751H16.9999C17.4139 11.75 17.7499 12.086 17.7499 12.5ZM20.9999 5.75C20.5859 5.75 20.2499 6.086 20.2499 6.5V18.5C20.2499 18.914 20.5859 19.25 20.9999 19.25C21.4139 19.25 21.7499 18.914 21.7499 18.5V6.5C21.7499 6.086 21.4139 5.75 20.9999 5.75Z" fill="currentColor"></path>
                            </svg>
                        </svg>
                    </NavLink>
                }

            </div>
        </div>
    )
}

export default BrandContainer