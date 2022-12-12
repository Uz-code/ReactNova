import { useState } from 'react';

export const FlexBoxCard = ({ title, index, subtitle, img , checkboxState }) => {
    
    const [checked, setState] = useState(checkboxState);

	const onButtonClick = () => {
		
		setState(!checked);
	}
    return (
        <>
            <div className= "card mh-2 shadow border-0 " >
                <div className="card-header">
                    <div>
                        <span>
                            <img src={img}/>
                        </span>
                        <h3>{title}</h3>
                    </div>
                    <label className="toggle">
                        <input type="checkbox" checked={checked} onChange={onButtonClick}/>
                        <span></span>
                    </label>
                </div>
                <div className="card-body">
                    <p>{subtitle}</p>
                </div>
                <div className="card-footer">
                    <a href="#">Ver más</a>
                </div>
            </div>
        </>
    )
}

