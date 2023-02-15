import { Langs } from "data/lang";
import React, { useRef } from "react";
import Select from "react-select";

function Checkbox({ setSelectedLang }) {
  return (
    <div className="flex w-full justify-center items-center">
      <Select
        onChange={(e) => {
          setSelectedLang({
            name: e?.name,
            key: e?.key,
          });
        }}
        id="long-value-select"
        instanceId="long-value-select"
        name="language"
        className="w-[80%] md:w-[50%]"
        options={Langs}
        isClearable={true}
        maxMenuHeight={200}
        placeholder="Select Language"
      />
    </div>
  );
}

export default Checkbox;
