import React, { useState } from 'react';
import './App.css';
import QuestionForm from './quesform';
import ArticleForm from './artform';
import TypeSelector from './typeselect';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div class="App">
      <header class="App-header">
        <h1>New Post</h1>
      </header>
      <div class="post-type-label">SELECT POST TYPE</div> 
      <TypeSelector
        selectedPostType={selectedPostType}
        handlePostTypeChange={handlePostTypeChange}
      />
      {selectedPostType === 'question' ? (
        <QuestionForm />
      ) : (
        <ArticleForm />
      )}
    </div>
  );
}

export default App;
