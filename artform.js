import React from 'react';

function ArticleForm() {
    return (
      <div class="post-form">
      <h2>What do you want to ask or share</h2>
        <form>
          <div class="form-group">
            <label lab="title">Title</label>
            <input type="text" id="title" name="title" 
             placeholder="Enter a descriptive title"/>       
          </div>
          <div class="form-group">
            <label lab="abstract">Abstract</label>
            <textarea id="abstract" name="abstract" rows="6"
            placeholder="Enter a 1-paragraph abstract">
            </textarea>
          </div>
          <div class="form-group">
            <label lab="articleText">Article Text</label>
            <textarea id="articleText" name="articleText" rows="6"placeholder="Enter a 1-paragraph abstract"></textarea>
          </div>
          <div class="form-group">
            <label lab="tags">Tags</label>
            <input type="text" id="tags" name="tags" placeholder="Please add-up atleast 3 tags to describe what your article is all about.." />
          </div>
          <button type="submit">Post your Article</button>
        </form>
      </div>
    );
  }
  
export default ArticleForm;
