import router from "./LangRoutes.js";


router.route('/').get().post();
router.route('/:id').get().put().delete(); 
