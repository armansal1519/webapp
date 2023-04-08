<template>
  <h1>hi</h1>
</template>

<script>
import {
  CourseServiceClient,
  SearchCourseRequest,
} from "app/proto/course_grpc_web_pb";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListCourses",
  setup() {
    console.log("hiiiiiiiiiiiiiiii");
    const client = CourseServiceClient("http://localhost:30032", null, null);
    client.search(new SearchCourseRequest(), {}, (err, response) => {
      // handle the response
      console.log(response);
    });
  },
});
</script>

<style></style>
