import React from 'react';
import './quesform.css';

function QuestionForm() {
  return (
    <div class="post-form">
      <h2>What do you want to ask or share</h2>
      <form>
        <h3>This section is designed based on the type of post. It could be developed by conditional rendering.
           For post a question, the following section would be appeared</h3>

        <div class="form-group">
          <label lab="questionTitle">Title</label>
          <input
            type="text" id="questionTitle"name="questionTitle"
            placeholder="Start your question with how, what, why etc."
          />
        </div>
        <div class="form-group">
          <label lab="problemDescription">Describe Your Problem</label>
          <textarea id="problemDescription" name="problemDescription" rows="10"
          ></textarea>
        </div>
        <div class="form-group">
          <label lab="questionTags">Tags</label>
          <input type="text" id="questionTags" name="questionTags" placeholder="Please add-up atleast 3 tags to describe what your article is all about.." />
        </div>
        <button type="submit">Post your Question</button>
      </form>
    </div>
  );
}

export default QuestionForm;
