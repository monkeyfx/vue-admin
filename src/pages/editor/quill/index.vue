<template>
  <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" />
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      content:
        "<h1>I am Example</h1><br/><h2>I am Example</h2><br/><h3>I am Example</h3><br/><h4>I am Example</h4><br/><h5>I am Example</h5><br/><h6>I am Example</h6>",
      editorOption: {
        // some quill options
      }
    };
  },
  components: {
    quillEditor
  }
};
</script>
