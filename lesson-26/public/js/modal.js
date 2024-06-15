"use strict";

$(document).ready(()=> {
    $("#modal-button").click(() => {
        $(".modal-body").html("");

        $.get("/courses?format-json", (data) => {
            data.forEach(course => {
                $(".modal-body").append(
                    `<div>
                        <h5 class="course-title>${course.title}</h5>
                        <p class="course-description">${course.description}</p>
                        <p><a href="/courses/${course._id}">View Course</a></p>
                        <button class="btn btn-info" data-id="${course._id}">Jion</button>
                    </div>`
                );
            });
        });
    });
});