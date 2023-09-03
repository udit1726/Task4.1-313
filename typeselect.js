import React from 'react';

function TypeSelector({ selectedPostType, handlePostTypeChange }) {
  return (
    <div className="post-type-buttons">
      <button
        className={selectedPostType === 'question' ? 'active' : ''}
        onClick={() => handlePostTypeChange('question')}
      >
        Question
      </button>
      <button
        className={selectedPostType === 'article' ? 'active' : ''}
        onClick={() => handlePostTypeChange('article')}
      >
        Article
      </button>
    </div>
  );
}

export default TypeSelector;
