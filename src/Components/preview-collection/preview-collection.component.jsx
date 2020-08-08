import React from 'react';

import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewComponent = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewComponent;
