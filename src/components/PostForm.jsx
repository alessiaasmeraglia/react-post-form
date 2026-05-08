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

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("Risposta del server:", json);
                alert("Post inviato con successo!");

                // reset form
                setFormData({
                    author: "",
                    title: "",
                    body: "",
                    public: false,
                });
            });
    };
}

export default PostForm;