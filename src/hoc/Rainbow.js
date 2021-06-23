import React from 'react';

const Rainbow = (WrappedComponenet) => {

    const colors = ['orange','red','yellow','pink','green','grey','brown']
    const randomColor = colors[Math.floor(Math.random()*6)]
    const className = randomColor+'-text';

    return(props) => {
        return(
            <div className={className}>
                <WrappedComponenet {...props}/>
            </div>
        )
    }
}

export default Rainbow 