
export const FormSubtituleComponent = ({name}) => {

    return (
        <div className='input-group mb-1' style= {{ paddingLeft : "8.5px" }}>
            <p className='subtitulo no-select'>{ name }</p>
        </div>
    )
}