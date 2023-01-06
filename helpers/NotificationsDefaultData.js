
export const NotificationsDefaultData = async() => {

    /*TODO GET NOTIFICATIONS*/

    const notifications = [
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Alta Usuario' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Baja de Usuario' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Nuevo Sobre' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Nuevos Reportes de Auditoria Disponibles!', path: '/reporteAuditoria', action:'redirect' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Atento! Este mensaje requiere de tu atención, aunque no es tan importante.' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Cuidado! Es muy importante que leas este mensaje de alerta. Error! Haz algunos cambios antes de volver a enviar el formulario.' },
        { img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Error! Haz algunos cambios antes de volver a enviar el formulario.' }
    ]

    return {
        notifications
    }

}