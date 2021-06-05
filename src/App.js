import React from 'react'
import Container from './components/Container'
import Header from './components/Header'

function App(props) {
    return (
      
        <div id="globalContainerOutter">
            <div id="globalContainerInner">
                <Header page={props.page} subpage={props.subpage} />
                <Container page={props.page} subpage={props.subpage} />
            </div>
        </div>
    );
}

export default App;