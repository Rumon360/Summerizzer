import { Tab } from "@headlessui/react";
import { useState } from "react";
import Checkbox from "../Checkbox";

import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

function MainSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLang, setSelectedLang] = useState({
    name: "",
    key: "",
  });
  const [text, setText] = useState("");
  const [summarizedtext, setsummarizedtext] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    apiKey: process.env.openaiKey,
  });
  const openai = new OpenAIApi(configuration);

  const getTranslation = async (value) => {
    try {
      const data = await axios
        .post("/api/getTranslation", {
          text: value,
          lang: selectedLang.key,
        })
        .then((response) => {
          setsummarizedtext(response.data.data);
          setSelectedIndex(1);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const HandleSubmit = async (e) => {
    if (selectedLang?.name?.length > 1 && text.replace(/\s/g, "").length > 1) {
      setLoading(true);
      e.preventDefault();
      const promptText = generatePrompt(text);
      const response = await fetch("/api/getSummerized", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: promptText }),
      });
      const data = await response.json();

      if (data) {
        getTranslation(data?.result?.choices[0].text);
      }
    } else {
      alert("Please Select A Language and Put Input Text!");
    }
  };

  function generatePrompt(value) {
    let better = value.replace(/\s+/g, " ").trim();
    return `Summarize this: ${better}.`;
  }

  return (
    <section
      id="main"
      className="container relative flex flex-col gap-y-6 justify-center py-16 md:py-28"
    >
      <div className="main-drop" />
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Enter the text you want to Summerise and the output language!
      </h2>
      <Checkbox setSelectedLang={setSelectedLang} />
      <div className="glass">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex items-center space-x-1 rounded-xl ">
            <Tab
              className={`w-full relative  text-lg font-medium leading-5 text-black ${
                selectedIndex === 0 && "border-2 border-black"
              } rounded-lg py-2`}
            >
              English
            </Tab>

            <span className={"font-bold text-2xl"}>|</span>
            <Tab
              className={`w-full relative  text-lg font-medium leading-5 text-black ${
                selectedIndex === 1 && "border-2 border-black"
              } rounded-lg py-2`}
            >
              Summerized
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-3">
            <Tab.Panel className="p-1.5">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Insert Text here to summerise..."
                className="w-full h-[40vh] p-2"
              ></textarea>
            </Tab.Panel>
            <Tab.Panel className="p-1.5">
              <textarea
                id="summerizedTextArea"
                value={summarizedtext}
                onChange={(e) => setsummarizedtext(e.target.value)}
                className="w-full h-[40vh] p-2"
              ></textarea>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        <div className="flex justify-center items-center w-full">
          {selectedIndex === 0 ? (
            <button
              onClick={HandleSubmit}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading ? "Loading" : "Summerize"}
            </button>
          ) : (
            <button
              onClick={() => {
                let copyText = document.getElementById("summerizedTextArea");
                copyText.select();
                copyText.setSelectionRange(0, 99999);
                navigator.clipboard.writeText(copyText.value);
                // Alert the copied text
                alert("Copied the text: " + copyText.value);
              }}
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Copy
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default MainSection;
