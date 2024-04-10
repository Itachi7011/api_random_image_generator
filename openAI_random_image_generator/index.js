// Go to Open Ai and Generate your own API key and paste in API_Key value
const API_Key = "";
const input1 = document.getElementById("main-input");
const enterBtn = document.getElementById("enter-btn");
const GeneratedImageDiv = document.getElementById("new-generated-image");

const get_images = async () => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_Key}`,

      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: input1.value,
      n: 4,
      size: "256x256",
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );
    const data = await response.json();

    console.log(data);
    data?.data.foreach((imageObject) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageObject.url);
      imageContainer.appendChild(imageElement);
      GeneratedImageDiv.appendChild(imageContainer);
    });
    input1.value = "";
  } catch (e) {
    console.log("Error during getting image" + e);
  }
};

enterBtn.addEventListener("click", get_images);
