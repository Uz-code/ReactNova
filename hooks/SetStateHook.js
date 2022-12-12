import { useState } from 'react';

export const SetStateHook = (   ) => {
  
    const showSidebar = () => setSidebar(!sidebar);

    const [sidebar, setSidebar] = useState(false);

    return {
      
        sidebar,
        
    }
}