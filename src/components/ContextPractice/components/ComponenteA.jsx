import React from 'react'
import ComponenteB from './ComponenteB';

const ComponenteA = (props) => {
    const {text} = props;
  return (
    <div>
        <h1>Componente A</h1>
        <ComponenteB text={text} />
    </div>
  )
}

export default ComponenteA