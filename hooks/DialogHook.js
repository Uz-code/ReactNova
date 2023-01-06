
import { useState } from 'react';

export const DialogHook = ( {title, message } ) => {

	const [dialog, setDialog] = useState({
		title: title,
		message: message,
		AcceptHandler : null,
		CancelHandler : null,
		customButtonText : 'Aceptar',
	});

    return {
        dialog,
		setDialog
    }
}
