import { useState } from 'react';

export const SetState = (  ) => {
  
    const showSidebar = () => setSidebar(!sidebar);

    const [sidebar, setSidebar] = useState(false);

    return {
      
        setSidebar,
        
    }
}