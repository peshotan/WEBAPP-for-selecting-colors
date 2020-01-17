import React from 'react';
import './'

function Page(props) {
    return (
        <section className='page'>
            {props.children}
        </section>
    )
}

export default Page