import { useState } from 'react';

const Tabs = ({ children , setTab, Tab }) => {

const [activeTab, setActiveTab] = useState(Tab ||children[0].props.label);

const toggleTab = (index) => {
    setActiveTab(index);
    setTab(index);
  };

return( 
    <>
    <div className="horizontal-tabs">
        {children.map ( (child) => {
            if(child.props.label != '')
            {
                return (
                    <a className={activeTab === child.props.label ? "active inline-flex items-center text-sm font-medium text-gray-700 " : "inline-flex items-center text-sm font-medium text-gray-700" }
                    onClick={() => toggleTab(child.props.label)} key={child.props.label} >{child.props.label}</a>
                )
            } 
        })}
    </div>
    <div className="content-header">
        {children.map ((child) => {
            if(child.props.label)
            {
            return (
                <div className={activeTab === child.props.label ? "content-tab  active-content" : "content-tab"} key={child.props.label} >
                    {child.props.children}
                </div>
            )
           }   
        })}

    </div>
    </>
)
}

export default Tabs;
