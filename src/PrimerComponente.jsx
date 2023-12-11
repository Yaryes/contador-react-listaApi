import './PrimerComponente.css'
import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo, subtitulo}) => {
  return (
    <>  
    <div style={estiloContenedor}>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
    </div>
    </>
  )
}
const estiloContenedor = {
  flexDirection: 'column',
  textAlign: 'center'
};
/***** Inicializar variables con ReactJS, Importar PropoTypes *******/
PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired
}

PrimerComponente.defaultProps = {
  titulo:  'Mi primer Componte',
  subtitulo: 'definiendo Props'
}




