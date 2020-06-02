import React from 'react';
import Aux from '../../hoc/Aux'
import CssClasses from './Layout.css';

const layout = (props) => (
    <Aux>
    <div>Toolbar, side drawer, backdrop</div>
    <main className={CssClasses.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;