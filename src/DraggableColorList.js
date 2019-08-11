import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggleColorBox from './DraggleColorBox';

const DraggleColorList = SortableContainer((props)=>{
    let {colors, handleDeleteIcon} = props;
    return (
        <div style={{height: "100%"}}>
            {colors.map((color,idx)=> (<DraggleColorBox
                index={idx}
                key={color.name}
                color={color}
                handleDeleteIcon={ () => handleDeleteIcon(color.name)} />))}
        </div>
    )
})

export default DraggleColorList