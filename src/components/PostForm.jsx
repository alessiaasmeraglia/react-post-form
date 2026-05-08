import { useState } from "react";

const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function PostForm() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    const handleChange = (event) => {
        const target = event.target;
        const tagType = target.type;
        const name = target.name;
        const value = target.value;
        const checked = target.checked;

        const valueToUpdate = tagType === "checkbox" ? checked : value;

        setFormData({
            ...formData,
            [name]: valueToUpdate,
        });
    };
}

export default PostForm;