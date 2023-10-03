import Blog from "../models/models.js";

const getAllBlogs = async () => {
    return await Blog.find();
}

const getBlogById = async (id) => {
    return await Blog.findById(id);
}

const createBlog = async (blog) => {
    return await Blog.create(blog);
}

const updateBlog = async (id, blog) => {
    return await Blog.findByIdAndUpdate(id, blog);
}

const deleteBlog = async (id) => {
    return await Blog.findByIdAndDelete(id);
}

const blogService = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
};

export default blogService;
