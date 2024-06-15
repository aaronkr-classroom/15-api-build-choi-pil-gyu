// routes/apiRoutes.js
"use strict";

/**
 * Listing 27.1 (p. 392)
 * @TODO: apiRoutes.js에서 모든 강좌를 보기 위한 라우트 추가
 */
const router = require("express").Router(),
  coursesController = require("../controllers/coursesController");

router.get("/courses", coursesController.index,
    coursesController.filterUserCourses,
    coursesController.respondJSON
);
router.get("/courses/:id/join",
    coursesController.join,
    coursesController.respondJSON
);
router.use(coursesController.errorJSON);
module.exports = router;
