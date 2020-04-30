import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button'

function App() {
    return (
        <div className="App">
            <Button
                btnType={ButtonType.Dashed}
                className={'test'}
                onClick={e => console.log(e)}>disabled</Button>
            <Button
                loading
                btnType={ButtonType.Primary}
                size={ButtonSize.Large}>button</Button>
            <Button
                target={'__blank'}
                btnType={ButtonType.Link}
                href={'https://www.baidu.com'}
            >link</Button>
        </div>
    );
}

export default App;
