import { useState } from "react";

const API_URL = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function PostForm() {
    const [formData, setFormData] = useState ({
        author: "",
        title: "",
        body: "",
        public: false,
    });
}