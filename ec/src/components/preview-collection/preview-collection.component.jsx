import React from 'react'
import CollectionItem from "../collection-item/collection-item.component"

import './preview-collection.component.styles.scss'


const PreviewCollection = ({title, items}) => {
    return <div className="collection-preview">

       <h1 className="title">{title.toUpperCase()}</h1> 

       <div className="preview">
           {items.filter((i, idx) => (idx < 4)).map(({id, ...otherItemProps}) => (
               <CollectionItem key={id} {...otherItemProps} />
           ))}
       </div>
    </div>
}
export default PreviewCollection;