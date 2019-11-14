const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form action='/wiki/' method='POST'>

    <div class="form-group">
    <label for="Author Name" class="col-sm-2 control-label">Author Name</label>
    <div class="col-sm-10">
      <input id="Author-Name" name="Author-Name" type="text" class="form-control"/>
    </div>
  </div>

  <div class="form-group">
  <label for="Author Email" class="col-sm-2 control-label">Author Email</label>
  <div class="col-sm-10">
    <input id="Author-Email" name="Author-Email" type="text" class="form-control"/>
  </div>
</div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="Content" class="col-sm-2 control-label">Content</label>
    <div class="col-sm-10">
      <input id="content" name="content" type="text" class="form-control"/>
    </div>
  </div>

    <div class="form-group">
      <label for="Status" class="col-sm-2 control-label">Status</label>
      <div class="col-sm-10">
        <input id="Status" name="Status" type="text" class="form-control"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
