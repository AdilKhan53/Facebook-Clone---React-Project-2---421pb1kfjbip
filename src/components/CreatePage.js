import React, { useState } from "react";
import "../styles/CreatePage.css";
import { useSelector } from "react-redux";

function CreatePage({ onClose }) {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const user = useSelector((store) => store.user.userDetails);
  // console.log(user.token);

  const handleCreatePage = () => {
    postPageData();
    onClose();
  };
  async function postPageData() {
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDU0ZjBiODYxY2ZmNjJkOTI3NWJmZSIsImlhdCI6MTY5OTM1NDk0NCwiZXhwIjoxNzMwODkwOTQ0fQ.PkCcz6cP0TG8Nj6pEDCJ4I5CD-LvCVaKLv6qOmvz3xY

    var headersList = {
      Authorization: "Bearer " + user?.token,
      projectId: "421pb1kfjbip",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      description: description,
      name: name,
    });

    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/channel/",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.json();
    //console.log(data);
  }
  return (
    <div className="popup">
      <h1>Create a page</h1>
      <p className="topPara">
        Your Page is Where people go to learn More about you more about you.
        Make sure that your has all of the infromation they may need.
      </p>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <input
        type="text"
        placeholder="Page Name(required)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="details">
        Use the name of business,barnd or orgnisation,or name that helps explain
        your page.
      </p>
      <input
        type="text"
        placeholder="description (required)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p className="details">
        {" "}
        Enter a Description that best describes about your page.
      </p>
      <button
        className="popup-button"
        onClick={() => {
          handleCreatePage();
          alert("Page created successfully");
        }}
        text="Create page"
      >
        Create page
      </button>
    </div>
  );
}

export default CreatePage;
